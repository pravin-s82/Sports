'use client'
import { useEffect, useMemo, type FunctionComponent } from "react"
import { type ContentSearchResults, Filters } from "@/lib/api/search"
import { useIntUrlState, useStringUrlState } from "@/lib/use-url-state"
import useSWR from "swr"
import { contentLinkToString } from "@remkoj/optimizely-graph-client"
import { useOptimizelyOne } from "@remkoj/optimizely-one-nextjs"
import dynamic from "next/dynamic"

//Components only used within the results
const RadioGroup = dynamic(() => import('@/components/shared/radio-group'), { ssr: false })
const SearchResultItem = dynamic(() => import('./_search_item'), { ssr: false })

export type SearchProps = {
    initialQuery?: string
    initialResults?: ContentSearchResults
}

export const Search : FunctionComponent<SearchProps> = ({ initialQuery, initialResults }) => 
{
    const opti = useOptimizelyOne()
    const [query] = useStringUrlState('query', initialQuery ?? '')
    const [limit, setLimit] = useIntUrlState('limit', 12, x => x > 0)
    const [start, setStart] = useIntUrlState('start', 0, x => x >= 0)
    const [locale, setLocale] = useStringUrlState('locale', '')
    const [ctype, setCType] = useStringUrlState('ctype', '')


    const swrKey = useMemo(() => {
        if (!query || query.length < 3)
            return null
        const params = new URLSearchParams()
        params.set('query', query)
        params.set('limit', limit.toString())
        params.set('start', start.toString())
        const facets : Filters = {
            locale,
            ctype
        }
        params.set('facets', JSON.stringify(facets))
        return `/api/content/search?${ params.toString() }`
    }, [ query, limit, start, locale, ctype ])

    const { data: results, isLoading } = useSWR<ContentSearchResults, any, string | null>(swrKey, {
        fetcher: (key) => fetch(key).then(r => {
            if (!r.ok)
                throw new Error(`${ r.status }: ${ r.statusText }`)
            return r.json()
        }),
        fallbackData: initialResults
    })

    useEffect(() => {
        const t = results?.term
        if (!opti || !t || t.length < 3)
            return
        opti.track({
            event: "navigation",
            action: "search",
            search_term: t
        })
    }, [results?.term, opti])

    if (isLoading || (!results && query.length >= 3)) {
        return (
            <div>
                <div className="text-[22px] mb-[40px] will-change-contents">
                    Your search matched <span className="inline-block h-[1.5rem] w-[3rem] align-middle animate-pulse bg-light-grey rounded-[5px]"></span> pages.
                </div>
                <div className="flex flex-row gap-4 justify-between mb-[20px]">
                    <div className="search-results-list w-full will-change-auto">
                        <div className="block py-[20px] animate-pulse flex flex-col gap-4">
                            <div className="bg-light-grey w-[50%] h-[30px] rounded-[10px]"></div>
                            <div className="bg-light-grey w-full h-[90px] rounded-[10px]"></div>
                        </div>
                        <div className="block py-[20px] animate-pulse flex flex-col gap-4">
                            <div className="bg-light-grey w-[50%] h-[30px] rounded-[10px]"></div>
                            <div className="bg-light-grey w-full h-[90px] rounded-[10px]"></div>
                        </div>
                        <div className="block py-[20px] animate-pulse flex flex-col gap-4">
                            <div className="bg-light-grey w-[50%] h-[30px] rounded-[10px]"></div>
                            <div className="bg-light-grey w-full h-[90px] rounded-[10px]"></div>
                        </div>
                    </div>
                    <div className="w-[30%] mb-[40px] flex flex-col gap-4 justify-start">
                        <div className="block py-[20px] animate-pulse flex flex-col gap-4">
                            <div className="bg-light-grey w-full h-[150px] rounded-[10px]"></div>
                        </div>
                        <div className="block py-[20px] animate-pulse flex flex-col gap-4">
                            <div className="bg-light-grey w-full h-[150px] rounded-[10px]"></div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }

    if (!results) 
        return <>Sorry, no results matches your search</>

    const resultCount = results?.total ?? 0
    const cTypeFacet = results?.facets?.filter(x => x.key == 'ctype')?.at(0)
    const cTypeFacetOptions = cTypeFacet?.options.filter(x => !x.key.startsWith('_')).map(o => { return { value: o.key, label: o.label || undefined }} ) || []
    const localeFacet = results?.facets?.filter(x => x.key == 'locale')?.at(0)
    const localeFacetOptions = localeFacet?.options.map(o => { return { value: o.key, label: o.label || undefined }} ) || []
    cTypeFacetOptions.unshift({
        label: "All page types",
        value: ""
    })
    localeFacetOptions.unshift({
        label: "All languages",
        value: ""
    })
    return <div>
        <div className="text-[22px] mb-[40px] will-change-auto">Your search matched { resultCount } pages.</div>
        <div className="flex flex-row gap-4 justify-between mb-[20px]">
            <div className="search-results-list will-change-auto">
                { results?.items?.map(item => {
                    return (
                        <SearchResultItem key={ contentLinkToString(item.id) } item={ item } />
                        
                    )
                }) }
            </div>
            <div className="mb-[40px] flex flex-col gap-2 justify-start">
                {cTypeFacet && (
                    <RadioGroup
                        options={cTypeFacetOptions}
                        label="Type"
                        value={cTypeFacetOptions.find(x => x.value === ctype)}
                        onChange={(selected) => setCType(selected.value)}
                    />
                )}

                {localeFacet && (
                    <RadioGroup
                        options={localeFacetOptions}
                        label="Language"
                        value={localeFacetOptions.find(x => x.value === locale)}
                        onChange={(selected) => setLocale(selected.value)}
                    />
                )}
            </div>
        </div>
    </div>
}

export default Search

'use client'
import { useEffect, useState, type FunctionComponent, type KeyboardEvent } from "react"
import { useUrlState } from "@/lib/use-url-state"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import useLastTerms from "@/lib/use-last-terms"

export type SearchBoxProps = {
    initialQuery?: string | null
}

export const SearchBox: FunctionComponent<SearchBoxProps> = ({
    initialQuery
}) => {
    const [ query, setQuery ] = useUrlState<string>('query', initialQuery ?? '', undefined, x=>x, x=>x)
    const [ term, setTerm ] = useState<string>(query)
    const { data: lastTerms } = useLastTerms()

    function onKeyUp(event: KeyboardEvent) {
        if (event.key == "Enter")
            setQuery(term)
    }

    useEffect(() => {
        if (query && query != '')
            setTerm(query)
    }, [ query ])

    return <div className="search-box-container py-[40px]">
        <div className="search-box pos-rel h-[55px] w-full rounded-[5px] border border-black bg-ghost-white dark:bg-vulcan z-[999] flex flex-row justify-stretch content-stretch outline-none focus-within:outline focus-within:outline-offset-2 focus-within:outline-2 focus-within:outline-black focus-within:dark:outline-black
        ">
            <input type="text" className="w-full border-0 pl-[10px] rounded-[5px] focus:outline-none active:outline-none bg-ghost-white dark:bg-vulcan dark:text-ghost-white" placeholder="Search this website" value={ term } onChange={ e => setTerm(e.target.value) } onKeyUp={ e => onKeyUp(e)} />
            <button className="pos-abs right-0 bg-gray-100 rounded-r-[5px] border-l border-l-black border-t-0 border-r-0 border-b-0" onClick={() => setQuery(term) }>
                <MagnifyingGlassIcon className="w-[52px] h-[52px] p-[9px] cursor-pointer" title={`Start search for ${ term }`} />
            </button>
        </div>
    </div>
}

export default SearchBox

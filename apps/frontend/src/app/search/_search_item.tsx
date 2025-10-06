'use client'
import { type FunctionComponent } from "react"
import { type ContentSearchResultItem } from "@/lib/api/search"
import { linkDataToHref } from "@remkoj/optimizely-cms-nextjs/components"
import Link from 'next/link'
import dynamic from "next/dynamic"

//Components only used within the result item
const LocalTime = dynamic(() => import('@/components/shared/local-time'), { ssr: false })
const ItemText = dynamic(() => import('@/components/shared/text'), { ssr: false })

export type SearchResultItemProps = {
    item: ContentSearchResultItem
}

export const SearchResultItem : FunctionComponent<SearchResultItemProps> = ({ item }) => {
    return <div className="py-[1rem]">
        <Link href={ item.url ? linkDataToHref(item.url) : '#' } className='outline-none focus:outline-dashed focus:outline-offset-4 focus:outline-2 focus:outline-azure focus:rounded-xl focus:dark:outline-verdansk'>
            <div>{ item.title }</div>
            { item.author && <div className="flex flex-row justify-between">
                <div className="italic">Author: { item.author }</div>
                <div>Published: <LocalTime date={ item.published } mode="Date" /></div>
            </div>} 
            { item.abstract && <ItemText text={ item.abstract } /> }
        </Link>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus voluptas, iste magnam vel enim dolorem ab repellat sed voluptatum! Corrupti id saepe, tenetur expedita vel dolore? Sint, eligendi necessitatibus?</span>
    </div>
}

export default SearchResultItem

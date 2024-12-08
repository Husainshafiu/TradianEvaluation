"use client";

import {Input} from "@/components/ui/input";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";
import {useDebouncedCallback} from 'use-debounce';

export default function SearchInput() {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const search = searchParams.get('search') ?? ''

    const [searchValue, setSearchValue] = useState(search)

    const debouncedSearch = useDebouncedCallback(
        (value) => {
            const newSearchParams = new URLSearchParams(searchParams);
            const valueExist = newSearchParams.get('search')
            if (valueExist) {
                newSearchParams.delete('search')
            }
            newSearchParams.set('search', value);
            router.push(`${pathname}?${newSearchParams.toString()}`)
        },
        250
    );

    return (
        <div className={'flex flex-col items-center gap-4'}>
            <Input
                className={' w-[50rem] rounded-full p-8 focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus-visible:border-none text-lg'}
                value={searchValue} onChange={(event) => {
                setSearchValue(event.target.value)
                debouncedSearch(event.target.value)
            }} placeholder={'Search'}/>
            <p className={'font-bold opacity-55'}>{search.length > 0 ? 'Showing results for "' + search + '"' : ''}</p>
        </div>
    )
}
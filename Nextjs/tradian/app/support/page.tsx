import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import TopicItem from "@/app/support/components/topic-item";
import FAQ from "@/app/components/faq";
import {db} from "@/lib/db";
import {support} from "@/lib/db/schema";
import {Input} from "@/components/ui/input";
import SearchInput from "@/app/support/components/search-input";
import {ilike} from "drizzle-orm";
import {X} from "lucide-react";

async function getData({search}: { search?: string | undefined } = {}) {
    const data = await db
        .select()
        .from(support)
        .where(ilike(support.title, search ? `%${search}%` : '%'))
        .limit(3)
    return data
}

export default async function Support({
                                          searchParams,
                                      }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

    const search = (await searchParams).search as string | undefined
    const items = await getData({search})

    return (
        <>
            <div className={'flex flex-col gap-16 items-center bg-gray-200 px-[25rem] py-32'}>
                <h1 className={'text-6xl text-center leading-[5rem]'}>Welcome to Tradian Support <br/>Center</h1>
                <SearchInput/>
            </div>
            <div className={'container px-[6rem] mt-16 flex flex-col gap-3 items-start'}>
                <p className={'font-semibold'}>filters</p>
                <ToggleGroup type="single" className={'flex gap-2'}>
                    <ToggleGroupItem className={'bg-[#573550] rounded-full text-white px-6'} value="a">
                        Business
                        <X size={32} />
                    </ToggleGroupItem >
                    <ToggleGroupItem className={'bg-[#573550] rounded-full text-white px-6'} value="b">
                        Import
                        <X size={32} />
                    </ToggleGroupItem>
                    <ToggleGroupItem className={'bg-[#573550] rounded-full text-white px-6'} value="c">
                        Export
                        <X size={32} />
                    </ToggleGroupItem>
                    <ToggleGroupItem className={'bg-[#573550] rounded-full text-white px-6'} value="c">
                        Individual
                        <X size={32} />
                    </ToggleGroupItem>
                    <ToggleGroupItem className={'bg-[#573550] rounded-full text-white px-6'} value="c">
                        Transit
                        <X size={32} />
                    </ToggleGroupItem>
                    <ToggleGroupItem className={'bg-[#573550] rounded-full text-white px-6'} value="c">
                        Vessels
                        <X size={32} />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            <div className={'container px-[6rem] w-full flex flex-col gap-1 mt-6'}>
                <div className={'flex flex-col gap-6'}>
                    <h2 className={'text-4xl font-medium mb-3'}>Popular Topics</h2>
                    <div className={'grid grid-cols-4 gap-6'}>
                        {items.length > 0 ? items.map((item, index) => {
                            return <TopicItem {...item} key={`topic${index}`}/>
                        }) : <p>No data found</p>}
                    </div>
                </div>

            </div>
            <div className={'my-24'}>
                <FAQ/>
            </div>

        </>
    )
}
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import TopicItem from "@/app/support/components/topic-item";
import FAQ from "@/app/components/faq";

export default function Support() {
    return (
        <>
            <div className={'flex flex-col gap-3 items-center bg-gray-200 px-[15rem] py-16'}>
                <h1 className={'text-6xl'}>Welcome to Tradian Support Center</h1>
            </div>
            <div className={'container px-[6rem] mt-16 flex flex-col gap-1 items-start'}>
                <p className={'border'}>filters</p>
                <ToggleGroup type="single" className={'border'}>
                    <ToggleGroupItem value="a">
                        Filter A
                    </ToggleGroupItem>
                    <ToggleGroupItem value="b">
                        Filter B
                    </ToggleGroupItem>
                    <ToggleGroupItem value="c">
                        Filter C
                    </ToggleGroupItem>
                </ToggleGroup>

            </div>

            <div className={'container px-[6rem] w-full flex flex-col gap-1 '}>
                <div className={'flex flex-col'}>
                    <h2>Popular Topics</h2>
                    <div className={'grid grid-cols-3 gap-6'}>
                        <TopicItem/>
                        <TopicItem/>
                        <TopicItem/>
                        <TopicItem/>
                    </div>
                </div>

            </div>
            <div className={'my-24'}>
                <FAQ/>
            </div>

        </>
    )
}
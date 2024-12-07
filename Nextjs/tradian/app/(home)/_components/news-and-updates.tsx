import NewsItem from "@/components/ui/cards/news-item";

export default function NewsAndUpdates() {
    return (
        <div className={'container px-[6rem] mt-16 flex flex-col gap-12 '}>
            <h3 className="text-2xl font-bold">News & Updates</h3>
            <div className={'grid grid-cols-3 gap-6'}>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        </div>
    )
}
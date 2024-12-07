export default function NewsItem() {
    return (
        <div className={'bg-white p-4 rounded-[1.5rem] border border-gray-200'}>
            <div className={'h-[12rem] w-full rounded-2xl bg-gray-200'}></div>
            <div className={'flex flex-col gap-2 py-6'}>
                <p className={'text-gray-400 text-xs font-medium'}>Dec 07,2024</p>
                <p className={'font-medium leading-6 text-lg'}>User Acceptance Testing for MNSW begins</p>
            </div>
        </div>
    )
}
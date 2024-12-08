import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

export default function TopicItem({id, title, description, thumbnailUrl}: {
    id: number,
    title: string,
    description: string | null,
    thumbnailUrl: string
}) {
    return (
        <>
            <Link className={'  '} href={`/support/${id}`}>
                <div className={''}>
                    <Image src={'https://picsum.photos/200/300'} alt={''} width={10} height={10}
                           className={'w-full h-[10rem] object-cover rounded-tl-[1rem] rounded-tr-[1rem]'}/>
                    <div className={'flex flex-col gap-4'}>
                        <h4 className={'font-bold mt-3'}>{title}</h4>
                        <p className={'text-md opacity-40 font-normal line-clamp-2'}>{description}</p>
                        <p className={'underline text-sm flex gap-1'}>
                            Read the guide
                            <ArrowUpRight size={24}/>
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}
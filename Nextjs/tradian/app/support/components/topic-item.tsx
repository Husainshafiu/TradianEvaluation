import Image from "next/image";

export  default function TopicItem({title, description, thumbnailUrl}: {title: string, description: string | null, thumbnailUrl: string}) {
    return (
        <>
            <div className={'border'}>
                <Image src={thumbnailUrl} alt={''} width={50} height={50}/>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </>
    )
}
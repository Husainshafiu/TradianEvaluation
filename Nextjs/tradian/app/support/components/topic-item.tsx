import Image from "next/image";

export  default function TopicItem() {
    return (
        <>
            <div className={'border'}>
                <Image src={'/logo.png'} alt={''} width={50} height={50}/>
                <p>Tradian</p>
            </div>
        </>
    )
}
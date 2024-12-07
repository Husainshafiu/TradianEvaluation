import Image from "next/image";

export type PopularItemProps = {
    title: string;
    description: string;
    image: string;
}

export default function PopularItem({title, description, image}: PopularItemProps) {
    return (
        <div className="flex flex-col gap-6 border border-gray-200 rounded-3xl p-8 bg-white">
            <div className="h-[3.5rem] w-[3.5rem] flex items-center justify-center border bg-gray-200 -mt-[3rem] rounded-full">
                <Image height={30} width={30} src={image} alt={''}/>
            </div>
            <h4 className=" font-bold">{title}</h4>
            <p>
                {description}
            </p>
        </div>
    )
}
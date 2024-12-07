import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center">
            <Image width={50} height={50} src={'/logo.png'} alt={''}/>
            <p>Tradian</p>
        </div>
    )
}
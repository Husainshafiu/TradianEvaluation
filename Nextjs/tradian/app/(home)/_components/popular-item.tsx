import Image from "next/image";

export default function PopularItem() {
    return (
        <div className="flex flex-col gap-6 border border-gray-200 rounded-3xl p-8 bg-white">
            <div className="h-[3.5rem] w-[3.5rem] flex items-center justify-center border bg-gray-200 -mt-[3rem] rounded-full">
                <Image height={30} width={30} src={'/home/plane.svg'} alt={''}/>
            </div>
            <h4 className=" font-bold">Duty Exemption & Allowances</h4>
            <p>
                Duty Exemptions & Allowances for businesses wishing to export goods from maldives
            </p>
        </div>
    )
}
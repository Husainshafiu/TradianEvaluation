import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function NeedAssistance() {
    return (
        <div className="flex container px-[6rem] w-full rounded-[6rem]  mt-24 ">
            <div className="flex w-full rounded-[2rem] border border-gray-200 overflow-clip">
                <div className="w-1/2  px-24 py-12  flex flex-col items-center justify-center bg-[#3c162e]">
                    <div className="flex flex-col gap-6 items-start">
                        <div className="h-[3rem] w-[3rem] bg-white"></div>
                        <div className="flex flex-col items-start gap-1">
                            <h3 className="text-3xl text-white">Need Assistance ?</h3>
                            <p className={'text-white text-sm font-light'}>
                                If you have a problem and require assistance, get in touch with our support team.
                            </p>
                        </div>
                        <Button>
                            Find Help
                        </Button>
                    </div>
                </div>
                <div className="relative w-1/2 h-64 sm:h-80 md:h-96">
                    <Image
                        src="/home/assistance.jpeg"
                        alt="Descriptive Alt Text"
                        layout="fill"
                        objectFit="cover"
                        quality={75}/>
                </div>
            </div>
        </div>
    )
}
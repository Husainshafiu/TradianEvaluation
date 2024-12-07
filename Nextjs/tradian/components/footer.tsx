export default function Footer() {
    return (
        <>
            <footer className="bg-white">
                <div className="container px-[6rem] py-16 flex flex-col items-center">
                    <div className="flex flex-col gap-6 items-center">
                        <h3 className="text-3xl font-bold">Get in touch</h3>
                        <p className="text-gray-400 text-sm">
                            If you have any questions or need assistance, please contact our support team.
                        </p>
                    </div>
                    <div className="flex gap-6 items-center">
                        <div className="h-[3rem] w-[3rem] bg-gray-200 rounded-full"></div>
                        <div className="flex flex-col items-start gap-1">
                            <h3 className="text-3xl font-bold">Contact Us</h3>
                            <p className="text-gray-400 text-sm">
                                If you have any questions or need assistance, please contact our support team.
                            </p>
                        </div>
                        <div className="h-[3rem] w-[3rem] bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </footer>
        </>
    )
}
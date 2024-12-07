"use client"

import {Button} from "@/components/ui/button";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import Logo from "@/components/ui/logo";

const formSchema = z.object({
    email: z.string().min(2, {
        message: "needs to be a valid email address",
    }).email("required"),
})


export default function Footer() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        toast(
            <div>
                <h3>Searching for</h3>
                <pre>
                    {
                        JSON.stringify(values, null, 2)
                    }
                </pre>
            </div>
        )
    }

    return (
        <footer className="bg-[#3c162e] w-screen min-h-10 px-[6rem] py-12">
            <div className={'container w-full px-[6rem]'}>
                <div className={'flex p-6 bg-white bg-opacity-5 justify-between rounded-[1rem]'}>
                    <div className={'text-white'}>
                        <h3 className={'text-lg font-bold'}>Subscribe to our newsletter</h3>
                        <p className={'text-sm'}>
                            Receive the Latest Updates, News, and Insights from Tradian
                        </p>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="">
                            <div className="flex flex-row">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="email" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
                            </div>
                        </form>
                    </Form>
                </div>

                <div className={'flex py-12 justify-between'}>
                    <div className={'flex gap-6 text-white'}>
                        <ul>
                            <li>Quick links</li>
                            <li>oneGov</li>
                            <li>Tradenet</li>
                        </ul>
                        <ul>
                            <li>Logistic</li>
                            <li>Vessels</li>
                            <li>Shipping Agents</li>
                            <li>Freight Forwarders</li>
                            <li>Courier Agents</li>
                            <li>Brokers</li>
                        </ul>
                        <ul>
                            <li>Terms and Policies</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div className={'h-16 w-[15rem] border'}></div>
                </div>

                <div className={'flex justify-between'}>
                    <Logo />
                    <div className={'flex'}>

                    </div>
                </div>
                <hr className={'border-white opacity-10 my-3'}/>
                <div className={'flex justify-between'}>
                    <p className={'text-sm text-white'}>Operated by <a className={'underline'} target={'_blank'} href={'https://www.tradenet.com.mv/'}>Tradenet</a></p>
                    <p className={'text-sm text-white'}>© 2024, Government of Maldives. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
"use client"

import {Button} from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import {Box, Download} from "lucide-react";

const formSchema = z.object({
    cNumber: z.string().min(2, {
        message: "c Number needs to be at least 2 characters.",
    }),
    rNumber: z.string().min(2, {
        message: "R number needs to be at least 2 characters.",
    }),
})


export default function Hero() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cNumber: "",
            rNumber: "",
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
        <>
            <div style={{
                background: 'linear-gradient(207deg, rgba(249,219,218,1) 0%, rgba(232,234,243,1) 100%)',
            }} className="container mx-auto w-full rounded-[2rem] flex items-center flex-col p-16 mt-6 ">
                <div className={'flex gap-6 flex-col items-center px-[15rem] '}>
                    <h1 className="text-6xl items-center">Get Ready for Tradian</h1>
                    <p className={'text-md text-center'}>
                        Phase 1 of Tradian is coming in November. Join our training sessions to master the platform and
                        seamlessly
                        transition your import and export operations to Tradian.
                    </p>
                    <Button>
                        Register for training
                    </Button>
                </div>

                <div className={'flex flex-col gap-3 mt-32 items-center'}>
                    <h3 className={'text-2xl font-bold'}>Quick Lookup</h3>
                    <p className={'text-center'}>
                        instantly find declaration status, tarrif details and vessel/container tracking
                    </p>
                </div>
                <Tabs defaultValue="declaration"
                      className="w-[800px] shadow-2xl  mt-20 bg-[#3c162e] flex flex-col items-center rounded-[2rem] -mb-[12rem]">
                    <TabsList className={'flex w-max p-8 px-4 rounded-full -mt-10 bg-[#fff1f1]'}>
                        <TabsTrigger
                            className={'rounded-full  data-[state=active]:bg-[#3c162e] data-[state=active]:text-white flex gap-2'}
                            value="declaration">
                            <Download size={20} className={''}/>
                            Check Declaration
                        </TabsTrigger>
                        <TabsTrigger
                            className={'rounded-full data-[state=active]:bg-[#3c162e] data-[state=active]:text-white'}
                            value="container">
                            <Box size={20} className={''}/>
                            Container Tracking
                        </TabsTrigger>
                    </TabsList>
                    <div className={'flex w-full'}>
                        <TabsContent className={'flex p-12 w-full'} value="declaration">
                            <div className={'w-full flex flex-col gap-6'}>
                                <div className={'flex flex-col '}>
                                    <h3 className={'font-semibold text-xl text-white'}>Declaration Status</h3>
                                    <p className={'text-white text-sm font-normal opacity-70'}>Check import and export
                                        declaration status</p>
                                </div>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)}>
                                        <div className="flex w-full gap-4 items-end">
                                            <FormField
                                                control={form.control}
                                                name="cNumber"
                                                render={({field}) => (
                                                    <FormItem className={'w-full'}>
                                                        <FormLabel>C Number</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="C1234" {...field} />
                                                        </FormControl>
                                                        <FormMessage/>
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="rNumber"
                                                render={({field}) => (
                                                    <FormItem className={'w-full'}>
                                                        <FormLabel>R Number</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="R/1234/00MP" {...field} />
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
                        </TabsContent>
                        <TabsContent className={'flex p-12 w-full'}  value="container">
                            <div className={'w-full flex flex-col gap-6'}>
                                <div className={'flex flex-col '}>
                                    <h3 className={'font-semibold text-xl text-white'}>Container Tracking</h3>
                                    <p className={'text-white text-sm font-normal opacity-70'}>
                                        retrieve container tracking details

                                    </p>
                                </div>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)}>
                                        <div className="flex w-full gap-4 items-end">
                                            <FormField
                                                control={form.control}
                                                name="cNumber"
                                                render={({field}) => (
                                                    <FormItem className={'w-full'}>
                                                        <FormLabel>Container Id</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="C1234" {...field} />
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
                        </TabsContent>
                    </div>
                </Tabs>

            </div>
            <div className={'mb-[15rem]'}></div>
        </>
    )
}
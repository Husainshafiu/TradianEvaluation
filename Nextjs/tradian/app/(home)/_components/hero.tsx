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
        <div style={{
            background: 'linear-gradient(207deg, rgba(249,219,218,1) 0%, rgba(232,234,243,1) 100%)',
        }} className="container mx-auto w-full rounded-[2rem] flex items-center flex-col p-16">
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
            <Tabs defaultValue="declaration" className="w-[400px] mt-8">
                <TabsList>
                    <TabsTrigger value="declaration">Check Declaration</TabsTrigger>
                    <TabsTrigger value="container">Container Tracking</TabsTrigger>
                </TabsList>
                <TabsContent value="declaration">
                    <div>
                        <h3>Declaration Status</h3>
                        <p>Check import and export declaration status</p>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="">
                                <div className="flex">
                                    <FormField
                                        control={form.control}
                                        name="cNumber"
                                        render={({field}) => (
                                            <FormItem>
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
                                            <FormItem>
                                                <FormLabel>R Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="R/1234/00MP" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>
                </TabsContent>
                <TabsContent value="container">Change your password here.</TabsContent>
            </Tabs>

        </div>
    )
}
"use client"

import {Button} from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
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
        <div className="container mx-auto w-full rounded-[4rem] border border-red-700 flex items-center flex-col p-16">
            <h1 className="text-xl items-center">Get Ready for Tradian</h1>
            <p>
                Phase 1 of Tradian is coming in November. Join our training sessions to master the platform and
                seamlessly
                transition your import and export operations to Tradian.
            </p>
            <Button>
                Register for training
            </Button>

            <div>
                <h3>Quick Lookup</h3>
                <p>
                    instantly find declaration status, tarrif details and vessel/container tracking
                </p>
            </div>
            <Tabs defaultValue="declaration" className="w-[400px]">
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
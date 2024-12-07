import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import PopularItem from "@/app/(home)/_components/popular-item";

export default function PopularProcedures() {
    return (
        <div className="container px-[6rem] mt-16">
            <div className="">
                <Tabs defaultValue="account" className=" flex flex-col justify-between">
                    <div className="flex justify-between">
                        <h3 className="text-2xl font-bold">Popular <br/> Procedures</h3>
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="account" className="pt-12">
                        <div className="grid grid-cols-3 gap-6">
                            <PopularItem/>
                            <PopularItem/>
                            <PopularItem/>
                        </div>
                    </TabsContent>
                    <TabsContent className="grid grid-cols-3 gap-6 pt-12" value="password">
                        <PopularItem/>
                        <PopularItem/>
                        <PopularItem/>
                    </TabsContent>
                </Tabs>
            </div>

        </div>
    )
}
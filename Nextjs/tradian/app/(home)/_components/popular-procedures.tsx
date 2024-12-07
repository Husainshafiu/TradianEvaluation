import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import PopularItem, {PopularItemProps} from "@/app/(home)/_components/popular-item";

const popularItems: PopularItemProps[] = [
    {
        title: 'Import',
        description: 'Import goods from foreign countries to Maldives',
        image: '/home/plane.svg',
    },
    {
        title: 'Export',
        description: 'Export goods from Maldives to foreign countries',
        image: '/home/plane.svg',
    },
    {
        title: 'Transit',
        description: 'Transit goods from Maldives to foreign countries',
        image: '/home/plane.svg',
    }
]

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
                            {popularItems.map((item, index) => {
                                return <PopularItem {...item} key={`popcard${index}`}/>
                            })}
                        </div>
                    </TabsContent>
                    <TabsContent className="pt-12" value="password">
                        <div className="grid grid-cols-3 gap-6">
                            {popularItems.map((item, index) => {
                                return <PopularItem {...item} key={`apopcard${index}`}/>
                            })}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

        </div>
    )
}
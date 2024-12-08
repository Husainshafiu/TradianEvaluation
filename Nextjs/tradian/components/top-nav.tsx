"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuContent
} from "@/components/ui/navigation-menu";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import Link from "next/link";
import {SignIn} from "@/components/auth/signin-button";
import {SignOut} from "@/components/auth/signout-button";
import {useSession} from "next-auth/react";
import {ArrowUpRight, Contact, Download, Ship} from "lucide-react";


export default function TopNav() {

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const {data: session} = useSession()

    return (
        <nav className={`fixed top-0 z-10 left-0 w-screen  bg-white ${isScrolled ? "shadow-md" : ""}`}>
            <div className="container  mx-auto flex justify-between items-center lg:px-20">
                <Link href={'/'}>
                    <div className="flex items-center">
                        <Image width={50} height={50} src={'/logo.png'} alt={''}/>
                        <p className={'font-bold text-2xl'}>Tradian</p>
                    </div>
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={'text-lg h-full p-6 rounded-none'}>Business</NavigationMenuTrigger>
                            <NavigationMenuContent className={'bg-[#fff1f1] rounded-[2rem] border border-[#ffc7c7]'}>
                                <Tabs defaultValue="Import" className="w-[600px] h-full flex items-start  ">
                                    <TabsList className="h-[20rem]  p-6 justify-start flex flex-col items-start align-top ">
                                        <TabsTrigger value="Import">
                                            <Download size={20} className={'text-[#c21313] opacity-75'}/>
                                            Import
                                        </TabsTrigger>
                                        <TabsTrigger value="Export">
                                            <ArrowUpRight size={20} className={'text-[#c21313] opacity-75'}/>
                                            Export
                                        </TabsTrigger>
                                        <TabsTrigger value="Transit">
                                            <Ship size={20} className={'text-[#c21313] opacity-75'}/>
                                            Transit & Transhipment
                                        </TabsTrigger>
                                        <TabsTrigger value="Registration">
                                            <Contact size={20} className={'text-[#c21313] opacity-75'}/>
                                            Business Registration
                                        </TabsTrigger>
                                        <TabsTrigger value="Vessels">
                                            <Ship size={20} className={'text-[#c21313] opacity-75'}/>
                                            Vessels
                                        </TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="Import" className="flex flex-col p-4 ">
                                        <div className={'flex flex-col gap-6 p-6 bg-white rounded-[1rem]'}>
                                            <NavigationMenuLink>Registration</NavigationMenuLink>
                                            <NavigationMenuLink>Prohibited and Restricted Items</NavigationMenuLink>
                                            <NavigationMenuLink>Goods Import to Maldives</NavigationMenuLink>
                                            <NavigationMenuLink>Duty Exemptions & Allowances</NavigationMenuLink>
                                            <NavigationMenuLink>Bond</NavigationMenuLink>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="Export" className="flex flex-col gap-6 p-6">
                                        <div className={'flex flex-col gap-6 p-6 bg-white rounded-[1rem]'}>
                                            <NavigationMenuLink>Registration</NavigationMenuLink>
                                            <NavigationMenuLink>Prohibited and Restricted Items</NavigationMenuLink>
                                            <NavigationMenuLink>Cargo Export Procedure</NavigationMenuLink>
                                            <NavigationMenuLink>Duty Exemption</NavigationMenuLink>
                                            <NavigationMenuLink>Re-Export Procedure</NavigationMenuLink>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="Transit" className="flex flex-col gap-6 p-6">
                                        <div className={'flex flex-col gap-6 p-6 bg-white rounded-[1rem]'}>
                                            <NavigationMenuLink>To be added</NavigationMenuLink>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="Registration" className="flex flex-col gap-6 p-6">
                                        <div className={'flex flex-col gap-6 p-6 bg-white rounded-[1rem]'}>
                                            <NavigationMenuLink>To be added</NavigationMenuLink>

                                        </div>
                                    </TabsContent>
                                    <TabsContent value="Vessels" className="flex flex-col gap-6 p-6">
                                        <div className={'flex flex-col gap-6 p-6 bg-white rounded-[1rem]'}>
                                            <NavigationMenuLink>To be added</NavigationMenuLink>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={'text-lg h-full p-6 rounded-none'}>Individual</NavigationMenuTrigger>
                            <NavigationMenuContent className={'bg-[#fff1f1] rounded-[2rem] border border-[#ffc7c7] p-6'}>
                                <NavigationMenuLink>to be implemented</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <div className={'flex gap-4'}>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={'text-lg h-full p-6 rounded-none'} href={'/support'}>
                                    support
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                        </div>

                    </NavigationMenuList>
                </NavigationMenu>
                {
                    session ? <SignOut/> : <SignIn/>
                }
            </div>
        </nav>
    );
}
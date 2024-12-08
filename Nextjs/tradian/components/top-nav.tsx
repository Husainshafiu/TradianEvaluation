"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuContent} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import {SignIn} from "@/components/auth/signin-button";
import {SignOut} from "@/components/auth/signout-button";
import {useSession} from "next-auth/react";


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

    const { data: session } = useSession()

  return (
    <nav className={`fixed top-0 z-10 left-0 w-screen py-4 bg-white ${isScrolled ? "shadow-md" : "" }`} >
      <div className="container  mx-auto flex justify-between items-center lg:px-20">
          <Link href={'/'}>
              <div className="flex items-center">
                  <Image width={50} height={50} src={'/logo.png'} alt={''}/>
                  <p>Tradian</p>
              </div>
          </Link>
          <NavigationMenu>
              <NavigationMenuList>
                  <NavigationMenuItem>
                      <NavigationMenuTrigger>Business</NavigationMenuTrigger>
                      <NavigationMenuContent className="">
                          <Tabs defaultValue="Import" className="w-[600px] h-full flex items-start">
                              <TabsList className="h-[20rem]  p-6 justify-start flex flex-col items-start align-top ">
                                  <TabsTrigger value="Import">
                                      Import
                                  </TabsTrigger>
                                  <TabsTrigger value="Export">Export</TabsTrigger>
                                  {/*<TabsTrigger value="Transit">Transit & Transhipment</TabsTrigger>*/}
                                  {/*<TabsTrigger value="Registration">Business Registration</TabsTrigger>*/}
                                  {/*<TabsTrigger value="Vessels">Vessels</TabsTrigger>*/}
                              </TabsList>
                              <TabsContent value="Import" className="flex flex-col gap-6 p-6">
                                  <NavigationMenuLink>Registration</NavigationMenuLink>
                                  <NavigationMenuLink>Prohibited and Restricted Items</NavigationMenuLink>
                                  <NavigationMenuLink>Goods Import to Maldives</NavigationMenuLink>
                                  <NavigationMenuLink>Duty Exemptions & Allowances</NavigationMenuLink>
                                  <NavigationMenuLink>Bond</NavigationMenuLink>
                              </TabsContent>
                              <TabsContent value="Export" className="flex flex-col gap-6 p-6">
                                  <NavigationMenuLink>Registration</NavigationMenuLink>
                                  <NavigationMenuLink>Prohibited and Restricted Items</NavigationMenuLink>
                                  <NavigationMenuLink>Cargo Export Procedure</NavigationMenuLink>
                                  <NavigationMenuLink>Duty Exemption</NavigationMenuLink>
                                  <NavigationMenuLink>Re-Export Procedure</NavigationMenuLink>
                              </TabsContent>
                              <TabsContent value="Transit">Change your password here.</TabsContent>
                              <TabsContent value="Registration">Change your password here.</TabsContent>
                              <TabsContent value="Vessels">Change your password here.</TabsContent>
                          </Tabs>
                      </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                      <NavigationMenuTrigger>Individual</NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                      <NavigationMenuLink href={'/support'}>
                          support
                      </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                      <NavigationMenuLink href={'/business/export/export-registration'}>
                          Business
                      </NavigationMenuLink>
                  </NavigationMenuItem>

              </NavigationMenuList>
          </NavigationMenu>
          {
              session ? <SignOut/> : <SignIn/>
          }
      </div>
    </nav>
  );
}
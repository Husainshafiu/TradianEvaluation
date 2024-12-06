import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuContent} from "@/components/ui/navigation-menu";
import {Button} from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function TopNav() {
  return (
    <nav className="fixed top-0 left-0 w-screen py-4 bg-red-50 ">
      <div className="container border border-gray-200 mx-auto flex justify-between items-center lg:px-20">
          <div className="flex items-center">
              <Image width={50} height={50} src={'/logo.png'} alt={''}/>
              <p>Tradian</p>
          </div>

          <NavigationMenu>
              <NavigationMenuList>
                  <NavigationMenuItem>
                      <NavigationMenuTrigger>Business</NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <Tabs defaultValue="account" className="w-[400px] flex">
                              <TabsList className="flex items-start h-auto flex-col ">
                                  <TabsTrigger value="Import">Import</TabsTrigger>
                                  <TabsTrigger value="Export">Export</TabsTrigger>
                                  <TabsTrigger value="Transit">Transit & Transhipment</TabsTrigger>
                                  <TabsTrigger value="Registration">Business Registration</TabsTrigger>
                                  <TabsTrigger value="Vessels">Vessels</TabsTrigger>
                              </TabsList>
                              <TabsContent value="Import">Make changes to your account here.</TabsContent>
                              <TabsContent value="Export">Change your password here.</TabsContent>
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
                      <NavigationMenuLink>
                          Individual
                      </NavigationMenuLink>
                  </NavigationMenuItem>

              </NavigationMenuList>
          </NavigationMenu>
          <Button>
              Login
          </Button>
      </div>
    </nav>
  );
}
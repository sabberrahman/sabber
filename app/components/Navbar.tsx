"use client"
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem,  NavigationMenuLink,  NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import logo from "../../public/other/saobbir-rahoman-28-06-2024.png"

export const navigationItems=[
    {
        name:"Home",
        href:"/"
    }, {
        name:"Guestbook",
        href:"/guestbook"
    }, {
        name:"Projects",
        href:"/projects"
    },
    {
        name:"About",
        href:"/aboutdev"
    },
];

export default function Navbar(){
    const pathName=usePathname()
    return (
        <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
            <div className="col-span-6 flex md:col-span-3">
                <Link href='/'>
                <Image src={logo} alt="sabberLogo" className="hover:bg-blue-200 rounded-2xl " width={400}/>
                </Link>
            </div>

            <div className="hidden sm:flex justify-center items-center col-span-6">
             <NavigationMenu>
                <NavigationMenuList>
                    {navigationItems.map((item,index)=>(
                        <NavigationMenuItem key={index}>
                            <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink
                            active={pathName === item.href}
                            className={navigationMenuTriggerStyle()}
                            >
                                {item.name}
                            </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
             </NavigationMenu>
            </div>

            <div className="flex items-center justify-end md:col-span-3 col-span-6 ">
                <Button className="hidden sm:flex " asChild><a href="mailto:sabberrahman.contact@gmail.com">Contact Me</a></Button>
                <div className="sm:hidden">
                    <MobileMenu/>

                </div>
            </div>


        </nav>
    )
}
//<h1 className="text-2xl md:text-3xl font-semibold ">Sabber <span className="text-blue-500 ">Rahman</span></h1>
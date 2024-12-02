"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
// import {} from '@material-ui/core'
import { useState } from "react"
import { usePathname } from 'next/navigation'

export default function Header() {

    const pathname = usePathname()
    const [test, isTest] = useState<boolean>(true);
    console.log(pathname);

    return(
        <NavigationMenu className="w-full max-w-[1900px] py-8 px-[50px] mx-auto flex justify-between align-center items-center">
            <NavigationMenuLink className="p-2 rounded-[20px] bg-white">
                Logo
            </NavigationMenuLink>
            <NavigationMenuList className="gap-8">
                    <NavigationMenuLink href="/" className={`py-2 px-4 rounded-[20px] text-muted-foreground font-bold hover:bg-secondary ${pathname === '/' ? "bg-secondary" : "bg-white"}`}>
                        Home
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/two" className={`py-2 px-4 rounded-[20px] text-muted-foreground font-bold hover:bg-secondary ${pathname === '/two' ? "bg-secondary" : "bg-white"}`}>
                        Book Appointment
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/three" className={`py-2 px-4 rounded-[20px] text-muted-foreground font-bold hover:bg-secondary ${pathname === '/three' ? "bg-secondary" : "bg-white"}`}>
                        Services
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/four" className={`py-2 px-4 rounded-[20px] text-muted-foreground font-bold hover:bg-secondary ${pathname === '/four' ? "bg-secondary" : "bg-white"}`}>
                        About
                    </NavigationMenuLink>
            </NavigationMenuList>
            <NavigationMenuLink className="p-2 rounded-[20px] bg-white">
                CTA
            </NavigationMenuLink>
        </NavigationMenu>
    )
}
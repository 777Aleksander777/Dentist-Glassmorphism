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
        <NavigationMenu className="w-full max-w-[1900px] py-8 px-[100px] mx-auto flex justify-between align-center items-center">
            <NavigationMenuLink className="p-2 rounded-[20px] bg-white">
                Logo
            </NavigationMenuLink>
            <NavigationMenuList className="gap-8">
                    <NavigationMenuLink href="/" className={`py-2 px-4 rounded-[20px] text-muted-foreground font-bold hover:bg-secondary ${pathname === '/' ? "bg-secondary" : "bg-white"}`}>
                        Home
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/book-appointment" className={`py-2 px-4 rounded-[20px] text-muted-foreground font-bold hover:bg-secondary ${pathname === '/book-appointment' ? "bg-secondary" : "bg-white"}`}>
                        Book Appointment
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/services" className={`py-2 px-4 rounded-[20px] text-muted-foreground font-bold hover:bg-secondary ${pathname === '/services' ? "bg-secondary" : "bg-white"}`}>
                        Services
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/about" className={`py-2 px-4 rounded-[20px] text-muted-foreground font-bold hover:bg-secondary ${pathname === '/about' ? "bg-secondary" : "bg-white"}`}>
                        About
                    </NavigationMenuLink>
            </NavigationMenuList>
            <NavigationMenuLink className="p-2 rounded-[20px] bg-white">
                CTA
            </NavigationMenuLink>
        </NavigationMenu>
    )
}
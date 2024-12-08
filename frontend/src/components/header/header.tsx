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
import { HeaderProps } from "@/types/header";
import { StrapiImage } from "../utils/strapiImage";

export default function Header({ data }: Readonly<HeaderProps>) {

    const { logo, menu_links, cta } = data;
    console.dir(menu_links, { depth: null })
    const pathname = usePathname()
    const [test, isTest] = useState<boolean>(true);
    console.log(pathname);

    return(
        <NavigationMenu className="w-full max-w-[1900px] py-8 px-[100px] mx-auto flex justify-between align-center items-center">
            <NavigationMenuLink className="p-2 rounded-[20px] bg-white">
                <StrapiImage src={logo.logoImage.url} alt={logo.logoImage.alternativeText} width={50} height={logo.logoImage.height}/>
            </NavigationMenuLink>
            <NavigationMenuList className="gap-8">
                    {menu_links?.map((link) => (
                        <NavigationMenuLink key={link.id} href={link.url} className={`py-2 px-4 rounded-[20px] text-muted-foreground font-bold hover:bg-secondary ${pathname === link.url ? "bg-secondary" : "bg-white"}`}>
                            {link.name}
                        </NavigationMenuLink>
                    ))}
                    {/* <NavigationMenuLink href="/book-appointment" className={`py-2 px-4 rounded-[20px] text-muted-foreground font-bold hover:bg-secondary ${pathname === '/book-appointment' ? "bg-secondary" : "bg-white"}`}>
                        Book Appointment
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/services" className={`py-2 px-4 rounded-[20px] text-muted-foreground font-bold hover:bg-secondary ${pathname === '/services' ? "bg-secondary" : "bg-white"}`}>
                        Services
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/about" className={`py-2 px-4 rounded-[20px] text-muted-foreground font-bold hover:bg-secondary ${pathname === '/about' ? "bg-secondary" : "bg-white"}`}>
                        About
                    </NavigationMenuLink> */}
            </NavigationMenuList>
            <NavigationMenuLink href={cta.url} className="p-2 rounded-[20px] bg-white">
                {cta.name}
            </NavigationMenuLink>
        </NavigationMenu>
    )
}
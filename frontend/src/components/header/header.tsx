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
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import { HeaderProps } from "@/types/header";
import { StrapiImage } from "../utils/strapiImage";
import Image from "next/image";

export default function Header({ data }: Readonly<HeaderProps>) {

    const { logo, menu_links, cta } = data;
    const [isPhone, setIsPhone] = useState<boolean>(window.innerWidth <= 1024);
    // console.dir(menu_links, { depth: null })
    const pathname = usePathname()
    const [test, isTest] = useState<boolean>(true);

    useEffect(() => {
        function isPhone() {
            if(window.innerWidth <= 1024) {
                console.log("This is phone!")
                // setIsPhone(true);
            }
            else {
                console.log("This is not phone!!!!");
            }
        }

        isPhone()
    })
    // console.log(pathname);

    return(
        <NavigationMenu className="relative w-full max-w-[1900px] py-8 px-[100px] mx-auto flex justify-between align-center items-center">
            <NavigationMenuLink className="p-2 rounded-[20px] bg-white">
                <StrapiImage src={logo.logoImage.url} alt={logo.logoImage.alternativeText} width={50} height={logo.logoImage.height}/>
            </NavigationMenuLink>
            {!isPhone && (
            <NavigationMenuList>
                    {menu_links?.map((link) => (
                        <NavigationMenuLink key={link.id} href={link.url} className={`py-2 px-4 rounded-[20px] text-xl font-bold hover:text-secondary ${pathname === link.url ? "text-secondary" : "text-white"}`}>
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
            )}
            {isPhone && (
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <Image src="/menu-outline.svg" alt="menu" width={30} height={30}/>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="left-1/2 flex flex-col gap-8 px-4 py-8">
                            {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
                            {menu_links?.map((link) => (
                                <NavigationMenuLink key={link.id} href={link.url} className={`py-2 px-4 rounded-[20px] text-xl font-bold hover:text-secondary ${pathname === link.url ? "text-secondary" : "text-black"}`}>
                                    {link.name}
                                </NavigationMenuLink>
                            ))}
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            )}
            <NavigationMenuLink href={cta.url} className="p-2 rounded-[20px] bg-white">
                {cta.name}
            </NavigationMenuLink>
        </NavigationMenu>
    )
}
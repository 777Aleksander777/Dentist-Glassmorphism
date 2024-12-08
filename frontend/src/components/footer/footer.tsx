"use client";

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FooterProps } from "@/types/footer";
import { StrapiImage } from "../utils/strapiImage";

export default function Footer({ data }: Readonly<FooterProps>) {

    const { logo, footerLinks, address, workingHours, contact } = data;

    return (
        <footer className="w-full max-w-[1900px] mx-auto mt-[150px] px-[100px]">
            <div className="w-full flex justify-between align-center items-start">
                <div className="max-w[250px] flex flex-col justify-start align-start items-start gap-4">
                    <h4 className="text-primary font-bold text-xl">
                        Address
                    </h4>
                    <p className="text-lg">
                        {address}
                    </p>
                </div>
                <div className="max-w[250px] flex flex-col justify-start align-start items-start gap-4">
                    <h4 className="text-primary font-bold text-xl">
                        Working hours
                    </h4>
                    <p className="text-lg">
                        {workingHours}
                    </p>
                </div>
                <div className="max-w[250px] flex flex-col justify-start align-start items-start gap-4">
                    <h4 className="text-primary font-bold text-xl">
                        Contact
                    </h4>
                    <p className="text-lg">
                        {contact}
                    </p>
                </div>
                <div className="max-w[250px] flex flex-col justify-start align-start items-start gap-4">
                    <h4 className="text-primary font-bold text-xl">
                        Social media
                    </h4>
                    <div className="flex gap-2">

                    </div>
                </div>
            </div>
            <div className="w-full min-h-[500px] flex flex-col justify-between  rounded-[50px] bg-white mt-[100px] mb-[50px] px-24 py-16">
                <div className="w-full flex justify-between">
                    <div>
                        <Button className="rounded-[30px] mb-[50px]">
                            <StrapiImage src={logo.logoImage.url} alt={logo.logoImage.alternativeText} width={50} height={logo.logoImage.height}/>
                        </Button>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input className="h-[50px] w-[300px]" type="email" placeholder="Email" />
                            <Button type="submit" className="rounded-[5px] h-[50px]">Subscribe</Button>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col px-8">
                        <h4 className="text-lg font-bold text-primary">
                            Pages
                        </h4>
                        <div className="flex flex-col gap-2">
                            {footerLinks?.map((link) => (
                                <Link key={link.id} href={link.url}>{link.name}</Link>
                            ))}
                            {/* <Link href={"/"}>Make an apppontment</Link>
                            <Link href={"/"}>Contact</Link>
                            <Link href={"/"}>About</Link> */}
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <Separator className="bg-black my-8 h-[1px]"/>
                    <div className="w-full flex justify-between">
                        <div className="flex gap-4">
                            <Link href={"/"}>
                                Privacy Policy
                            </Link>
                            <Link href={"/"}>
                                Terms of srvice
                            </Link>
                        </div>
                        <div>
                            Designed by Web Desing Agency!
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
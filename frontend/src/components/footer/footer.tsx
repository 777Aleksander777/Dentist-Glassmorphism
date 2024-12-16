"use client";

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FooterProps } from "@/types/footer";
import { StrapiImage } from "../utils/strapiImage";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Footer({ data }: Readonly<FooterProps>) {

    const { logo, footerLinks, address, workingHours, contact } = data;

    return (
        <footer className="w-full mt-[150px]">
            <div className="w-full flex flex-col md:flex-row md:justify-evenly justify-center align-center md:items-start items:center md:gap-0 gap-8">
                <div className="max-w[250px] flex flex-col md:justify-start justify-center md:align-start align-center md:items-start items-center gap-4">
                    <h4 className="text-primary font-bold text-xl">
                        Address
                    </h4>
                        <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {address}
                        </ReactMarkdown>
                    <p className="text-lg">
                        {/* {address} */}
                    </p>
                </div>
                <div className="max-w[250px] flex flex-col md:justify-start justify-center md:align-start align-center md:items-start items-center gap-4">
                    <h4 className="text-primary font-bold text-xl">
                        Working hours
                    </h4>
                        <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {workingHours}
                        </ReactMarkdown>
                    <p className="text-lg">
                        {/* {workingHours} */}
                    </p>
                </div>
                <div className="max-w[250px] flex flex-col md:justify-start justify-center md:align-start align-center md:items-start items-center gap-4">
                    <h4 className="text-primary font-bold text-xl">
                        Contact
                    </h4>
                        <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {contact}
                        </ReactMarkdown>
                    <p className="text-lg">
                        {/* {contact} */}
                    </p>
                </div>
                <div className="max-w[250px] flex flex-col md:justify-start justify-center md:align-start align-center md:items-start items-center gap-4">
                    <h4 className="text-primary font-bold text-xl">
                        Social media
                    </h4>
                    <div className="flex gap-2">

                    </div>
                </div>
            </div>
            <div className="w-full min-h-[500px] flex flex-col justify-between  bg-white mt-[100px] md:px-24 py-16">
                <div className="w-full flex flex-col md:flex-row md:justify-between justify-center">
                    <div className="flex flex-col justify-center md:justify-start ">
                        <Button className="w-fit rounded-[30px] mb-[50px] bg-contain bg-transparent hover:bg-black/10">
                            <StrapiImage src={logo.logoImage.url} alt={logo.logoImage.alternativeText} width={80} height={(logo.logoImage.height as number)}/>
                        </Button>
                        <div className="flex flex-wrap w-full max-w-sm justify-center items-center space-x-2 space-y-4  mb-[50px]">
                            <Input className="h-[50px] max-w-[300px] w-full" type="email" placeholder="Email" />
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
                    <div className="w-full flex justify-between ">
                        <div className="flex gap-4">
                            <Link href={"/"} className="text-center">
                                Privacy Policy
                            </Link>
                            <Link href={"/"} className="text-center">
                                Terms of srvice
                            </Link>
                        </div>
                        <div className="text-center">
                            Designed by Web Desing Agency!
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
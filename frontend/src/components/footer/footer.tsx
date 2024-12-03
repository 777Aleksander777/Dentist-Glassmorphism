"use client";

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

export default function Footer() {

    return (
        <footer className="w-full max-w-[1900px] mx-auto mt-[150px] px-[50px]">
            <div className="w-full flex justify-between align-center items-start">
                <div className="max-w[250px] flex flex-col justify-start align-start items-start gap-4">
                    <h4 className="text-primary font-bold text-xl">
                        Address
                    </h4>
                    <p className="text-lg">
                        4th Floor, Plot No.22,145 Murphy<br></br>
                        Canyon Rd. Las Vegas
                    </p>
                </div>
                <div className="max-w[250px] flex flex-col justify-start align-start items-start gap-4">
                    <h4 className="text-primary font-bold text-xl">
                        Working hours
                    </h4>
                    <p className="text-lg">
                        Mon-Fri: 10 am-7 pm<br></br>
                        Sat: 10 am-6 pm<br></br>
                        Sun: Closed
                    </p>
                </div>
                <div className="max-w[250px] flex flex-col justify-start align-start items-start gap-4">
                    <h4 className="text-primary font-bold text-xl">
                        Contact
                    </h4>
                    <p className="text-lg">
                        hello@example.com<br></br>
                        (060) 444 434 444
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
            <div className="w-full min-h-[500px] flex flex-col justify-between  rounded-[50px] bg-white mt-[100px] mb-[50px] px-12 py-8">
                <div>
                    
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
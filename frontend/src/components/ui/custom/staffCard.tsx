"use client"

import { useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";

export default function StaffCard() {

    const [isCardHover, setIsCardHover] = useState<boolean>(false);

    return (
        <Card className="w-[300px] h-[300px] flex flex-col justify-between bg-background text-primary hover:bg-primary hover:text-white rounded-[30px]" onMouseEnter={() => setIsCardHover(true)} onMouseLeave={() => setIsCardHover(false)}>
            <CardHeader className=" p-4">
                <Image className="w-full h-full" src={"https://cdn.prod.website-files.com/667fa87784e78fe8713999e8/6683a58ccc73c29067579256_team-01.avif"} alt="Staff Image" width={500} height={500}/>
            </CardHeader>
            <CardFooter className="z-10">
                {isCardHover ?
                (
                <div className="bg-primary w-full h-full">
                    <ul className="list-disc ml-4">
                        <li>Preventive care</li>
                        <li>Professional cleaning</li>
                        <li>Oral examination</li>
                    </ul>
                </div>
                ) : (
                    <></>
                )}
            </CardFooter>
        </Card>
    )
}
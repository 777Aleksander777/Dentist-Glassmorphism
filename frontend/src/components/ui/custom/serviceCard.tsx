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
import { Button } from "../button";
import Image from "next/image";

export default function ServiceCard() {

    const [isCardHover, setIsCardHover] = useState<boolean>(false);

    return (
        <Card className="min-w-[300px] max-w-[425px] h-[325px] p-8 flex flex-row justify-between bg-accent rounded-[50px] text-primary hover:bg-primary hover:text-white" onMouseEnter={() => setIsCardHover(true)} onMouseLeave={() => setIsCardHover(false)}>
            <CardHeader className="w-3/5 p-0 flex flex-col justify-between aling-start items-start">
                <CardTitle className="text-[30px]">
                    Dental implants
                </CardTitle>
                <CardDescription className={`text-white text-[18px]`}>
                    The cornerstone of maintaining optimal oral health.
                </CardDescription>
                <Button className="w-[50px] h-[50px]">V</Button>
            </CardHeader>
            <div className="w-1/4 my-auto mx-auto">
                <Image className="w-full" src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6685031a9c12b76d06187b3e_service-icon-06.svg"} alt="Card Image" width={500} height={500}/>
            </div>
        </Card>
    )
}
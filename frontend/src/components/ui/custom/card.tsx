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

export default function CustomCard() {

    const [isCardHover, setIsCardHover] = useState<boolean>(false);

    return (
        <Card className="min-w-[300px] max-w-[425px] h-[300px] flex flex-col justify-between bg-white text-primary hover:bg-primary hover:text-white" onMouseEnter={() => setIsCardHover(true)} onMouseLeave={() => setIsCardHover(false)}>
            <CardHeader>
                <CardTitle className="text-[30px]">
                    Routine check-ups
                </CardTitle>
                <CardDescription className={`${isCardHover ? "opacity-1" : "opacity-0"} text-white text-[18px]`}>
                    Dental hygienists remove plaque and tartar that brushing and flossing can't reach.
                </CardDescription>
            </CardHeader>
            <CardFooter className="">
                {isCardHover ?
                (
                <ul className="list-disc ml-4">
                    <li>Preventive care</li>
                    <li>Professional cleaning</li>
                    <li>Oral examination</li>
                  </ul>
                ) : (
                    <p>Image</p>
                )}
            </CardFooter>
        </Card>
    )
}
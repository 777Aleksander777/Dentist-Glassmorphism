"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { HeroProps } from "@/types/hero"

export default function HeroTwo({ data }: Readonly<HeroProps>) {

    const {title, desc, button, img} = data

    return (
        <section className={`w-full h-[80vh] flex justify-center align-center`} 
            // style={{
            //     backgroundImage: `url('http://localhost:3001/uploads/tooth_Three_4c662ca114.png')`,
            // }}
            style={{
                // backgroundImage: imageUrl ? `url('${imageUrl}')` : undefined,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
            }}
        >
            <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay={true} loop preload="auto" muted>
                <source src="/video/videoSix.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="my-auto px-8 py-12 rounded-[50px] max-w-[800px] w-full h-fit bg-gradient-to-r from-black/20 to-secondary/30 backdrop-blur-xl shadow-2xl flex gap-8 flex-col justify-center align-center items-center">
                <h1 className="text-4xl md:text-8xl font-bold text-white">
                    {title}
                </h1>
                <p className="text-md md:text-lg text-white">
                    {desc}
                </p>
                <Button className="bg-secondary w-[200px]">
                    {button.name}
                </Button>
            </div>
        </section>
    )
}
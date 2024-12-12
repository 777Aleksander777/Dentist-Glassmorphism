"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { HeroProps } from "@/types/hero"

export default function HeroTwo({ data }: Readonly<HeroProps>) {

    const {title, desc, button, img} = data

    return (
        <section className="w-full max-w-[1900px] mx-auto px-[100px] relative">
            <div className="w-full flex flex-col justify-center align-center items-center gap-12 bg-white rounded-[50px] p-24">
                <h1 className="text-8xl text-primary font-bold" >
                    About OralCare
                </h1>
                <p className="text-md text-primary max-w-[400px]">
                    At our practice, we believe that a healthy smile is the foundation of overall well-being, and we are dedicated to helping our patients achieve and maintain optimal oral health for life.
                </p>
                <Button className="bg-white text-primary hover:bg-secondary">View our services</Button>
            </div>
            <Image className="absolute bottom-[-100px] left-8" src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6686420d513c09afde586bc3_about-hero-image.avif"} alt="Hero image" width={500} height={500}/>
        </section>
    )
}
"use client";

import Image from "next/image";
import { Button } from "../ui/button";

export default function BenefitsTwo() {

    return (
         <section className="w-full max-w-[1900px] mt-[150px] mx-auto px-[100px] relative">
            <div className="relative bg-primary rounded-[50px] p-24 flex">
                <div className="w-2/3 flex flex-col justify-center align-start items-start gap-12">
                    <h3 className="text-white text-4xl font-bold">
                        Arrange your dental examination and treatment
                    </h3>
                    <div className="">
                        <Button className="bg-secondary text-primary hover:bg-white">Book an appointment</Button>
                    </div>
                    <div className="flex gap-8">
                        <p className="text-white">
                            Free appointment
                        </p>
                        <p className="text-white">
                            Free appointment
                        </p>
                    </div>
                </div>
                <div className="w-1/3 absolute right-[0px] top-[-70px]">
                    <Image src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6686420d7e5fdcb30b993732_appointment-hero-image.avif"} alt="Benefits Image" width={500} height={500}/>
                </div>
            </div>
         </section>
    )
}
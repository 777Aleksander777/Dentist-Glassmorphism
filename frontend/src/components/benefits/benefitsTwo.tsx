"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { BenefitsTwoProps } from "@/types/benefits";
import { StrapiImage } from "../utils/strapiImage";
import { motion, useInView } from "framer-motion";
import React from "react";

export default function BenefitsTwo({ data }: Readonly<BenefitsTwoProps>) {

    const {title, button, img, list} = data;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
                ref={ref}
                initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
                animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
         <section className="w-full max-w-[1900px] mt-[150px] mx-auto px-[100px] relative">
            <div className="relative bg-primary rounded-[50px] p-24 flex">
                <div className="w-2/3 flex flex-col justify-center align-start items-start gap-12">
                    <h3 className="text-white text-4xl font-bold">
                        {title}
                    </h3>
                    <div className="">
                        <Button className="bg-secondary text-primary hover:bg-white">
                            {button.name}
                        </Button>
                    </div>
                    <div className="flex gap-8">
                        {list?.map((item) => (
                            <p key={item.title} className="text-white">
                                {item.title}
                            </p>
                        ))}
                        {/* <p className="text-white">
                            Free appointment
                            </p> */}
                    </div>
                </div>
                <div className="w-1/3 absolute right-[0px] top-[-70px]">
                    <StrapiImage src={img.url} alt={img.alternativeText} width={500} height={500}/>
                    {/* <Image src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6686420d7e5fdcb30b993732_appointment-hero-image.avif"} alt="Benefits Image" width={500} height={500}/> */}
                </div>
            </div>
         </section>
        </motion.div>
    )
}
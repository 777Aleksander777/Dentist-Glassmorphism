"use client";

import Image from "next/image";
import { Separator } from "../ui/separator";
import { AboutTwoProps } from "@/types/about";
import { StrapiImage } from "../utils/strapiImage";
import { motion, useInView } from "framer-motion";
import React from "react";


export default function AboutTwo({ data }: Readonly<AboutTwoProps>) {

    const {title, desc, img, list} = data;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
                ref={ref}
                initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
                animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
        <section className="w-full max-w-[1900px] mx-auto mt-[150px] px-[100px] relative">
            <div className="w-[80%] mx-auto flex justify-between align-center items-center gap-4 bg-primary rounded-[50px] p-12">
                <div className="w-3/5">
                    {/* <Image className="rounded-[50px]" src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6676a535983da61b62b153c1_about-image.avif"} alt="About Iamge" width={5000} height={5000}/> */}
                    <StrapiImage src={img.url} alt={img.alternativeText} width={500} height={500}/>
                </div>
                <div className="w-1/3 flex flex-col justify-between align-start items-start">
                    <div className="mb-12">
                        <h4 className="text-6xl text-white mb-4">
                            {/* Where skilled dentists deliver the best solutions */}
                            {title}
                        </h4>
                        <p className="text-md text-white">
                            {/* We take pride in our team of skilled dentists who are dedicated to delivering the best possible solutions for your dental needs. */}
                            {desc}
                        </p>
                    </div>
                    <div className="w-full">
                        <ul className="list-disc list-inside marker:text-secondary">
                            {list?.map((item) => (
                                <li key={item.title} className="text-white text-lg">
                                    {item.title}
                                    <Separator className="bg-white my-6"/>
                                </li>
                            ))}
                            {/* <li className="text-white text-lg">
                                Advanced training
                                <Separator className="bg-white my-6"/>
                                </li>
                                <li className="text-white text-lg">
                                Patient-Centered care
                                <Separator className="bg-white my-6"/>
                                </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </motion.div>
    )
}
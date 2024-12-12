"use client";

import Image from "next/image"
import { Button } from "../ui/button"
import { AboutOneProps } from "@/types/about"
import { StrapiImage } from "../utils/strapiImage";
import { motion, useInView} from 'framer-motion';
import React from "react";

export default function About({ data }: Readonly<AboutOneProps>) {

    const {title, desc, img, button} = data;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
                ref={ref}
                initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
                animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
        <section className="w-full max-w-[1900px] mx-auto mt-[300px] px-[100px] relative">
            <div className="w-full bg-white rounded-[50px] h-[600px]">

            </div>
            <div className="w-[80%] flex gap-8 bg-accent p-12 rounded-[50px] mx-auto h-[600px] absolute top-[-100px] left-[50%] translate-x-[-50%]">
                <div className="min-w-[530px] h-[611px] ml-[-130px] mb-[-50px]">
                    {/* <Image src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6686420d4d668dbd46cd5a7c_about-image-01.avif"} alt="About Section Image" width={530} height={611} style={{width: "530px", height: "auto"}}/> */}
                    <StrapiImage src={img.url} alt={img.alternativeText} width={500} height={500}/>
                </div>
                <div className="flex flex-col gap-6 justify-end items-start align-end">
                    <h1 className="text-8xl text-primary">
                        {/* Smiles make the first impression */}
                        {title}
                    </h1>
                    <p className="text-md font-bold">
                        {/* We are committed to providing exceptional dental care in a warm and welcoming environment. Our team of skilled professionals is dedicated to helping you achieve and maintain a healthy, beautiful smile for life. */}
                        {desc}
                    </p>
                    <Button
                     className="bg-white text-primary hover:bg-primary hover:text-white">
                        {/* More about us */}
                        {button.name}
                    </Button>
                </div>
            </div>
        </section>
        </motion.div>
    )
}
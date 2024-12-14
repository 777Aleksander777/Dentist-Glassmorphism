"use client"

import { ServicesProps } from "@/types/services"
import ServiceCard from "../ui/custom/serviceCard"
import { motion, useInView } from "framer-motion";
import React from "react";


export default function Services({ data }: Readonly<ServicesProps>) {

    const {title} = data;
    const ref = React.useRef(null); 
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
                ref={ref}
                initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
                animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
        <section className="w-full max-w-[1900px] mx-auto my-[150px] px-[100px] relative">
            <div className="">
                <h2 className="text-6xl text-center font-bold text-primary mb-[50px]">
                    {title}
                </h2>
            </div>
            <div className="w-full flex flex-wrap justify-center align-center items-center gap-12">
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
        </section>
        </motion.div>
    )
}
"use client"

import { ServicesProps } from "@/types/services"
import ServiceCard from "../ui/custom/serviceCard"
import { motion, useInView } from "framer-motion";
import React from "react";


export default function Services({ data }: Readonly<ServicesProps>) {

    const { title, desc, carts } = data;
    const ref = React.useRef(null); 
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
                ref={ref}
                initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
                animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
        <section className="w-full max-w-[1900px] mx-auto my-[150px] md:px-[100px] px-8 relative">
            <div className="mb-[50px]">
                <h2 className="md:text-6xl text-4xl text-center font-bold text-primary mb-2">
                    {title}
                </h2>
                <p className="text-primary text-lg text-center">
                    {desc}
                </p>
            </div>
            <div className="w-full flex flex-wrap justify-center align-center items-streach gap-12">
                {/* <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/> */}
                {carts?.map((item) => (
                    <ServiceCard key={item.title} tytul={item.title} opis={item.desc} img={item.img}/>
                ))}
            </div>
        </section>
        </motion.div>
    )
}
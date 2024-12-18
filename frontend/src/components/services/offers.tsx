"use client"

import { ServicesProps } from "@/types/services"
import ServiceCard from "../ui/custom/serviceCard"
import { motion, useInView } from "framer-motion";
import React from "react";
import { OffersOneProps } from "@/types/offers";


export default function Offers({ data }: Readonly<OffersOneProps>) {

    const ref = React.useRef(null); 
    const isInView = useInView(ref, { once: true });

    console.dir( data, { depth: null })

    return (
        <motion.div
                ref={ref}
                initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
                animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
        <section className="w-full max-w-[1900px] mx-auto my-[150px] px-[100px] relative">
            <div className="mb-[50px]">
                <h2 className="text-6xl text-center font-bold text-primary mb-2">
                    Usługi
                </h2>
                <p className="text-primary text-lg text-center">
                    Świadczymy usługi na najwyższym poziomie!
                </p>
            </div>
            <div className="w-full flex flex-wrap justify-center align-center items-center gap-12">
                {data?.map((item) => (
                    <ServiceCard key={item.title} tytul={item.title} opis={item.desc} img={item.img}/>
                ))}
            </div>
        </section>
        </motion.div>
    )
}
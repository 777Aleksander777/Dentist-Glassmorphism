"use client"

import { ExpertiseProps } from "@/types/expertise"
import { Button } from "../ui/button"
import CustomCard from "../ui/custom/card"
import { motion, useInView } from "framer-motion"
import React from "react"

export default function Expertise({ data }: Readonly<ExpertiseProps>) {

    const {title, button} = data;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
                ref={ref}
                initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
                animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
        <section className="w-full max-w-[1900px] mx-auto mt-[150px] px-[100px]">
            <div className="">
                <div className="mb-[50px] w-full flex justify-between align-center items-center">
                    <h2 className="font-bold text-8xl">
                        {title}
                    </h2>
                    <Button className="bg-secondary hover:bg-primary">
                        {button.name}
                    </Button>
                </div>
                <div className="w-full flex justify-between align-center items-center gap-6">
                    <CustomCard/>
                    <CustomCard/>
                    <CustomCard/>
                    <CustomCard/>
                </div>
            </div>
        </section>
        </motion.div>
    )
}
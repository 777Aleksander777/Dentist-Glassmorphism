"use client"

import { StaffProps } from "@/types/staff"
import StaffCard from "../ui/custom/staffCard"
import { motion, useInView } from "framer-motion";
import React from "react";

export default function Staff({ data }: Readonly<StaffProps>) {

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
        <section className="w-full max-w-[1900px] mx-auto mt-[150px] z-[-1] px-[100px] relative">
            <div className="bg-white rounded-[50px] flex flex-col justify-center align-center items-center gap-12 p-12">
                <div className="mb-12">
                    <h2 className="text-6xl font-bold text-primary">
                        {title}
                    </h2>
                </div>
                <div className="w-full flex justify-evenly ">
                    <div className="mt-[-50px]">
                        <StaffCard/>
                    </div>
                    <div>
                        <StaffCard/>
                    </div>
                    <div>
                        <StaffCard/>
                    </div>
                    <div className="mt-[-50px]">
                        <StaffCard/>
                    </div>
                </div>
            </div>
        </section>
        </motion.div>
    )
}
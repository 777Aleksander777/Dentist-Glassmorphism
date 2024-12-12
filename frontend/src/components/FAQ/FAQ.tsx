"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { FAQProps } from "@/types/faq"
import { motion, useInView } from "framer-motion"
import React from "react"

export default function FAQ({ data }: Readonly<FAQProps>) {

    const {title, list} = data

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
            animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <section className="w-full max-w-[1800px] mx-auto mt-[150px] px-[100px] relative">
            <h2 className="text-primary text-6xl font-bold text-center mb-[100px]">
                {title}
            </h2>
            <Accordion type="single" collapsible className="w-full flex flex-wrap justify-center align-start items-start gap-8">
                {list?.map((item) => (
                    <AccordionItem key={item.title} value={item.title} className="w-full max-w-[650px] bg-white rounded-[30px] py-2 px-4">
                        <AccordionTrigger className="text-xl text-pirmary font-bold">
                            {/* Is it styled? */}
                            {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-primary text-lg">
                        {/* Yes. It comes with default styles that matches the other
                        components&apos; aesthetic. */}
                        {item.desc}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
        </motion.div>
    )
}
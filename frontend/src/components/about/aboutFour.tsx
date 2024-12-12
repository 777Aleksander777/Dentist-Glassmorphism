"use client";

import { AboutFourProps } from "@/types/about";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { motion, useInView } from "framer-motion";
import React from "react";

export default function AboutFour({ data }: Readonly<AboutFourProps>) {

    const {title, desc, list, button, video} = data
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
                ref={ref}
                initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
                animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
        <section className="w-full max-w-[1900px] mt-[100px] mx-auto px-[100px] relative">
            <div className="w-full relative">
                <div>
                <video className=" m-auto rounded-xl drop-shadow-[0_0_24px_rgba(0,0,0,1)] w-[85%] h-[500px] object-cover" width="auto" height="auto" autoPlay={true} loop preload="auto" muted>
                    <source src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429%2F66851fb23d91024ddbb094de_5944971_Nobody_Dental_Dentist_1920x1080%20%28online-video-cuttercom%29%20%281%29-transcode.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
                <div className="w-full bg-primary h-auto rounded-[50px] pt-96 mt-[-200px] flex flex-col gap-8 px-12 pb-12">
                    <h1 className="text-6xl text-white">
                        {/* Comprehensive dental solutions for every smile */}
                        {title}
                    </h1>
                    <div className="flex justify-between align-center items-center">
                        <div className="flex flex-col gap-8 max-w-[50%]">
                            <p className="w-full text-white text-lg">
                                {/* We are proud to offer a comprehensive range of dental services to meet the diverse needs of our patients. From routine preventive care to advanced restorative treatments and cosmetic enhancements, our experienced dental team is committed to providing personalized care tailored to your unique needs and goals. */}
                                {desc}
                            </p>
                            <Button className="w-fit bg-secondary text-white hover:bg-white hover:text-secondary">
                                {/* Learn more */}
                                {button.name}
                            </Button>
                        </div>
                        <div className="px-8">
                            <ul className="flex flex-wrap justify-end aling-start items-canter gap-8 list-disc list-inside marker:text-secondary">
                                {list?.map((item) => (
                                    <li key={item.title} className="text-md text-white max-w-[250px] w-full">
                                        {item.title}
                                        <Separator className="bg-white my-4 max-w-[250px] w-full"/>
                                    </li>
                                ))}
                                {/* <li className="text-md text-white max-w-[250px] w-full">
                                    Preventive dentistry
                                    <Separator className="bg-white my-4 max-w-[250px] w-full"/>
                                    </li>
                                    <li className="text-md text-white max-w-[250px] w-full">
                                    Preventive dentistry
                                    <Separator className="bg-white my-4 max-w-[250px] w-full"/>
                                    </li>
                                    <li className="text-md text-white max-w-[250px] w-full">
                                    Preventive dentistry
                                    <Separator className="bg-white my-4 max-w-[250px] w-full"/>
                                    </li>
                                <li className="text-md text-white max-w-[250px] w-full">
                                    Preventive dentistry
                                    <Separator className="bg-white my-4 max-w-[250px] w-full"/>
                                    </li>
                                    <li className="text-md text-white max-w-[250px] w-full">
                                    Preventive dentistry
                                    <Separator className="bg-white my-4 max-w-[250px] w-full"/>
                                    </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </motion.div>
    )
}
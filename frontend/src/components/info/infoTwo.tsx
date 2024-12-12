"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { motion, useInView } from "framer-motion";
import React from "react";

export default function InfoTwo() {

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
            <h2 className="text-6xl font-bold text-primary mb-[70px] text-center">
                Why you should choose us?
            </h2>
            <div className="flex justify-around align-center items-start">
                <Card className="bg-white w-[250px] min-h-[100px] rounded-[30px]">
                    <CardContent className=" flex flex justify-evenly p-6">
                        <CardFooter className="text-primary text-4xl font-bold text-center flex items-center align-center justify-center p-0">
                            24/7
                        </CardFooter>
                        <CardTitle className="text-secondary text-md text-center my-auto">
                            We take on the most difficult cases
                        </CardTitle>
                    </CardContent>
                </Card>
                <Card className="bg-white w-[250px] min-h-[100px] rounded-[30px]">
                    <CardContent className=" flex flex justify-evenly p-6">
                        <CardFooter className="text-primary text-4xl font-bold text-center flex items-center align-center justify-center p-0">
                            24/7
                        </CardFooter>
                        <CardTitle className="text-secondary text-md text-center my-auto">
                            Only qualified caring doctors
                        </CardTitle>
                    </CardContent>
                </Card>
                <Card className="bg-white w-[250px] min-h-[100px] rounded-[30px]">
                    <CardContent className=" flex flex justify-evenly p-6">
                        <CardFooter className="text-primary text-4xl font-bold text-center flex items-center align-center justify-center p-0">
                            24/7
                        </CardFooter>
                        <CardTitle className="text-secondary text-md text-center my-auto">
                            Payment for treatment in installment
                        </CardTitle>
                    </CardContent>
                </Card>
                <Card className="bg-white w-[250px] min-h-[100px] rounded-[30px]">
                    <CardContent className=" flex flex justify-evenly p-6">
                        <CardFooter className="text-primary text-4xl font-bold text-center flex items-center align-center justify-center p-0">
                            24/7
                        </CardFooter>
                        <CardTitle className="text-secondary text-md text-center my-auto">
                            More than 800 satisfied clients
                        </CardTitle>
                    </CardContent>
                </Card>
            </div>
        </section>
        </motion.div>
    )
}
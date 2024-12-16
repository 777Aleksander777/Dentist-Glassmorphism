"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator"
import { BenefitsOneProps } from "@/types/benefits";
import { StrapiImage } from "../utils/strapiImage";
import { motion, useInView } from "framer-motion";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { getBackendUrl } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay"

export default function Benefits({ data }: Readonly<BenefitsOneProps>) {
     
    const {tytul, opis, przycisk, imgs} = data;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true});

    return (
        // <motion.div
        //         ref={ref}
        //         initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
        //         animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
        //         transition={{ duration: 0.8, ease: "easeOut" }}
        //         >
        // <section className="w-full max-w-[1900px] mx-auto mt-[150px] px-[100px]">
        //     <div className="w-full flex justify-center align-center items-center">
        //         <div className="w-1/3 px-8">
        //             <h1 className="text-8xl font-bold text-primary mb-8">
        //                 {title}
        //             </h1>
        //             <p className="text-md font-bold ">
        //                 {/* Your smile is one of your most valuable assets, and investing in its health and appearance is an investment in yourself. */}
        //                 {desc}
        //             </p>
        //             <Button className="bg-secondary text-primary hover:bg-primary hover:text-secondary mt-16">
        //                 {button.name}
        //             </Button>
        //         </div>
        //         <div className="w-1/3 px-8 flex justify-center">
        //             <StrapiImage src={img.url} alt={img.alternativeText} width={img.width} height={img.height}/>
        //             {/* <Image src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/667ceb10d78e0f7461f233c8_benefit-image.avif"} alt="Benefits Image" width={300} height={300}/> */}
        //         </div>
        //         <div className="w-1/3 px-8">
        //         {list?.map((item) => (
        //             <div key={item.title}>
        //                 <ul className="list-disc list-inside marker:text-secondary">
        //                     <li className="text-2xl font-bold text-primary mb-4">
        //                         {item.title}
        //                     </li>
        //                 </ul>
        //                 <p className="text-lg">
        //                     {/* Regular dental check-ups and cleanings help prevent dental problems such as tooth decay, gum disease, and oral infections. */}
        //                     {item.desc}
        //                 </p>
        //                 <Separator className="bg-black my-4"/>
        //             </div>
        //         ))}
        //         </div>
        //     </div>
        // </section>
        // </motion.div>

        <section ref={ref} className="w-full md:h-[80vh] h-screen flex flex-col md:flex-row-reverse justify-center aling-center items-center overflow-hidden">
            <motion.div
                initial={{ x: "-500px", opacity: 0.1, }} // Start poza ekranem
                animate={isInView ? { x: 0, opacity: 1, } : {}} // Animuj tylko gdy widoczny
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full py-12 px-8 md:px-0 bg-white flex flex-col gap-8 justify-center align-center items-center"
            >
                    <h2 className="text-6xl font-bold text-center">
                        {tytul}
                    </h2>
                    <p className="text-lg text-center">
                        {opis}
                    </p>
                    <Button>
                        {przycisk.nazwa}
                    </Button>
            </motion.div>
            <motion.div className="w-full h-full px-0 bg-no-repeat bg-primary/20"
                style={{
                    // backgroundImage: imageUrl ? `url('${imageUrl}')` : undefined,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
                initial={{ x: "500px", opacity: 0.1 }} // Start poza ekranem
                animate={isInView ? { x: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Carousel 
                    opts={{
                        loop: true
                    }}
                    plugins={[
                        Autoplay({
                          delay: 3000,
                        }),
                    ]}
                    className="w-full h-full">
                        <CarouselContent className="min-h-full">
                            {imgs?.map((img) => (
                                <CarouselItem className="w-full min-h-full" key={img.url}>
                                    <StrapiImage src={img.url} alt={img.alternativeText} isCover={true}/>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* <CarouselPrevious className="absolute bottom-0 left-[50%]"/>
                        <CarouselNext /> */}
                    </Carousel>
            </motion.div>
        </section>
    )
}
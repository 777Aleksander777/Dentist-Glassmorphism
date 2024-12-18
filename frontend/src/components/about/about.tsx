"use client";

import Image from "next/image"
import { Button } from "../ui/button"
import { AboutOneProps } from "@/types/about"
import { StrapiImage } from "../utils/strapiImage";
import { motion, useInView} from 'framer-motion';
import React from "react";
import { getBackendUrl } from "@/lib/utils";
import Link from "next/link";

export default function About({ data }: Readonly<AboutOneProps>) {

    const {title, desc, img, button} = data;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const [imageUrl, setImageUrl] = React.useState<string | null>(null)


    React.useEffect(() => {
        async function loadImageUrl() {
            try {
                const url = await getBackendUrl();
                const image = url + img.url
                setImageUrl(image);
                console.log(`Image URL: ${image}`);
            } catch (error) {
                console.log("Cannot get Image URL! " + error);
            }
            // if (img?.url) {
            // }
          };

          loadImageUrl();
    }, [])

    // if(!imageUrl) {
    //     return (
    //         <h4>Loading ...</h4>
    //     )
    // }
    return (
        // <motion.div
        //         ref={ref}
        //         initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
        //         animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
        //         transition={{ duration: 0.8, ease: "easeOut" }}
        //         >
        // <section className="w-full max-w-[1900px] mx-auto mt-[300px] px-[100px] relative">
        //     <div className="w-full bg-white rounded-[50px] h-[600px]">

        //     </div>
        //     <div className="w-[80%] flex gap-8 bg-accent p-12 rounded-[50px] mx-auto h-[600px] absolute top-[-100px] left-[50%] translate-x-[-50%]">
        //         <div className="min-w-[530px] h-[611px] ml-[-130px] mb-[-50px]">
        //             {/* <Image src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6686420d4d668dbd46cd5a7c_about-image-01.avif"} alt="About Section Image" width={530} height={611} style={{width: "530px", height: "auto"}}/> */}
        //             <StrapiImage src={img.url} alt={img.alternativeText} width={500} height={500}/>
        //         </div>
        //         <div className="flex flex-col gap-6 justify-end items-start align-end">
        //             <h1 className="text-8xl text-primary">
        //                 {/* Smiles make the first impression */}
        //                 {title}
        //             </h1>
        //             <p className="text-md font-bold">
        //                 {/* We are committed to providing exceptional dental care in a warm and welcoming environment. Our team of skilled professionals is dedicated to helping you achieve and maintain a healthy, beautiful smile for life. */}
        //                 {desc}
        //             </p>
        //             <Button
        //              className="bg-white text-primary hover:bg-primary hover:text-white">
        //                 {/* More about us */}
        //                 {button.name}
        //             </Button>
        //         </div>
        //     </div>
        // </section>
        // </motion.div>
        <section ref={ref} className="w-full md:h-[80vh] min-h-screen flex flex-col md:flex-row justify-center aling-center items-streach overflow-hidden">
            <motion.div
                initial={{ x: "-500px", opacity: 0.1, }} // Start poza ekranem
                animate={isInView ? { x: 0, opacity: 1, } : {}} // Animuj tylko gdy widoczny
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full py-12 px-8 bg-white flex flex-col gap-8 justify-center align-center md:items-start items-center"
            >
                    <h2 className="text-6xl font-bold text-start">
                        {title}
                    </h2>
                    <p className="text-lg text-start">
                        {desc}
                    </p>
                    <Button>
                        <Link href={button.url}>{button.name}</Link>
                    </Button>
            </motion.div>
            <motion.div className={`w-full h-full min-h-[100vw] md:min-h-full px-8 bg-no-repeat bg-primary/20`}
                style={{
                    backgroundImage: imageUrl ? `url('${imageUrl}')` : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                initial={{ x: "500px", opacity: 0.1 }} // Start poza ekranem
                animate={isInView ? { x: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* <StrapiImage src={img.url} alt={img.alternativeText} width={500} height={500}/> */}
            </motion.div>
        </section>
    )
}
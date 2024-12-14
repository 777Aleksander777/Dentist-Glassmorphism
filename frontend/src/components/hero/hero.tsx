"use client"

import { HeroProps } from "@/types/hero";
import { Button } from "../ui/button";
import Image from "next/image";
import { StrapiImage } from "../utils/strapiImage";
import { motion, useInView } from "framer-motion"
import React from "react";
import { getBuisnessData } from "@/data/loader";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getBackendUrl } from "@/lib/utils";


export default function Hero({ data }: Readonly<HeroProps>) {

    const {title, desc, button, img, type} = data

    const ref = React.useRef(null);
    const [workingHours, setWorkingHours] = React.useState("");
    
    const [imageUrl, setImageUrl] = React.useState<string | null>(null)
    // const imageUrl = getImageURL(img.url);

    // useInView sprawdza, czy element jest widoczny
    const isInView = useInView(ref, { once: true }); // `once: true` animuje tylko raz

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
        async function getData() {
            try {
                const buisnessdata: {data: {footer: {address: string, workingHours: string, contact: string}}} = await getBuisnessData();
                setWorkingHours(buisnessdata.data.footer.workingHours)
                console.dir(buisnessdata.data, { depth: null});
            } catch (error) {
                console.log("Cannot get buisness data! " + error);
            }
        }

        loadImageUrl();
        getData();
    }, [])

    if(imageUrl == null) {
        return (
            <div className="min-h-screen">
                <h4>Ładowanie ...</h4>
            </div>
        );
    }

    return (
        // <>
        // {type === 'ONE' ?
        //     (
        //         <motion.div
        //         ref={ref}
        //         initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
        //         animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
        //         transition={{ duration: 0.8, ease: "easeOut" }}
        //         >
        //         <section className="w-full max-w-[1900px] mx-auto px-[100px]">
        //         <div className="w-full min-h-[700px] flex gap-8 bg-white p-[50px] rounded-[30px]">
        //             <div className="w-full min-h-full mt-[50px] flex flex-col gap-8">
        //                 <h1 className="text-8xl font-bold">
        //                     {title}
        //                 </h1>
        //                 <div>
        //                     <Button className="hover:bg-primary bg-secondary">
        //                         {button.name}
        //                     </Button>
        //                 </div>
        //                 <div className="mt-auto">
        //                     <div className="font-bold text-lg">
        //                         We are open
        //                     </div>
        //                         <ReactMarkdown 
        //                             remarkPlugins={[remarkGfm]}
        //                             rehypePlugins={[rehypeRaw]}
        //                         >
        //                             {workingHours}
        //                         </ReactMarkdown>
        //                     <div className="text-md">
        //                         {/* {workingHours} */}
        //                     </div>
        //                     <div className="text-md">
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-full min-h-full relative">
        //                 {/* <Image className="w-full" src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6686420d0445fbb38236ab20_hero-image.avif"} alt="Hero tooth image" quality={100} width={100} height={100} style={{width: "100%", height: "auto"}}/> */}
        //                 <StrapiImage src={img.url} alt={img.alternativeText} width={500} height={500}/>
        //             </div>
        //         </div>
        //         <div className="w-full max-w-[1800px] min-h-[125px] mx-auto mt-[50px] bg-primary py-[35px] px-[50px] rounded-[50px]">
        //             <div>

        //             </div>
        //         </div>
        //     </section>
        //     </motion.div>
        //     ) 
        //     :
        //     (
        //         <motion.div
        //         ref={ref}
        //         initial={{ y: "100px", opacity: 0.1 }} // Start poza ekranem
        //         animate={isInView ? { y: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
        //         transition={{ duration: 0.8, ease: "easeOut" }}
        //         >
        //         <section className="w-full max-w-[1900px] mx-auto px-[100px] relative">
        //             <div className="w-full flex flex-col justify-center align-center items-center gap-12 bg-white rounded-[50px] p-24">
        //                 <h1 className="text-8xl text-primary font-bold" >
        //                     {title}
        //                 </h1>
        //                 <p className="text-md text-primary max-w-[400px]">
        //                     {/* At our practice, we believe that a healthy smile is the foundation of overall well-being, and we are dedicated to helping our patients achieve and maintain optimal oral health for life. */}
        //                     {desc}
        //                 </p>
        //                 <Button className="bg-white text-primary hover:bg-secondary">
        //                     {button.name}
        //                 </Button>
        //             </div>
        //             <div className="absolute bottom-[-100px] left-8">
        //                 <StrapiImage src={img.url} alt={img.alternativeText} width={500} height={500}/>
        //             </div>
        //             {/* <Image className="absolute bottom-[-100px] left-8" src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6686420d513c09afde586bc3_about-hero-image.avif"} alt="Hero image" width={500} height={500}/> */}
        //         </section>
        //         </motion.div>
        //     )
        // }
        // </>
        <section className={`w-full h-[80vh] flex justify-center align-center`} 
            // style={{
            //     backgroundImage: `url('http://localhost:3001/uploads/tooth_Three_4c662ca114.png')`,
            // }}
            style={{
                // backgroundImage: imageUrl ? `url('${imageUrl}')` : undefined,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
            }}
        >
            <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay={true} loop preload="auto" muted>
                <source src="/video/videoSix.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="my-auto px-8 py-12 rounded-[50px] max-w-[800px] w-full h-fit bg-gradient-to-r from-black/20 to-secondary/30 backdrop-blur-xl shadow-2xl flex gap-8 flex-col justify-center align-center items-center">
                <h1 className="text-4xl md:text-8xl font-bold text-white">
                    {title}
                </h1>
                <p className="text-md md:text-lg text-white">
                    {desc}
                </p>
                <Button className="bg-secondary w-[200px]">
                    {button.name}
                </Button>
            </div>
        </section>
    )
}
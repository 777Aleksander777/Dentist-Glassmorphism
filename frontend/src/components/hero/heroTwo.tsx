"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { HeroProps } from "@/types/hero"
import React from "react"
import { getBackendUrl } from "@/lib/utils"

export default function HeroTwo({ data }: Readonly<HeroProps>) {

    const {tytul, opis, video} = data

    const [imageUrl, setImageUrl] = React.useState<string | null>(null)
    // const imageUrl = getImageURL(img.url);

    // useInView sprawdza, czy element jest widoczny

    React.useEffect(() => {
        async function loadImageUrl() {
            try {
                const url = await getBackendUrl();
                const image = url + video.url
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

    if(imageUrl == null) {
        return (
            <div className="min-h-screen">
                <h4>Ładowanie ...</h4>
            </div>
        );
    }
    
    return (
        <section className={`w-full h-[calc(100vh-100px)] flex flex-col md:flex-row justify-center align-center`} 
            // style={{
            //     backgroundImage: `url('http://localhost:3001/uploads/tooth_Three_4c662ca114.png')`,
            // }}
            style={{
                // backgroundImage: imageUrl ? `url('${imageUrl}')` : undefined,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
            }}
        >
            <div className="my-auto px-8 md:py-12 py-24 w-full h-full bg-white h-fit flex gap-8 flex-col justify-center align-center items-center">
                <h1 className="text-4xl md:text-8xl font-bold text-primary">
                    {tytul}
                </h1>
                <p className="text-md md:text-lg text-primary">
                    {opis} 
                </p>
                <Button className="bg-secondary w-[200px]">
                    Umów się na wizytę
                </Button>
            </div>
            <video className="md:max-w-[50%] w-screen w-full h-full object-cover" autoPlay={true} loop preload="auto" muted>
                <source src={imageUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}
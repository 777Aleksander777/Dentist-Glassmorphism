"use client"

import { Button } from "../ui/button";
import Image from "next/image";


export default function Hero() {

    return (
        <section className="w-full max-w-[1900px] mx-auto px-[100px]">
            <div className="w-full min-h-[700px] flex gap-8 bg-white p-[50px] rounded-[30px]">
                <div className="w-full min-h-full mt-[50px] flex flex-col gap-8">
                    <h1 className="text-8xl font-bold">
                        Open wide to a world of smiles
                    </h1>
                    <div>
                        <Button className="hover:bg-primary bg-secondary">Book an appointment</Button>
                    </div>
                    <div className="mt-auto">
                        <div className="font-bold text-lg">
                            We are open
                        </div>
                        <div className="text-md">
                            From Monday to Friday
                        </div>
                        <div className="text-md">
                            10 am-19 pm
                        </div>
                    </div>
                </div>
                <div className="w-full min-h-full relative">
                    <Image className="w-full" src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6686420d0445fbb38236ab20_hero-image.avif"} alt="Hero tooth image" quality={100} width={100} height={100} style={{width: "100%", height: "auto"}}/>
                </div>
            </div>
            <div className="w-full max-w-[1800px] min-h-[125px] mx-auto mt-[50px] bg-primary py-[35px] px-[50px] rounded-[50px]">
                <div>

                </div>
            </div>
        </section>
    )
}
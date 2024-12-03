"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator"

export default function Benefits() {
     
    return (
        <section className="w-full max-w-[1900px] mx-auto mt-[150px] px-[50px]">
            <div className="w-full flex justify-center align-center items-center">
                <div className="w-1/3 px-8">
                    <h1 className="text-8xl font-bold text-primary mb-8">
                        Invest in your smile
                    </h1>
                    <p className="text-md font-bold ">
                        Your smile is one of your most valuable assets, and investing in its health and appearance is an investment in yourself.
                    </p>
                    <Button className="bg-secondary text-primary hover:bg-primary hover:text-secondary mt-16">
                        Contact with us
                    </Button>
                </div>
                <div className="w-1/3 px-8 flex justify-center">
                    <Image src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/667ceb10d78e0f7461f233c8_benefit-image.avif"} alt="Benefits Image" width={300} height={300}/>
                </div>
                <div className="w-1/3 px-8">
                    <div>
                        <ul className="list-disc list-inside marker:text-secondary">
                            <li className="text-2xl font-bold text-primary mb-4">
                                Prevention of dental issues
                            </li>
                        </ul>
                        <p className="text-lg">
                            Regular dental check-ups and cleanings help prevent dental problems such as tooth decay, gum disease, and oral infections.
                        </p>
                        <Separator className="bg-black my-4"/>
                    </div>
                    <div>
                        <ul className="list-disc list-inside marker:text-secondary">
                            <li className="text-2xl font-bold text-primary mb-4">
                                Maintaining oral health
                            </li>
                        </ul>
                        <p className="text-lg">
                            Good oral hygiene practices, including brushing, flossing, and regular dental visits, help maintain optimal oral health.
                        </p>
                        <Separator className="bg-black my-4"/>
                    </div>
                    <div>
                        <ul className="list-disc list-inside marker:text-secondary">
                            <li className="text-2xl font-bold text-primary mb-4">
                                Improved overall health
                            </li>
                        </ul>
                        <p className="text-lg">
                            Oral health is closely linked to overall health. Taking care of your oral health can contribute to better overall health and well-being.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
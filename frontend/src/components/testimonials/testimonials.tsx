"use client";

import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function Testimonials() {

    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    )

    return (
        <section className="w-full max-w-[1900px] mx-auto mt-[150px] px-[50px]">
            <div className="w-full rounded-[50px] bg-primary p-8 flex flex-col justify-center align-center items-center"> 
                <h3 className="text-8xl text-white text-center mt-[50px]">What our patients say</h3>
                <Carousel
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="w-full max-w-[1000px] relative mt-[50px]"
                    
                >
                    <CarouselContent className="ml-0">
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="mx-2 basis-1/3">
                            <div className="w-[300px] h-[300px] rounded-[30px] bg-white"> 

                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-secondary absolute b-0 w-[40px] h-[40px]"/>
                    <CarouselNext className="bg-secondary absolute b-0 w-[40px] h-[40px]"/>
                </Carousel>
            </div>
        </section>

    )
}
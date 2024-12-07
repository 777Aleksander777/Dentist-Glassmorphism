"use client"

import ServiceCard from "../ui/custom/serviceCard"


export default function Services() {

    return (
        <section className="w-full max-w-[1900px] mx-auto mt-[150px] px-[100px] relative">
            <div className="">
                <h2 className="text-6xl text-center font-bold text-primary mb-[50px]">
                    Our services
                </h2>
            </div>
            <div className="w-full flex flex-wrap justify-center align-center items-center gap-12">
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
        </section>
    )
}
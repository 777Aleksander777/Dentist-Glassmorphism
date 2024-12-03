"use client"

import { Button } from "../ui/button"
import CustomCard from "../ui/custom/card"

export default function Expertise() {


    return (
        <section className="w-full max-w-[1900px] mx-auto mt-[150px] px-[50px]">
            <div className="">
                <div className="mb-[50px] w-full flex justify-between align-center items-center">
                    <h2 className="font-bold text-8xl">
                        Our expertise
                    </h2>
                    <Button className="bg-secondary hover:bg-primary">
                        View all services
                    </Button>
                </div>
                <div className="w-full flex justify-between align-center items-center gap-6">
                    <CustomCard/>
                    <CustomCard/>
                    <CustomCard/>
                    <CustomCard/>
                </div>
            </div>
        </section>
    )
}
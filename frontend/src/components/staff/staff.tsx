"use client"

import StaffCard from "../ui/custom/staffCard"

export default function Staff() {

    return (
        <section className="w-full max-w-[1900px] mx-auto mt-[150px] z-[-1] px-[100px] relative">
            <div className="bg-white rounded-[50px] flex flex-col justify-center align-center items-center gap-12 p-12">
                <div className="mb-12">
                    <h2 className="text-6xl font-bold text-primary">
                        Our dental experts
                    </h2>
                </div>
                <div className="w-full flex justify-evenly ">
                    <div className="mt-[-50px]">
                        <StaffCard/>
                    </div>
                    <div>
                        <StaffCard/>
                    </div>
                    <div>
                        <StaffCard/>
                    </div>
                    <div className="mt-[-50px]">
                        <StaffCard/>
                    </div>
                </div>
            </div>
        </section>
    )
}
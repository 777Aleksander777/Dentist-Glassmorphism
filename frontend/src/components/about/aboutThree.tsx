"use client";

import Image from "next/image";

export default function AboutThree() {

    return (
        <section className="w-full max-w-[1900px] mx-auto mt-[-150px] z-[-1] px-[100px] relative">
            <div className="w-full bg-white rounded-[50px] pt-64 px-12 pb-12 flex justify-evenly align-center items-start">
                <div className="flex flex-col gap-4 align-start max-w-[250px]">
                    <h2 className="text-4xl font-bold text-primary">
                        Our mission
                    </h2>
                    <p>
                        Our mission is to deliver personalized, patient-centered dental care that exceeds our patients' expectations.
                    </p>
                </div>
                <div className="flex flex-col gap-4 align-ster max-w-[250px]">
                    <h2 className="text-4xl font-bold">
                        Our value
                    </h2>
                    <p className="">
                        Serve as the guiding principles that shape everything we do.
                    </p>
                    <ul className="list-disc list-inside marker:text-secondary">
                        <li className="text-lg font bold text-primary mb-4">
                            Integrity
                        </li>
                        <li className="text-lg font bold text-primary mb-4">
                            Excellence
                        </li>
                        <li className="text-lg font bold text-primary mb-4">
                            Continuous Improvement
                        </li>
                    </ul>
                </div>
                <div>
                    <Image className="max-w-[250px]" src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6684f84506805f8a6f41c23f_our-mission-image.avif"} alt="About Image" width={500} height={500}/>
                </div>
            </div>
        </section>
    )
}
import Image from "next/image";
import { Separator } from "../ui/separator";


export default function AboutTwo() {

    return (
        <section className="w-full max-w-[1900px] mx-auto mt-[150px] px-[100px] relative">
            <div className="w-[80%] mx-auto flex justify-between align-center items-center gap-4 bg-primary rounded-[50px] p-12">
                <div className="w-3/5">
                    <Image className="rounded-[50px]" src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6676a535983da61b62b153c1_about-image.avif"} alt="About Iamge" width={5000} height={5000}/>
                </div>
                <div className="w-1/3 flex flex-col justify-between align-start items-start">
                    <div className="mb-12">
                        <h4 className="text-6xl text-white mb-4">
                            Where skilled dentists deliver the best solutions
                        </h4>
                        <p className="text-md text-white">
                            We take pride in our team of skilled dentists who are dedicated to delivering the best possible solutions for your dental needs.
                        </p>
                    </div>
                    <div className="w-full">
                        <ul className="list-disc list-inside marker:text-secondary">
                            <li className="text-white text-lg">
                                Expertise you can trust
                                <Separator className="bg-white my-6"/>
                            </li>
                            <li className="text-white text-lg">
                                Advanced training
                                <Separator className="bg-white my-6"/>
                            </li>
                            <li className="text-white text-lg">
                                Patient-Centered care
                                <Separator className="bg-white my-6"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
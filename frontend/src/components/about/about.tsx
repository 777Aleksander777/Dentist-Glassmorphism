import Image from "next/image"
import { Button } from "../ui/button"

export default function About() {

    return (
        <section className="w-full max-w-[1900px] mx-auto mt-[300px] px-[50px] relative">
            <div className="w-full bg-white rounded-[50px] h-[600px]">

            </div>
            <div className="w-[85%] flex gap-8 bg-accent p-12 rounded-[50px] mx-auto h-[600px] absolute top-[-100px] left-[50%] translate-x-[-50%]">
                <div className="min-w-[530px] h-[611px] ml-[-130px] mb-[-50px]">
                    <Image src={"https://cdn.prod.website-files.com/66768138db6ea9da85e67429/6686420d4d668dbd46cd5a7c_about-image-01.avif"} alt="About Section Image" width={530} height={611} style={{width: "530px", height: "auto"}}/>
                </div>
                <div className="flex flex-col gap-6 justify-end items-start align-end">
                    <h1 className="text-8xl">
                        Smiles make the first impression
                    </h1>
                    <p className="text-md font-bold">
                        We are committed to providing exceptional dental care in a warm and welcoming environment. Our team of skilled professionals is dedicated to helping you achieve and maintain a healthy, beautiful smile for life.
                    </p>
                    <Button className="bg-white text-primary hover:bg-primary hover:text-white">
                        More about us
                    </Button>
                </div>
            </div>
        </section>
    )
}
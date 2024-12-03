"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function Info() {

    return (
        <section className="w-full max-w-[1900px] mx-auto mt-[150px] px-[50px]">
            <div className="text-8xl font-bold text-primary text-center mb-[50px]">
                Dental wellness metrics
            </div>
            <div className="w-[85%] mx-auto flex justify-around align-center items-center">
                <Card className="bg-white min-w-[250px] h-[150px] rounded-[30px]">
                    <CardContent className="w-full h-full flex flex-col justify-evenly p-6">
                        <CardTitle className="text-secondary text-md text-center">
                            Qualified help
                        </CardTitle>
                        <CardFooter className="text-primary text-4xl font-bold text-center flex items-center align-center justify-center p-0">
                            100%
                        </CardFooter>
                    </CardContent>
                </Card>
                <Card className="bg-white min-w-[250px] h-[150px] rounded-[30px]">
                    <CardContent className="w-full h-full flex flex-col justify-evenly p-6">
                        <CardFooter className="text-primary text-4xl font-bold text-center flex items-center align-center justify-center p-0">
                            24/7
                        </CardFooter>
                        <CardTitle className="text-secondary text-md text-center">
                            Emergency
                        </CardTitle>
                    </CardContent>
                </Card>
                <Card className="bg-white min-w-[250px] h-[150px] rounded-[30px]">
                    <CardContent className="w-full h-full flex flex-col justify-evenly p-6">
                        <CardTitle className="text-secondary text-md text-center">
                            Avg. rating
                        </CardTitle>
                        <CardFooter className="text-primary text-4xl font-bold text-center flex items-center align-center justify-center p-0">
                            4.98
                        </CardFooter>
                    </CardContent>
                </Card>
                <Card className="bg-white min-w-[250px] h-[150px] rounded-[30px]">
                    <CardContent className="w-full h-full flex flex-col justify-evenly p-6">
                        <CardFooter className="text-primary text-4xl font-bold text-center flex items-center align-center justify-center p-0">
                            11+
                        </CardFooter>
                        <CardTitle className="text-secondary text-md text-center">
                            Years of experience
                        </CardTitle>
                    </CardContent>
                </Card>
                
            </div>
        </section> 
    )
}
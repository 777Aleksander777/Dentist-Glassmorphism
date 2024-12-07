import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function FAQ() {

    return (
        // <section className="w-full max-w-[1900px] mx-auto mt-[150px] z-[-1] px-[100px] relative">
        // </section>
        <section className="w-full max-w-[1800px] mx-auto mt-[150px] px-[100px] relative">
            <h2 className="text-primary text-6xl font-bold text-center mb-[100px]">
                Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="w-full flex flex-wrap justify-center align-start items-start gap-8">
                <AccordionItem value="item-1" className="w-full max-w-[650px] bg-white rounded-[30px] py-2 px-4">
                    <AccordionTrigger className="text-xl text-pirmary font-bold">
                        Is it styled?
                    </AccordionTrigger>
                    <AccordionContent className="text-primary text-lg">
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="w-full max-w-[650px] bg-white rounded-[30px] py-2 px-4">
                    <AccordionTrigger className="text-xl text-pirmary font-bold">
                        Is it styled?
                    </AccordionTrigger>
                    <AccordionContent className="text-primary text-lg">
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="w-full max-w-[650px] bg-white rounded-[30px] py-2 px-4">
                    <AccordionTrigger className="text-xl text-pirmary font-bold">
                        Is it styled?
                    </AccordionTrigger>
                    <AccordionContent className="text-primary text-lg">
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="w-full max-w-[650px] bg-white rounded-[30px] py-2 px-4">
                    <AccordionTrigger className="text-xl text-pirmary font-bold">
                        Is it styled?
                    </AccordionTrigger>
                    <AccordionContent className="text-primary text-lg">
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="w-full max-w-[650px] bg-white rounded-[30px] py-2 px-4">
                    <AccordionTrigger className="text-xl text-pirmary font-bold">
                        Is it styled?
                    </AccordionTrigger>
                    <AccordionContent className="text-primary text-lg">
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="w-full max-w-[650px] bg-white rounded-[30px] py-2 px-4">
                    <AccordionTrigger className="text-xl text-pirmary font-bold">
                        Is it styled?
                    </AccordionTrigger>
                    <AccordionContent className="text-primary text-lg">
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}
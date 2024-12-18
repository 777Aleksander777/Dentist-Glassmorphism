"use client";

import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Textarea } from "@/components/ui/textarea"
import { motion, useInView } from "framer-motion";
import React from "react";
import { getBuisnessData } from "@/data/loader";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { pl } from "date-fns/locale";

const formSchema = z.object({
    firstName: z.string().min(3).max(50),
    lastName: z.string().min(2).max(50),
    emailAddress: z.string().min(2).max(50),
    phoneNumber: z.string().min(2).max(50),
    date: z.date({
        required_error: "A date of birth is required.",
    }),
    service: z.string().min(1, { message: "Please select an service to display." }),
    message: z.string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
})

export default function BookAppointment() {

    const [workingHours, setWorkingHours] = React.useState("");
    const [contact, setContact] = React.useState("");
    const [address, setAddress] = React.useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: "",
          lastName: "",
          emailAddress: "",
          phoneNumber: "",
          service: "",
          message: "",
        },
    })

    React.useEffect(() => {
        async function getData() {
            try {
                const res: {data: {footer: {address: string, workingHours: string, contact: string}}} = await getBuisnessData();
                setWorkingHours(res.data.footer.workingHours);
                setContact(res.data.footer.contact);
                setAddress(res.data.footer.address);

            } catch (error) {
                console.log("Cannot get data! " + error)
            }
        }
        getData();
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // sendEmail({email: "email@gmail.com",title: "hello",message: "world!!!"})
        try {
            const response = await fetch('/api/send-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: values.emailAddress,
                title: "Wiadomość email do Twojej strony",
                message: values.message,
              }),
            });
        
            if (response.ok) {
              console.log('Email wysłany pomyślnie!');
            } else {
              console.error('Błąd podczas wysyłania emaila.');
            }
          } catch (error) {
            console.error(`Błąd: ${error}`);
          }
        console.log(values)
    }

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            initial={{ x: "500px", opacity: 0.1, }} // Start poza ekranem
            animate={isInView ? { x: 0, opacity: 1, } : {}} // Animuj tylko gdy widoczny
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full py-12 px-8 bg-white flex flex-col gap-8 justify-center align-center items-center"
            >
                <h2 className="text-6xl text-primary font-bold">
                    Umów się na wizytę
                </h2>
                <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-8 ">
                                <div className="flex flex-wrap justify-center align-center items-center gap-8">
                                    <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input className="bg-accent md:w-[250px] w-[90vw] h-[50px] rounded-[5px] border-none placeholder:text-md placeholder:font-bold" placeholder="Imię" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input className="bg-accent md:w-[250px] w-[90vw] h-[50px] rounded-[5px] border-none placeholder:text-md placeholder:font-bold" placeholder="Nazwisko" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                </div>
                                <div className="flex flex-wrap justify-center align-center items-center gap-8">
                                    <FormField
                                    control={form.control}
                                    name="emailAddress"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input className="bg-accent md:w-[250px] w-[90vw] h-[50px] rounded-[5px] border-none placeholder:text-md placeholder:font-bold" placeholder="Email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input className="bg-accent md:w-[250px] w-[90vw] h-[50px] rounded-[5px] border-none placeholder:text-md placeholder:font-bold" placeholder="Numer tel" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                </div>
                                <div className="flex flex-wrap justify-center align-center items-center gap-8">
                                    <FormField
                                    control={form.control}
                                    name="date"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "bg-accent md:w-[250px] w-[90vw] h-[50px] rounded-[5px] border-none placeholder:text-md placeholder:font-bold",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP", { locale: pl})
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-100" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date < new Date() || date > new Date("2030-01-01")
                                                        }
                                                        initialFocus
                                                        />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name="service"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="bg-accent md:w-[250px] w-[90vw] h-[50px] rounded-[5px] border-none placeholder:text-md placeholder:font-bold">
                                                        <SelectValue placeholder="Wybierz usługę" />
                                                    </SelectTrigger>   
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="service 1">Service 1</SelectItem>
                                                    <SelectItem value="service 2">Service 2</SelectItem>
                                                    <SelectItem value="service 3">Service 3</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormControl>
                                            <Textarea
                                            placeholder="Wiadomość"
                                            className="resize-none md:w-full w-[90vw] p-4 rounded-[5px] border-none bg-accent min-h-[150px] placeholder:text-md placeholder:font-bold"
                                            {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                <Button className="bg-secondary text-primary hover:bg-white w-fit h-[50px]" type="submit">Wyślij</Button>
                            </form>
                        </Form>
            </motion.div>
    )
}
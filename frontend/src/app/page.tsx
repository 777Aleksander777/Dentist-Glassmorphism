import { Button } from "@/components/ui/button";
// import { motion } from "motion/react"
import * as motion from "motion/react-client"

export default function Home() {
  return (
    <main className="">
      <Button variant={"default"}>View all services</Button>
      <Button variant={"secondary"} size={"default"}>View all services</Button>
      <Button variant={"destructive"}>View all services</Button>
      <Button variant={"ghost"}>View all services</Button>
      <Button variant={"link"}>View all services</Button>
      <Button variant={"outline"}>View all services</Button>
    </main>
  );
}

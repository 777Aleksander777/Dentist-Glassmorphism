import About from "@/components/about/about";
import Benefits from "@/components/benefits/benefits";
import Expertise from "@/components/expertise/expertise";
import Hero from "@/components/hero/hero";
import Info from "@/components/info/info";
import Testimonials from "@/components/testimonials/testimonials";
import { Button } from "@/components/ui/button";
// import { motion } from "motion/react"
import * as motion from "motion/react-client"

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Expertise/>
      <About/>
      <Info/>
      <Testimonials/>
      <Benefits/>
    </main>
  );
}

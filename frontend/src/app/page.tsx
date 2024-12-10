import About from "@/components/about/about";
import AboutFour from "@/components/about/aboutFour";
import AboutThree from "@/components/about/aboutThree";
import AboutTwo from "@/components/about/aboutTwo";
import Benefits from "@/components/benefits/benefits";
import BenefitsTwo from "@/components/benefits/benefitsTwo";
import Expertise from "@/components/expertise/expertise";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/hero/hero";
import Info from "@/components/info/info";
import Services from "@/components/services/services";
import Staff from "@/components/staff/staff";
import Testimonials from "@/components/testimonials/testimonials";
import { Button } from "@/components/ui/button";
import { getHome } from "@/data/loader";
// import { motion } from "motion/react"
import * as motion from "motion/react-client"


const blockComponents = {
  "layout.hero": Hero,
  "layout.about": About,
  "layout.about-two": AboutTwo,
  "layout.about-three": AboutThree,
  "layout.about-four": AboutFour,
  "layout.benefits-one": Benefits,
  "layout.benefits-two": BenefitsTwo,
  "layout.staff": Staff,
  "layout.services": Services,
  "layout.expertise": Expertise,
  "layout.faq": FAQ,
}

function blockRenderer(block: any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  return Component ?  <Component key={`${block?.id} ${block?.title}`} data={block}/> : null
}

export default async function Home() {
  
  let data;
  
  try {
    data = await getHome();
    console.dir(data.data, { depth: null });
  } catch (error) {
    console.error("Cannot get Home Page data!", error);
    throw error; // Opcjonalnie, aby komponent wyświetlił błąd.
  }

  return (
    <main className="">
      {/* <Hero/>
      <Expertise/>
      <About/>
      <Info/>
      <Testimonials/>
      <Benefits/> */}
      {data?.data?.blocks.map(blockRenderer)}
    </main>
  );
}

import About from "@/components/about/about";
import AboutFour from "@/components/about/aboutFour";
import AboutThree from "@/components/about/aboutThree";
import AboutTwo from "@/components/about/aboutTwo";
import Benefits from "@/components/benefits/benefits";
import BenefitsTwo from "@/components/benefits/benefitsTwo";
import Expertise from "@/components/expertise/expertise";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/hero/hero";
import InfoOne from "@/components/info/info";
import Services from "@/components/services/services";
import Staff from "@/components/staff/staff";
import { getHome } from "@/data/loader";
import Testimonials from "@/components/testimonials/testimonials";
import { Button } from "@/components/ui/button";
// import { motion } from "motion/react"
import * as motion from "motion/react-client"
import InfoTwo from "@/components/info/infoTwo";
import BookAppointment from "@/components/contact/bookAppointment";
import Test from "@/components/text";
import Contact from "@/components/contact/contact";


const blockComponents = {
  "layout.gallery-section": Benefits,
  "layout.info-section": About,
  "layout.cards-section": Services,
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
    <main className="pt-[100px]">
      {/* <Hero/>
      <Expertise/>
      <About/>
      <Benefits/> */}
      <Hero data={{tytul: data.data?.title, opis: data.data?.desc, video: data.data?.video}}/>
      {data?.data?.blocks.map(blockRenderer)}
      {/* <Testimonials/>
      <InfoOne/>
      <InfoTwo/>
      <BookAppointment/> */}
      <Contact/>
    </main>
  );
}

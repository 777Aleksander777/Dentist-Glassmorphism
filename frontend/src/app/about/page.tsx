
import AboutThree from "@/components/about/aboutThree"
import AboutTwo from "@/components/about/aboutTwo"
import BenefitsTwo from "@/components/benefits/benefitsTwo"
import HeroTwo from "@/components/hero/heroTwo"
import Info from "@/components/info/infoTwo"
import Services from "@/components/services/services"
import Staff from "@/components/staff/staff"


export default function AboutPage() {

    return (
        <>
            <HeroTwo/>
            <Info/>
            <AboutTwo/>
            <AboutThree/>
            <Services/>
            <Staff/>
            <BenefitsTwo/>
        </>
    )
}
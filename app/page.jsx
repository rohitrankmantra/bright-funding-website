import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import FundingSolutions from "@/components/home/FundingSolutions";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <Services />
      <About />
      <FundingSolutions />
      <Testimonials />
      <CTASection />
      <Contact />
    </main>
  );
}

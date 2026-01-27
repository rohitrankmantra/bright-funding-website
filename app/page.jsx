import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import FundingSolutions from "@/components/FundingSolutions";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <About />
      <FundingSolutions />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}

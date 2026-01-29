"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiCheck, HiClock, HiCash , HiBadgeCheck ,HiPhone,HiCheckCircle} from "react-icons/hi";
import { servicesData } from "@/lib/services-data";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-muted overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Funding Solutions for{" "}
              <span className="text-primary">Every Business Need</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From merchant cash advances to SBA loans, we offer a comprehensive
              range of funding options designed to help your business thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Apply Now
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:bg-muted transition-all border border-border"
              >
                Talk to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`} className="block group">
                  <div className="bg-muted rounded-2xl p-6 h-full border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {service.fullDescription.slice(0, 150)}...
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="bg-background rounded-lg p-2 text-center">
                            <HiCash className="w-4 h-4 text-primary mx-auto mb-1" />
                            <span className="text-xs text-muted-foreground block">
                              Up to
                            </span>
                            <span className="text-sm font-semibold text-foreground">
                              {service.fundingRange.split(" - ")[1]}
                            </span>
                          </div>
                          <div className="bg-background rounded-lg p-2 text-center">
                            <HiClock className="w-4 h-4 text-primary mx-auto mb-1" />
                            <span className="text-xs text-muted-foreground block">
                              Approval
                            </span>
                            <span className="text-sm font-semibold text-foreground">
                              {service.approvalTime.split("-")[0]}
                            </span>
                          </div>
                          <div className="bg-background rounded-lg p-2 text-center">
                            <HiCheck className="w-4 h-4 text-primary mx-auto mb-1" />
                            <span className="text-xs text-muted-foreground block">
                              Term
                            </span>
                            <span className="text-sm font-semibold text-foreground">
                              {service.termLength.split("-")[0]}
                            </span>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                          Learn More
                          <HiArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
  <section className="py-20 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-0.5 bg-primary" />
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Bright Funding
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          The Smarter Way to Fund Your Business
        </h2>

        <p className="text-muted-foreground mb-8">
          We understand that every business is unique. That is why we offer
          personalized funding solutions tailored to your specific needs,
          with transparent terms and dedicated support every step of the way.
        </p>

        {/* Icon Feature List */}
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { text: "Same-day funding available", icon: HiClock },
            { text: "No hidden fees or surprises", icon: HiCheck },
            { text: "Dedicated account manager", icon: HiCash },
            { text: "Flexible repayment options", icon: HiArrowRight },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-background rounded-xl p-4 border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium text-sm sm:text-base">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Stats */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {[
            { value: "$50M+", label: "Funded to Date" },
            { value: "5,000+", label: "Businesses Helped" },
            { value: "24hr", label: "Avg. Approval Time" },
            { value: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-5 sm:p-6 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <span className="block text-3xl sm:text-4xl font-bold text-primary">
                {stat.value}
              </span>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</section>


     {/* CTA Section */}
        <section className="py-20 lg:py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/cta-background.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-primary/30" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <HiBadgeCheck className="w-5 h-5 text-accent" />
                <span className="text-white/90 text-sm font-medium">Trusted by 5,000+ Businesses</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Apply now and get a funding decision within hours. No obligation, no impact on your credit.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Apply Now - It&apos;s Free
                  <HiArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+18881234567"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <HiPhone className="w-5 h-5" />
                  (888) 123-4567
                </a>
              </div>
              <div className="flex items-center justify-center gap-6 mt-10 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <HiCheckCircle className="w-4 h-4 text-accent" />
                  No Credit Impact
                </span>
                <span className="flex items-center gap-2">
                  <HiCheckCircle className="w-4 h-4 text-accent" />
                  5 Min Application
                </span>
                <span className="flex items-center gap-2">
                  <HiCheckCircle className="w-4 h-4 text-accent" />
                  24hr Funding
                </span>
              </div>
            </motion.div>
          </div>
        </section>
    </main>
  );
}

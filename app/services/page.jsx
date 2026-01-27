"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiCheck, HiClock, HiCash } from "react-icons/hi";
import { servicesData } from "@/lib/services-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

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
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
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

              <div className="space-y-4">
                {[
                  "Same-day funding available",
                  "No hidden fees or surprises",
                  "Dedicated account manager",
                  "Flexible repayment options",
                  "Bad credit? We can help",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <HiCheck className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-2xl p-6 text-center shadow-lg">
                  <span className="text-4xl font-bold text-primary">$50M+</span>
                  <p className="text-muted-foreground mt-2">Funded to Date</p>
                </div>
                <div className="bg-background rounded-2xl p-6 text-center shadow-lg mt-8">
                  <span className="text-4xl font-bold text-primary">5,000+</span>
                  <p className="text-muted-foreground mt-2">Businesses Helped</p>
                </div>
                <div className="bg-background rounded-2xl p-6 text-center shadow-lg">
                  <span className="text-4xl font-bold text-primary">24hr</span>
                  <p className="text-muted-foreground mt-2">Avg. Approval Time</p>
                </div>
                <div className="bg-background rounded-2xl p-6 text-center shadow-lg mt-8">
                  <span className="text-4xl font-bold text-primary">98%</span>
                  <p className="text-muted-foreground mt-2">Satisfaction Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Apply now and get a decision within 24 hours. No obligation, no
              impact on your credit score.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
              >
                Apply Now
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+18881234567"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                Call (888) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

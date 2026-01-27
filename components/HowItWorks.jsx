"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiPencilAlt, HiSearch, HiCurrencyDollar, HiTrendingUp, HiArrowRight } from "react-icons/hi";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    icon: HiPencilAlt,
    title: "Apply Online",
    description: "Complete our simple application in just 5 minutes. No lengthy paperwork required.",
  },
  {
    number: "02",
    icon: HiSearch,
    title: "Quick Review",
    description: "Our team reviews your application within hours. Most decisions made same day.",
  },
  {
    number: "03",
    icon: HiCurrencyDollar,
    title: "Get Funded",
    description: "Once approved, funds are deposited directly to your account within 24 hours.",
  },
  {
    number: "04",
    icon: HiTrendingUp,
    title: "Grow Your Business",
    description: "Use your funding to expand operations and take your business to new heights.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate each step
      stepsRef.current.forEach((step, index) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.15,
          }
        );
      });

      // Animate the connecting line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Simple Process
            </span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get funded in just four simple steps. No complicated processes, no hidden surprises.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-primary/20 origin-left rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
          </div>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                ref={(el) => (stepsRef.current[index] = el)}
                className="relative"
              >
                {/* Card */}
                <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 text-center group">
                  {/* Step Number Circle */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 mx-auto mb-6">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30 group-hover:border-primary/50 transition-colors" />
                    {/* Inner circle */}
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-primary-foreground font-bold text-xl">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (mobile/tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <HiArrowRight className="w-6 h-6 text-primary rotate-90 sm:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1"
          >
            Start Your Application
            <HiArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const progressBars = [
  { label: "Business Loans", percentage: 92 },
  { label: "Merchant Cash Advance", percentage: 87 },
  { label: "Equipment Financing", percentage: 78 },
  { label: "Working Capital", percentage: 95 },
];

function AnimatedProgressBar({ label, percentage, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-foreground">{label}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5, duration: 0.3 }}
          className="inline-flex items-center justify-center px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-md"
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.2, ease: "easeOut", delay: delay }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side - Lendiz Style with Circular Crop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Circular Image Container */}
            <div className="relative">
              {/* Decorative circle behind */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[60%_40%_40%_60%/40%_60%_40%_60%] bg-accent/30 blur-sm" />
              
              {/* Main Image with organic shape */}
              <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-[60%_40%_40%_60%/40%_60%_40%_60%] border-8 border-background shadow-2xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Bright Funding Solution team helping business owners"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Years Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-2 lg:right-4 bg-card rounded-2xl p-5 shadow-xl border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-2xl">10+</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">Years</div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute top-1/2 -left-8 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-accent/40" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-wider">
                What We Do
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
              Dedicated To Serving You
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our mission is to serve you with honesty, speed, and care at every stage of your funding journey. We understand the challenges small businesses face, and we are here to provide solutions that work.
            </p>

            {/* Progress Bars */}
            <div className="space-y-4">
              {progressBars.map((bar, index) => (
                <AnimatedProgressBar
                  key={bar.label}
                  label={bar.label}
                  percentage={bar.percentage}
                  delay={index * 0.15}
                />
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Learn More About Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

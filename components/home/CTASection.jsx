"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiPhone, HiCheckCircle, HiCash, HiUserGroup, HiLightningBolt, HiChartBar } from "react-icons/hi";
import Image from "next/image";

const benefits = [
  "No Hidden Fees",
  "Same-Day Approval",
  "Dedicated Support",
  "Flexible Terms",
];

export default function CTASection() {
  return (
    <section id="apply" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-background.jpg"
          alt="Business funding background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 border border-primary-foreground/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-125 h-125 border border-primary-foreground/20 rounded-full translate-x-1/3" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 border border-primary-foreground/20 rounded-full translate-y-1/2" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-primary-foreground">
                Get Started Today
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight text-balance mb-6">
              Ready to Fuel Your Business Growth?
            </h2>

            {/* Subtext */}
            <p className="text-lg text-primary-foreground/80 max-w-xl mb-8 leading-relaxed">
              Join thousands of business owners who have trusted us with their funding needs. Apply now and get approved in as little as 24 hours.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <HiCheckCircle className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-primary-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-base hover:bg-accent/90 transition-all shadow-xl"
              >
                Apply Now
                <HiArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full font-bold text-base border-2 border-primary-foreground/30 hover:border-primary-foreground/50 transition-all"
              >
                <HiPhone className="w-5 h-5" />
                Call Us Now
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "$50M+", label: "Total Funded", icon: HiCash },
              { value: "1000+", label: "Happy Clients", icon: HiUserGroup },
              { value: "24hrs", label: "Avg. Approval", icon: HiLightningBolt },
              { value: "98%", label: "Success Rate", icon: HiChartBar },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/20 hover:border-primary-foreground/40 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-accent mb-3 mx-auto" />
                <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60L48 52.5C96 45 192 30 288 22.5C384 15 480 15 576 20C672 25 768 35 864 40C960 45 1056 45 1152 42.5C1248 40 1344 35 1392 32.5L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
}

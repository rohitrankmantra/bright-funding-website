"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiPhone, HiShieldCheck, HiClock, HiCurrencyDollar } from "react-icons/hi";
import Image from "next/image";

const features = [
  { icon: HiShieldCheck, text: "98% Approval Rate" },
  { icon: HiClock, text: "Same-Day Funding" },
  { icon: HiCurrencyDollar, text: "Up to $5M Available" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/20 border border-accent/30 rounded-full mb-8"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-foreground">
                Trusted by 1000+ Businesses Nationwide
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.1] text-balance">
              Fast Business
              <span className="block text-primary mt-2">Funding Solutions</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Get the capital your business needs in as little as 24 hours. No lengthy applications, no hidden fees, just straightforward funding.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#apply"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
              >
                Get Started Now
                <HiArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-card text-foreground rounded-full font-bold text-base border-2 border-border hover:border-primary/40 transition-all"
              >
                <HiPhone className="w-5 h-5 text-primary" />
                (888) 123-4567
              </motion.a>
            </div>

            {/* Feature Pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image - Lendiz Style with Circular Crop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Circular Image Container */}
            <div className="relative">
              {/* Decorative circle behind */}
              <div className="absolute -top-6 -right-6 w-full h-full rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-accent/20 blur-sm" />
              
              {/* Main Image with organic shape */}
              <div className="relative aspect-square max-w-lg mx-auto overflow-hidden rounded-[40%_60%_60%_40%/60%_40%_60%_40%] border-8 border-background shadow-2xl">
                <Image
                  src="/images/hero-business.jpg"
                  alt="Business professionals discussing funding solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Stats Card - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 lg:-left-8 bg-card rounded-2xl p-5 shadow-xl border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xl">$50M</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">Funded</div>
                    <div className="text-sm text-muted-foreground">This Year Alone</div>
                  </div>
                </div>
              </motion.div>

              {/* Experience Badge - Top Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-2 right-4 lg:right-0 bg-primary text-primary-foreground rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-xs font-medium opacity-90">Years Exp.</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--muted))" fillOpacity="0.3"/>
        </svg>
      </div>
    </section>
  );
}

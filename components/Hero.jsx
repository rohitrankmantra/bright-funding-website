"use client";

import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiPhone,
  HiShieldCheck,
  HiClock,
  HiCurrencyDollar,
} from "react-icons/hi";
import Image from "next/image";

const features = [
  { icon: HiShieldCheck, text: "98% Approval Rate" },
  { icon: HiClock, text: "Same-Day Funding" },
  { icon: HiCurrencyDollar, text: "Up to $5M Available" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-125 h-125 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-87.5 h-87.5 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/20 border border-accent/30 rounded-full mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold">
                Trusted by 1000+ Businesses Nationwide
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1]">
              Fast Business
              <span className="block text-primary mt-2">
                Funding Solutions
              </span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-lg">
              Get the capital your business needs in as little as 24 hours. No lengthy applications, no hidden fees.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#apply"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                Get Started Now
                <HiArrowRight />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+18881234567"
                className="px-8 py-4 bg-card rounded-full font-bold flex items-center justify-center gap-2 border"
              >
                <HiPhone className="text-primary" />
                (888) 123-4567
              </motion.a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.text}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="px-4 py-2 bg-muted rounded-full flex items-center gap-2"
                >
                  <f.icon className="text-primary" />
                  <span className="text-sm font-medium">{f.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md sm:max-w-lg">
              <div className="absolute -top-6 -right-6 w-full h-full rounded-[40%_60%_60%_40%] bg-accent/20 blur-sm" />

              <div className="relative aspect-square overflow-hidden rounded-[40%_60%_60%_40%] border-8 border-background shadow-2xl">
                <Image
                  src="/images/hero-business.jpg"
                  alt="Business funding"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* FUNDING STAT – RESPONSIVE */}
              <motion.div
                className="absolute bottom-4 left-4 sm:-bottom-4 sm:-left-4 lg:-left-8 bg-card rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl border"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-lg">
                      $50M
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-lg">
                      Funded
                    </div>
                    <div className="text-xs text-muted-foreground">
                      This Year
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* EXPERIENCE BADGE – RESPONSIVE */}
              <motion.div
                className="absolute top-4 right-4 sm:-top-2 sm:right-4 lg:right-0 bg-primary text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold">
                    10+
                  </div>
                  <div className="text-[10px] sm:text-xs opacity-90">
                    Years Exp.
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

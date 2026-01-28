"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { HiLightningBolt, HiDocumentText, HiClipboardCheck, HiUserGroup } from "react-icons/hi";
import { FaFileContract, FaDollarSign, FaAward, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: HiLightningBolt,
    title: "Same-Day Funding",
    description: "Get approved and funded within 24 hours. No waiting weeks for capital.",
    color: "bg-primary",
  },
  {
    icon: HiDocumentText,
    title: "Simple Application",
    description: "Our streamlined process takes just minutes. No complex paperwork.",
    color: "bg-accent",
  },
  {
    icon: HiClipboardCheck,
    title: "Minimal Documents",
    description: "Basic business documents are all you need to get started.",
    color: "bg-primary",
  },
  {
    icon: HiUserGroup,
    title: "Dedicated Support",
    description: "Work directly with experienced funding specialists who care.",
    color: "bg-accent",
  },
];

const stats = [
  { 
    value: 18264, 
    suffix: "+", 
    label: "Loans Increase", 
    prefix: "",
    icon: FaFileContract,
  },
  { 
    value: 328, 
    suffix: "k", 
    label: "Project Done", 
    prefix: "",
    icon: FaDollarSign,
  },
  { 
    value: 100, 
    suffix: "%", 
    label: "Happy Clients", 
    prefix: "",
    icon: FaAward,
  },
  { 
    value: 50, 
    suffix: "M+", 
    label: "Total Funded", 
    prefix: "$",
    icon: FaUsers,
  },
];

function AnimatedCounter({ value, suffix, prefix, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden">
      {/* Stats Section - Blue/Teal Background like Lendiz */}
      <div className="bg-[#0B7077] py-16 lg:py-20 relative">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 lg:gap-5"
              >
                {/* Icon Box - Lendiz Style */}
                <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-accent" />
                </div>
                
                {/* Number and Label */}
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white">
                      <AnimatedCounter 
                        value={stat.value} 
                        suffix="" 
                        prefix={stat.prefix}
                      />
                    </span>
                    <span className="text-lg lg:text-2xl font-bold text-accent">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-white/80 font-medium text-sm lg:text-base mt-1">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="py-20 lg:py-28 bg-muted/50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

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
                Why Choose Us
              </span>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
              The Smart Choice for Business Funding
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine speed, simplicity, and transparency to help your business thrive.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 text-center"
              >
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto rounded-2xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-bold text-muted-foreground">0{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

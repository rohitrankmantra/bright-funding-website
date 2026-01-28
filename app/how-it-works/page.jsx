"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  HiPencilAlt,
  HiSearch,
  HiCurrencyDollar,
  HiTrendingUp,
  HiArrowRight,
  HiCheckCircle,
  HiClock,
  HiShieldCheck,
  HiUserGroup,
  HiDocumentText,
  HiPhone,
  HiLightningBolt,
  HiBadgeCheck,
  HiStar,
} from "react-icons/hi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    icon: HiPencilAlt,
    title: "Apply Online",
    description: "Complete our simple application in just 5 minutes. No lengthy paperwork or complicated forms required.",
    details: [
      "Basic business information",
      "Monthly revenue details",
      "Funding amount needed",
      "Owner information",
    ],
    color: "bg-primary",
  },
  {
    number: "02",
    icon: HiDocumentText,
    title: "Submit Documents",
    description: "Upload your last 3 months of bank statements. That's all we need to review your application.",
    details: [
      "3 months bank statements",
      "Business license (if available)",
      "No tax returns needed",
      "Secure upload portal",
    ],
    color: "bg-[#0B7077]",
  },
  {
    number: "03",
    icon: HiSearch,
    title: "Quick Review",
    description: "Our team reviews your application within hours. Most decisions are made the same business day.",
    details: [
      "Same-day decisions",
      "Dedicated account manager",
      "Multiple offer options",
      "Clear terms explained",
    ],
    color: "bg-accent",
  },
  {
    number: "04",
    icon: HiCurrencyDollar,
    title: "Get Funded",
    description: "Once approved, funds are deposited directly to your account within 24 hours or less.",
    details: [
      "Direct bank deposit",
      "Funds within 24 hours",
      "No hidden fees",
      "Start using immediately",
    ],
    color: "bg-primary",
  },
];



const faqs = [
  {
    question: "How long does the application take?",
    answer: "Our online application takes just 5 minutes to complete. Simply provide basic business information and funding needs.",
  },
  {
    question: "What documents do I need?",
    answer: "In most cases, we only need your last 3 months of business bank statements. No tax returns or financial statements required.",
  },
  {
    question: "How fast can I get funded?",
    answer: "Once approved, funds can be deposited into your account within 24 hours. Some businesses receive funding the same day.",
  },
  {
    question: "What credit score do I need?",
    answer: "We work with businesses of all credit profiles. While credit is considered, we focus more on your business revenue and performance.",
  },
  {
    question: "Are there any upfront fees?",
    answer: "No. We never charge upfront fees or application fees. You only pay when you receive and accept funding.",
  },
  {
    question: "Can I pay off early?",
    answer: "Yes! Many of our programs offer discounts for early payoff. Ask your account manager about early payment options.",
  },
];

const stats = [
  { value: "24hrs", label: "Average Funding Time" },
  { value: "5min", label: "Application Time" },
  { value: "95%", label: "Approval Rate" },
  { value: "$500K", label: "Max Funding Amount" },
];

export default function HowItWorksPage() {
  const stepsRef = useRef([]);
  const timelineRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, index) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative bg-muted/30 py-20 lg:py-28 overflow-hidden">
          <div className="absolute top-0 right-0 w-150 h-150 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-100 h-100 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-0.5 bg-primary" />
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">
                    Simple Process
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
                  How It{" "}
                  <span className="text-primary">Works</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  Getting the funding your business needs has never been easier. Our streamlined 
                  4-step process gets you from application to funded in as little as 24 hours.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center p-4 bg-background rounded-xl border border-border">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Start Application
                    <HiArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+18881234567"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background border-2 border-border text-foreground rounded-full font-semibold hover:border-primary/30 transition-all"
                  >
                    <HiPhone className="w-5 h-5" />
                    Call Us Now
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-[40px] rotate-6" />
                  <Image
                    src="https://images.pexels.com/photos/325154/pexels-photo-325154.jpeg"
                    alt="Business funding process"
                    width={600}
                    height={500}
                    className="relative rounded-[40px] object-cover shadow-2xl"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-5 shadow-xl border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                        <HiCheckCircle className="w-7 h-7 text-green-500" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground">95% Approval</div>
                        <div className="text-sm text-muted-foreground">Success Rate</div>
                      </div>
                    </div>
                  </div>
                  {/* Floating Badge 2 */}
                  <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-2">
                      <HiLightningBolt className="w-6 h-6" />
                      <span className="font-bold">24hr Funding</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Steps Timeline Section */}
        <section className="py-20 lg:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-primary" />
                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                  4 Easy Steps
                </span>
                <div className="w-12 h-0.5 bg-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
                Your Path to Business Funding
              </h2>
              <p className="text-lg text-muted-foreground">
                From application to funding in as little as 24 hours. Here is how our simple process works.
              </p>
            </motion.div>

            {/* Timeline Steps */}
            <div className="relative">
              {/* Vertical Line */}
              <div
                ref={timelineRef}
                className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2"
              />

              <div className="space-y-12 lg:space-y-0">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    ref={(el) => (stepsRef.current[index] = el)}
                    className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                      index % 2 === 0 ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`${
                        index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:order-2 lg:pl-16"
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 mb-4 ${
                          index % 2 === 0 ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <span className={`text-sm font-bold ${step.color === "bg-accent" ? "text-accent" : step.color === "bg-[#0B7077]" ? "text-[#0B7077]" : "text-primary"}`}>
                          STEP {step.number}
                        </span>
                        <div className={`w-8 h-0.5 ${step.color}`} />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className={`space-y-3 ${index % 2 === 0 ? "lg:ml-auto lg:max-w-xs" : "max-w-xs"}`}>
                        {step.details.map((detail) => (
                          <li key={detail} className={`flex items-center gap-3 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                            <HiCheckCircle className={`w-5 h-5 shrink-0 ${step.color === "bg-accent" ? "text-accent" : step.color === "bg-[#0B7077]" ? "text-[#0B7077]" : "text-primary"}`} />
                            <span className="text-sm text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Circle Node */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Card Visual */}
                    <div
                      className={`mt-8 lg:mt-0 ${
                        index % 2 === 0 ? "lg:order-2 lg:pl-16" : "lg:pr-16"
                      }`}
                    >
                      <div className={`relative p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 group`}>
                        <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 lg:hidden`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-6xl font-bold text-muted/20 absolute top-4 right-6">
                          {step.number}
                        </div>
                        <div className="space-y-4 relative">
                          {step.details.map((detail, i) => (
                            <div key={detail} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                              <div className={`w-8 h-8 rounded-full ${step.color}/10 flex items-center justify-center`}>
                                <span className={`text-sm font-bold ${step.color === "bg-accent" ? "text-accent" : step.color === "bg-[#0B7077]" ? "text-[#0B7077]" : "text-primary"}`}>
                                  {i + 1}
                                </span>
                              </div>
                              <span className="text-sm text-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for timeline */}
                    {index < steps.length - 1 && (
                      <div className="h-12 lg:hidden" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        {/* <section className="py-20 lg:py-28 bg-[#0B7077] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-white/50" />
                <span className="text-white/80 font-bold text-sm uppercase tracking-wider">
                  Requirements
                </span>
                <div className="w-12 h-0.5 bg-white/50" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4">
                What You Need to Qualify
              </h2>
              <p className="text-lg text-white/80">
                Our requirements are simple and straightforward. Most businesses qualify.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {requirements.map((req, index) => (
                <motion.div
                  key={req.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <req.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{req.title}</h3>
                  <p className="text-white/70 text-sm">{req.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
       {/* FAQ Section - Toggle / Accordion */}
<section className="py-20 lg:py-28 bg-muted/50 relative overflow-hidden">
  {/* Background blobs */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-12 h-0.5 bg-primary" />
        <span className="text-primary font-bold text-sm uppercase tracking-wider">
          FAQs
        </span>
        <div className="w-12 h-0.5 bg-primary" />
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        Common Questions
      </h2>
      <p className="text-lg text-muted-foreground">
        Everything you need to know about our funding process.
      </p>
    </motion.div>

    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-2xl border transition-all overflow-hidden
              ${isOpen 
                ? "bg-primary/5 border-primary/30 shadow-lg" 
                : "bg-card border-border hover:border-primary/30 hover:shadow-md"
              }`}
          >
            {/* Question */}
            <button
              onClick={() => setOpenFaq(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
            >
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary text-sm font-bold">
                    {index + 1}
                  </span>
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {faq.question}
                </h3>
              </div>

              {/* Toggle Icon */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all
                  ${isOpen ? "bg-primary text-primary-foreground rotate-45" : "bg-muted text-foreground"}
                `}
              >
                +
              </div>
            </button>

            {/* Answer */}
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pl-16 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
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
    </>
  );
}

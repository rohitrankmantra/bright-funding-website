"use client";

import { motion } from "framer-motion";
import {
  HiStar,
  HiChat,
  HiHeart,
  HiThumbUp,
  HiUserGroup,
} from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Michael Rodriguez",
    role: "Restaurant Owner",
    business: "Casa Del Sol",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote:
      "Bright Funding made the entire process seamless. I was approved within 24 hours and had the capital I needed to expand my restaurant. Their team was professional and transparent throughout.",
    rating: 5,
    amount: "$85,000",
  },
  {
    name: "Sarah Johnson",
    role: "E-commerce Founder",
    business: "Bloom Beauty Co",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote:
      "As a woman-owned business, I was skeptical about funding options. Bright Funding exceeded my expectations with their personalized approach and quick turnaround.",
    rating: 5,
    amount: "$120,000",
  },
  {
    name: "David Chen",
    role: "Construction Manager",
    business: "BuildRight LLC",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    quote:
      "The equipment financing allowed us to take on bigger projects. The terms were fair, and the process was straightforward.",
    rating: 5,
    amount: "$250,000",
  },
];

const trustStats = [
  { icon: HiChat, value: "4.9/5", label: "Average Rating", color: "bg-primary" },
  { icon: HiUserGroup, value: "1000+", label: "Happy Clients", color: "bg-accent" },
  {
    icon: HiThumbUp,
    value: "98%",
    label: "Would Recommend",
    color: "bg-[#0B7077]",
  },
  { icon: HiHeart, value: "$50M+", label: "Total Funded", color: "bg-primary" },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Background blur */}
      <div className="absolute left-0 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from business owners who trusted us with their funding
            needs.
          </p>
        </motion.div>

        {/* ✅ TRUST STATS — 2 PER ROW ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl"
            >
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <div
                  className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl ${stat.color}`}
                >
                  <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* TESTIMONIALS (UNCHANGED) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all motion-safe:hover:-translate-y-2 motion-safe:hover:shadow-2xl"
            >
              <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <FaQuoteLeft className="h-4 w-4 text-primary" />
              </div>

              <div className="mb-4 flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <HiStar key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                “{t.quote}”
              </p>

              <span className="mb-6 inline-flex w-fit rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Funded: {t.amount}
              </span>

              <div className="mt-auto flex items-center gap-4 border-t border-border pt-6">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-accent">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {t.role} · {t.business}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

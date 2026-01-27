"use client";

import { motion } from "framer-motion";
import { HiStar, HiChat, HiHeart, HiThumbUp, HiUserGroup } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Michael Rodriguez",
    role: "Restaurant Owner",
    business: "Casa Del Sol",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Bright Funding made the entire process seamless. I was approved within 24 hours and had the capital I needed to expand my restaurant. Their team was professional and transparent throughout.",
    rating: 5,
    amount: "$85,000",
  },
  {
    name: "Sarah Johnson",
    role: "E-commerce Founder",
    business: "Bloom Beauty Co",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "As a woman-owned business, I was skeptical about funding options. Bright Funding exceeded my expectations with their personalized approach and quick turnaround. Highly recommend!",
    rating: 5,
    amount: "$120,000",
  },
  {
    name: "David Chen",
    role: "Construction Manager",
    business: "BuildRight LLC",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    quote: "The equipment financing allowed us to take on bigger projects. The terms were fair, and the process was straightforward. They truly understand business needs.",
    rating: 5,
    amount: "$250,000",
  },
];

const trustStats = [
  { 
    icon: HiChat, 
    value: "4.9/5", 
    label: "Average Rating",
    color: "bg-primary"
  },
  { 
    icon: HiUserGroup, 
    value: "1000+", 
    label: "Happy Clients",
    color: "bg-accent"
  },
  { 
    icon: HiThumbUp, 
    value: "98%", 
    label: "Would Recommend",
    color: "bg-[#0B7077]"
  },
  { 
    icon: HiHeart, 
    value: "$50M+", 
    label: "Total Funded",
    color: "bg-primary"
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      
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
              Testimonials
            </span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from business owners who trusted us with their funding needs.
          </p>
        </motion.div>

        {/* Trust Stats - Icon Box Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
        >
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {/* Icon Box */}
                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl ${stat.color} flex items-center justify-center flex-shrink-0`}>
                  <stat.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                {/* Text */}
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FaQuoteLeft className="w-5 h-5 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm lg:text-base">
                "{testimonial.quote}"
              </p>

              {/* Funded Amount */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary">
                  Funded: {testimonial.amount}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.business}
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

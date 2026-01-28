"use client";

import { motion } from "framer-motion";
import { HiCurrencyDollar, HiTrendingUp, HiOfficeBuilding, HiCreditCard, HiDocumentText, HiChartBar, HiArrowRight } from "react-icons/hi";
import Image from "next/image";

const services = [
  {
    icon: HiCurrencyDollar,
    title: "Working Capital",
    description: "Keep your business running smoothly with flexible funding for daily operations.",
  },
  {
    icon: HiTrendingUp,
    title: "Merchant Cash Advance",
    description: "Quick capital based on future sales with flexible repayment options.",
  },
  {
    icon: HiOfficeBuilding,
    title: "Business Expansion",
    description: "Scale your operations with dedicated funding for growth initiatives.",
  },
  {
    icon: HiCreditCard,
    title: "Lines of Credit",
    description: "Access funds when you need them with revolving credit solutions.",
  },
  {
    icon: HiDocumentText,
    title: "Term Loans",
    description: "Fixed-term financing with predictable payments for major investments.",
  },
  {
    icon: HiChartBar,
    title: "Equipment Financing",
    description: "Upgrade your equipment without depleting your cash reserves.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Image with overlay content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Section Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-primary" />
                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                  Our Services
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
                Comprehensive Funding Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer a wide range of business funding options designed to meet your unique needs and help you achieve your goals.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services-meeting.jpg"
                  alt="Business funding consultation"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent" />
                
                {/* Overlay content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <HiTrendingUp className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-lg">Fast Approval Process</div>
                        <div className="text-sm text-muted-foreground">Get funded in as little as 24 hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-xl" />
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Get Free Consultation
              <HiArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Right Side - Service Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group bg-card rounded-2xl p-5 lg:p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

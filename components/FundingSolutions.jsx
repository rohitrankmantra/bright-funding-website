"use client";

import { motion } from "framer-motion";
import {
  HiCurrencyDollar,
  HiCreditCard,
  HiDocumentText,
  HiRefresh,
  HiCollection,
  HiCog,
  HiShieldCheck,
  HiOfficeBuilding,
  HiArrowRight,
  HiCheckCircle,
  HiPhone,
} from "react-icons/hi";
import Image from "next/image";

const solutions = [
  {
    icon: HiCurrencyDollar,
    title: "Merchant Cash Advance",
    description: "Advance against your future sales with flexible repayment based on daily revenue.",
    features: ["Same-day approval", "No fixed payments", "Up to $500K"],
  },
  {
    icon: HiCreditCard,
    title: "Business Line of Credit",
    description: "Access funds when you need them. Only pay interest on what you use.",
    features: ["Revolving credit", "Flexible terms", "Quick access"],
  },
  {
    icon: HiDocumentText,
    title: "Business Term Loan",
    description: "Traditional fixed-term financing with predictable monthly payments.",
    features: ["Fixed rates", "Predictable payments", "Long terms"],
  },
  {
    icon: HiRefresh,
    title: "Working Capital Loan",
    description: "Short-term funding to cover operational expenses and cash flow gaps.",
    features: ["Fast funding", "Short terms", "Flexible use"],
  },
  {
    icon: HiCollection,
    title: "Loan Consolidation",
    description: "Combine multiple loans into one manageable payment with better terms.",
    features: ["Lower rates", "Single payment", "Improved cash flow"],
  },
  {
    icon: HiCog,
    title: "Equipment Financing",
    description: "Fund new equipment purchases with the equipment itself as collateral.",
    features: ["100% financing", "Tax benefits", "Preserve cash"],
  },
  {
    icon: HiShieldCheck,
    title: "SBA Loans",
    description: "Government-backed loans with competitive rates and longer terms.",
    features: ["Low rates", "Long repayment", "Higher amounts"],
  },
  {
    icon: HiOfficeBuilding,
    title: "Real Estate Funding",
    description: "Commercial real estate loans for property purchase or refinancing.",
    features: ["Competitive rates", "Long terms", "Large amounts"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function FundingSolutions() {
  return (
    <section id="funding" className="relative overflow-hidden">
      {/* Main Content */}
      <div className="py-20 lg:py-28 bg-background relative">
        {/* Background decorations */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

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
                Funding Options
              </span>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
              Our Funding Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive financing options tailored to meet every business need and growth stage.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <solution.icon className="w-7 h-7 text-accent group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <HiCheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow indicator */}
                <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-semibold">Learn more</span>
                  <HiArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section with Background Image */}
      <div className="relative min-h-[400px] lg:min-h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/funding-cta-bg.jpg"
            alt="Business funding"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0B7077]/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-accent" />
                <span className="text-accent font-bold text-sm uppercase tracking-wider">
                  Get Started Today
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 text-balance">
                Not Sure Which Option Is Right for You?
              </h3>
              <p className="text-white/80 text-lg mb-8">
                Our funding experts will help you find the perfect solution for your business needs. Get a free consultation today with no obligation.
              </p>
              
              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <HiCheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-white/90 text-sm">No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-white/90 text-sm">24hr Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-white/90 text-sm">500+ Reviews</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/apply"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-foreground rounded-full font-bold hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Apply Now - Free
                  <HiArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+18881234567"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white rounded-full font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all"
                >
                  <HiPhone className="w-5 h-5" />
                  Call (888) 123-4567
                </a>
              </div>
            </motion.div>

            {/* Right Side - Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20"
            >
              <div className="text-center mb-6">
                <div className="text-accent text-5xl lg:text-6xl font-bold mb-2">$500K</div>
                <div className="text-white/80 text-lg">Maximum Funding</div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-white/90">
                  <span>Approval Time</span>
                  <span className="font-bold">24 Hours</span>
                </div>
                <div className="w-full h-px bg-white/20" />
                <div className="flex items-center justify-between text-white/90">
                  <span>Funding Time</span>
                  <span className="font-bold">Same Day</span>
                </div>
                <div className="w-full h-px bg-white/20" />
                <div className="flex items-center justify-between text-white/90">
                  <span>Credit Score</span>
                  <span className="font-bold">500+</span>
                </div>
                <div className="w-full h-px bg-white/20" />
                <div className="flex items-center justify-between text-white/90">
                  <span>Time in Business</span>
                  <span className="font-bold">6+ Months</span>
                </div>
              </div>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-foreground rounded-full font-bold hover:bg-white/90 transition-all"
              >
                Get Free Quote
                <HiArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

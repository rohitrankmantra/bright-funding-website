"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiArrowRight,
  HiCheck,
  HiClock,
  HiCash,
  HiDocumentText,
  HiPhone,
  HiArrowLeft,
} from "react-icons/hi";
import { HiTrendingUp } from "react-icons/hi";
import { RiFundsBoxFill } from "react-icons/ri";
import { servicesData, getServiceBySlug } from "@/lib/services-data";
import Image from "next/image";

export default function ServiceDetailPage() {
  const params = useParams();
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return (
      <main className="min-h-screen">
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Service Not Found
          </h1>
          <Link
            href="/services"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const otherServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
            >
              <HiArrowLeft className="w-4 h-4" />
              All Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-primary" />
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                      {service.shortName}
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  {service.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {service.fullDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    Apply Now
                    <HiArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+18881234567"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all border border-border"
                  >
                    <HiPhone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-background rounded-2xl p-6 shadow-lg"
                >
                  <HiCash className="w-8 h-8 text-primary mb-3" />
                  <span className="text-sm text-muted-foreground block">
                    Funding Range
                  </span>
                  <span className="text-xl font-bold text-foreground">
                    {service.fundingRange}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-background rounded-2xl p-6 shadow-lg"
                >
                  <HiClock className="w-8 h-8 text-primary mb-3" />
                  <span className="text-sm text-muted-foreground block">
                    Approval Time
                  </span>
                  <span className="text-xl font-bold text-foreground">
                    {service.approvalTime}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-background rounded-2xl p-6 shadow-lg"
                >
                  <HiDocumentText className="w-8 h-8 text-primary mb-3" />
                  <span className="text-sm text-muted-foreground block">
                    Term Length
                  </span>
                  <span className="text-xl font-bold text-foreground">
                    {service.termLength}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-primary rounded-2xl p-6 text-primary-foreground"
                >
                  <HiCheck className="w-8 h-8 mb-3" />
                  <span className="text-sm opacity-80 block">Approval Rate</span>
                  <span className="text-xl font-bold">95%+</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

{/* Key feature  */}

<section className="py-20 lg:py-28 bg-background relative overflow-hidden">
  {/* Background decorations */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      
      {/* Left Side - Common Image + Content */}
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
              Key Features
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Key Features of {service.shortName}
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful features designed to simplify funding and accelerate your business growth.
          </p>
        </div>

        {/* Common Image (Same for all services) */}
        <div className="relative">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80"
              alt="Business funding consultation"
              fill
              className="object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent" />

            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <HiTrendingUp className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">
                      Smart Funding Solutions
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Built to support faster growth and better cash flow
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative bubble */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-xl" />
        </div>

         <motion.a
              href="/contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Get Free Consultation
              <HiArrowRight className="w-5 h-5" />
            </motion.a>
      </motion.div>

      {/* Right Side - Feature Cards Grid (from data.js) */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 lg:gap-6"
      >
        {service.features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="group bg-card rounded-2xl p-5 lg:p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <RiFundsBoxFill className="w-6 h-6 lg:w-7 lg:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>

            {/* Content */}
            <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {feature}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Designed to make your funding faster, simpler, and more flexible.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>


{/* Business Benefits - Premium Cards */}
{/* <section className="py-20 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Business Benefits
      </h2>
      <p className="text-muted-foreground">
        Real advantages that help you grow, scale, and manage cash flow with
        confidence.
      </p>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {service.benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="group bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all"
        >
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {benefit.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section> */}



     {/* Requirements - Stat Style */}
<section className="py-24 bg-muted relative overflow-hidden">
  {/* Background effects */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* Left Side - Content & Trust Copy */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Eligibility
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Simple Qualification Requirements
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Our approval process is designed to be flexible and business-friendly. 
            These baseline requirements help us deliver faster decisions and better funding offers.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-background rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-1">95%+</div>
            <div className="text-sm text-muted-foreground">
              Approval Success Rate
            </div>
          </div>
          <div className="bg-background rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-1">24 Hrs</div>
            <div className="text-sm text-muted-foreground">
              Average Review Time
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Requirement Cards (Stat / Step Style) */}
      <div className="grid sm:grid-cols-2 gap-6">
        {service.requirements.map((requirement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group bg-background rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-accent opacity-60" />

            {/* Step Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                Required
              </span>
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-foreground mb-2">
              Qualification Factor
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {requirement}
            </p>

            {/* Subtle Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>



      {/* Application Process */}
<section className="py-24 bg-background relative overflow-hidden">
  {/* Background glow */}
  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-150 h-150 bg-primary/5 rounded-full blur-3xl" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-14"
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="w-8 h-0.5 bg-primary" />
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          How It Works
        </span>
        <span className="w-8 h-0.5 bg-primary" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Simple & Guided Application Process
      </h2>
      <p className="text-muted-foreground text-lg">
        A streamlined, step-by-step process designed to get you funded faster
        with complete clarity and confidence.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        {
          step: "01",
          title: "Apply Online",
          description: "Complete our secure online form in under 5 minutes.",
          sub: "No paperwork required",
          icon: HiDocumentText,
        },
        {
          step: "02",
          title: "Instant Review",
          description: "Our funding specialists review your details quickly.",
          sub: "Personal funding advisor",
          icon: HiClock,
        },
        {
          step: "03",
          title: "Receive Offer",
          description: "Get a clear, customized funding offer.",
          sub: "Transparent terms",
          icon: HiCash,
        },
        {
          step: "04",
          title: "Get Funded",
          description: "Funds are deposited directly into your account.",
          sub: "Same-day funding available",
          icon: HiTrendingUp,
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="relative group"
        >
          <div className="bg-muted rounded-2xl p-7 h-full border border-transparent hover:border-primary/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            
            {/* Step + Icon */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <span className="text-sm font-bold text-primary">
                  Step {item.step}
                </span>
              </div>

              <span className="text-4xl font-bold text-primary/15">
                {item.step}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-foreground mb-2">
              {item.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              {item.description}
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {item.sub}
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Arrow Connector */}
          {index < 3 && (
            <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2">
              <HiArrowRight className="w-6 h-6 text-primary/30" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Other Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Other Funding Options
            </h2>
            <p className="text-muted-foreground">
              Not sure if {service.shortName} is right for you? Check out our
              other funding solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((otherService, index) => (
              <motion.div
                key={otherService.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${otherService.slug}`}
                  className="block group"
                >
                  <div className="bg-background rounded-2xl p-6 h-full border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <otherService.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {otherService.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {otherService.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                      Learn More
                      <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Common Background for All Services */}
<section
  className="relative py-24 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-primary/80" />

  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-background/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Get Fast Approval for {service.shortName}
      </h2>
      <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
        Speak with our funding experts today and receive a customized offer with
        clear terms and fast processing.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/apply"
          className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all shadow-lg"
        >
          Apply Now
          <HiArrowRight className="w-5 h-5" />
        </Link>

        <a
          href="tel:+18881234567"
          className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/10 transition-all"
        >
          <HiPhone className="w-5 h-5" />
          Talk to an Expert
        </a>
      </div>
    </motion.div>
  </div>
</section>


    </main>
  );
}

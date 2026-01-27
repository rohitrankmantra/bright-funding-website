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
import { servicesData, getServiceBySlug } from "@/lib/services-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceDetailPage() {
  const params = useParams();
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return (
      <main className="min-h-screen">
        <Header />
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
        <Footer />
      </main>
    );
  }

  const otherServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      <Header />

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

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Key Features
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                What You Get With {service.shortName}
              </h2>

              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-muted rounded-xl p-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <HiCheck className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium pt-1">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-accent" />
                <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wider">
                  Benefits
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Why Choose This Option
              </h2>

              <div className="grid gap-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-muted rounded-xl p-5"
                  >
                    <h3 className="font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Requirements
              </span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Need to Qualify
            </h2>
            <p className="text-muted-foreground">
              Meeting these basic requirements helps ensure a smooth application
              process. Do not worry if you are not sure - our team can help assess
              your options.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <p className="text-foreground font-medium">{requirement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                How It Works
              </span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple Application Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Apply Online",
                description:
                  "Fill out our simple online application in just 5 minutes",
              },
              {
                step: "02",
                title: "Get Reviewed",
                description:
                  "Our team reviews your application and contacts you within 24 hours",
              },
              {
                step: "03",
                title: "Receive Offer",
                description:
                  "Get a customized funding offer with clear, transparent terms",
              },
              {
                step: "04",
                title: "Get Funded",
                description:
                  "Accept your offer and receive funds as soon as the same day",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-muted rounded-2xl p-6 h-full">
                  <span className="text-5xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
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

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Apply for {service.shortName}?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Get started today and receive your funding decision within{" "}
              {service.approvalTime.toLowerCase()}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
              >
                Apply Now
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+18881234567"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                <HiPhone className="w-5 h-5" />
                (888) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

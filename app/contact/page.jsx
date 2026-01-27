"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiClock,
  HiArrowRight,
  HiCheck,
} from "react-icons/hi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: HiPhone,
    title: "Phone",
    content: "(888) 123-4567",
    subtext: "Mon-Fri 9am-6pm EST",
    href: "tel:+18881234567",
  },
  {
    icon: HiMail,
    title: "Email",
    content: "info@brightfunding.com",
    subtext: "We respond within 24 hours",
    href: "mailto:info@brightfunding.com",
  },
  {
    icon: HiLocationMarker,
    title: "Office",
    content: "123 Finance Street",
    subtext: "New York, NY 10001",
    href: "#",
  },
  {
    icon: HiClock,
    title: "Hours",
    content: "Mon - Fri: 9am - 6pm",
    subtext: "Sat: 10am - 2pm EST",
    href: "#",
  },
];

const faqs = [
  {
    question: "How quickly can I get funded?",
    answer:
      "Most applications are reviewed within 24 hours, and funding can be deposited as quickly as the same business day once approved.",
  },
  {
    question: "What credit score do I need?",
    answer:
      "We work with businesses of all credit profiles. While better credit may qualify for better terms, we have options for businesses with challenged credit as well.",
  },
  {
    question: "What documents are required?",
    answer:
      "Typically, we need 3-6 months of business bank statements, a government-issued ID, and basic business information. Some products may require additional documentation.",
  },
  {
    question: "Are there any upfront fees?",
    answer:
      "No, there are no application fees or upfront costs. You only pay if you accept an offer and receive funding.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    fundingAmount: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Contact Us
              </span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Let&apos;s Talk About Your{" "}
              <span className="text-primary">Funding Needs</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our funding options? Our team is here to help
              you find the right solution for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-muted rounded-2xl p-6 text-center group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary-foreground mb-1 transition-colors">
                  {item.title}
                </h3>
                <p className="font-semibold text-foreground group-hover:text-primary-foreground transition-colors">
                  {item.content}
                </p>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {item.subtext}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-background rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <HiCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. A member of our team will contact
                    you within 24 hours.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Return Home
                    <HiArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-background rounded-2xl p-6 md:p-8 shadow-lg"
                >
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Funding Amount Needed
                      </label>
                      <select
                        name="fundingAmount"
                        value={formData.fundingAmount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      >
                        <option value="">Select amount</option>
                        <option value="5000-25000">$5,000 - $25,000</option>
                        <option value="25000-50000">$25,000 - $50,000</option>
                        <option value="50000-100000">$50,000 - $100,000</option>
                        <option value="100000-250000">$100,000 - $250,000</option>
                        <option value="250000+">$250,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your funding needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <HiArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  FAQs
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Common Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-background rounded-2xl p-6"
                  >
                    <h3 className="font-bold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-primary rounded-2xl p-6 text-primary-foreground">
                <h3 className="font-bold text-xl mb-2">Still have questions?</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Our funding specialists are ready to help you find the right
                  solution.
                </p>
                <a
                  href="tel:+18881234567"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-6 py-3 rounded-xl font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <HiPhone className="w-5 h-5" />
                  Call (888) 123-4567
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
          <div className="text-center">
            <HiLocationMarker className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Visit Our Office
            </h3>
            <p className="text-muted-foreground">
              123 Finance Street, New York, NY 10001
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

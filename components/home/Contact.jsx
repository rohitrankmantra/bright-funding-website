"use client";

import { motion } from "framer-motion";
import { HiMail, HiPhone, HiClock, HiArrowRight, HiLocationMarker, HiCheckCircle } from "react-icons/hi";
import Image from "next/image";

const contactInfo = [
  {
    icon: HiPhone,
    label: "Call Us",
    value: "(888) 123-4567",
    subtext: "Toll-free support",
    href: "tel:+18881234567",
    color: "bg-primary",
  },
  {
    icon: HiMail,
    label: "Email Us",
    value: "admin@brightfundingsolution.com",
    subtext: "We reply within 24 hours",
    href: "mailto:admin@brightfundingsolution.com",
    color: "bg-accent",
  },
  {
    icon: HiClock,
    label: "Office Hours",
    value: "Mon - Sun: 9:00 AM - 8:00 PM",
    subtext: "Always here for you",
    href: null,
    color: "bg-[#0B7077]",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

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
              Get In Touch
            </span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Ready to Get Funded?
          </h2>
          <p className="text-lg text-muted-foreground">
            Our funding specialists are standing by to help you secure the capital your business needs.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl ${item.color} flex items-center justify-center mb-5`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.label}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-lg font-semibold text-primary hover:underline block mb-1"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-lg font-semibold text-foreground block mb-1">
                  {item.value}
                </span>
              )}
              <p className="text-sm text-muted-foreground">{item.subtext}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-2xl order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Request a Free Consultation
            </h3>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and one of our funding experts will contact you within 24 hours.
            </p>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label
                  htmlFor="fundingAmount"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Funding Amount Needed
                </label>
                <select
                  id="fundingAmount"
                  name="fundingAmount"
                  className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                >
                  <option value="">Select an amount</option>
                  <option value="10000-25000">$10,000 - $25,000</option>
                  <option value="25000-50000">$25,000 - $50,000</option>
                  <option value="50000-100000">$50,000 - $100,000</option>
                  <option value="100000-250000">$100,000 - $250,000</option>
                  <option value="250000+">$250,000+</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Tell Us About Your Business
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="What industry are you in? How would you use the funding?"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Submit Application
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </motion.div>

          {/* Right Side - Why Contact Us & Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 space-y-8"
          >
            {/* Why Contact Us */}
            <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border">
              <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <HiCheckCircle className="w-5 h-5 text-white" />
                </div>
                Why Contact Us?
              </h4>
              <ul className="space-y-4">
                {[
                  "Free, no-obligation consultation",
                  "Personalized funding recommendations",
                  "Expert guidance from start to finish",
                  "Transparent terms, no hidden fees",
                  "Same-day approval available",
                  "Dedicated account manager",
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Google Maps */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border">
              <div className="p-4 bg-muted/50 border-b border-border">
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <HiLocationMarker className="w-5 h-5 text-primary" />
                  Our Location
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                 350 Fifth Avenue, Floor 21 New York, NY 10118
                </p>
              </div>
              <div className="relative aspect-video sm:aspect-4/3 lg:aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.01369368459473!3d40.71066447933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1829a3f4a5%3A0x9c2c8b7e8f9c8b7e!2sFinancial%20District%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  title="Bright Funding Solution Location"
                />
              </div>
            </div>

            {/* Quick Response Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#0a2a5d] rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold">24h</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Quick Response Time</div>
                  <div className="text-white/80 text-sm">We get back to you within 24 hours, guaranteed!</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

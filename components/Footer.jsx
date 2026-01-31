"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone, HiArrowRight, HiCheckCircle } from "react-icons/hi";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "#services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Contact", href: "/contact" },
];

const servicesLinks = [
  { name: "Merchant Cash Advance", href: "#funding" },
  { name: "Business Line of Credit", href: "#funding" },
  { name: "Working Capital Loan", href: "#funding" },
  { name: "Equipment Financing", href: "#funding" },
  { name: "Term Loans", href: "#funding" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-black/90 text-background">
      {/* Blurs */}
      <div className="absolute top-0 right-0 h-72 w-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 bg-accent/5 rounded-full blur-3xl" />

      {/* Newsletter */}
      <div className="border-b border-background/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-background/60 max-w-md">
                Get the latest funding tips and insights delivered to your inbox.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.trim()) {
                  alert("Please enter your email");
                  return;
                }
                setIsSubmitting(true);
                setTimeout(() => {
                  setIsSubmitting(false);
                  setSubscribed(true);
                  setEmail("");
                }, 1200);
              }}
              className="flex w-full lg:w-auto flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed || isSubmitting}
                className={`w-full sm:w-72 px-5 py-3.5 rounded-xl bg-background/10 border ${
                  subscribed
                    ? "border-green-500/50 text-green-300 placeholder:text-green-300/50"
                    : "border-background/20 text-background placeholder:text-background/50"
                } focus:outline-none focus:border-primary disabled:opacity-60`}
              />
              <motion.button
                type="submit"
                disabled={subscribed || isSubmitting}
                whileHover={{ scale: subscribed ? 1 : 1.02 }}
                whileTap={{ scale: subscribed ? 1 : 0.98 }}
                className={`flex cursor-pointer items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold min-w-35 transition-all ${
                  subscribed
                    ? "bg-green-600 text-white cursor-pointer"
                    : isSubmitting
                    ? "bg-primary/70 text-primary-foreground cursor-wait"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {subscribed ? (
                  <>
                    Subscribed <HiCheckCircle className="w-5 h-5" />
                  </>
                ) : isSubmitting ? (
                  <>
                    Subscribing...
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  </>
                ) : (
                  <>
                    Subscribe <HiArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Bright Funding"
                width={140}
                height={40}
                className="object-contain w-full"
              />
            </Link>

            <p className="text-sm text-background/60 mb-6 max-w-sm">
              Empowering small and medium-sized businesses with fast, reliable
              funding solutions.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background/60 hover:bg-primary hover:text-primary-foreground transition"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm text-background/60 hover:text-primary transition"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Our Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm text-background/60 hover:text-primary transition"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <HiPhone className="h-5 w-5 text-primary" />
                <span>(888) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="h-5 w-5 text-primary" />
                <span>admin@brightfundingsolution.com</span>
              </li>
              <li className="text-background/60">
                Mon – Sun: 9 AM – 8 PM EST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-background/10 pt-8 text-sm text-background/50">
          <p>© {new Date().getFullYear()} Bright Funding Solution  All rights reserved. Designed & Developed by <a className="text-white underline" href="https://rankmantra.com/">Rankmantra</a></p>
          {/* <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">Privacy</Link>
            <Link href="#" className="hover:text-primary">Terms</Link>
            <Link href="#" className="hover:text-primary">Disclaimer</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
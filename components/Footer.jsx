"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone, HiArrowRight } from "react-icons/hi";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Contact", href: "#contact" },
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
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-background mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-background/60">
                Get the latest funding tips and industry insights delivered to your inbox.
              </p>
            </div>
            <form className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-5 py-3.5 rounded-xl bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Subscribe
                <HiArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className=" w-full h-auto  overflow-hidden flex items-center justify-center border">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={160}
                  height={48}
                  className="object-cover w-full h-36"
                />
              </div>
              <div>
                <span className="text-background font-bold text-xl block leading-tight">
                  Bright Funding
                </span>
                <span className="text-background/50 text-xs">Solution</span>
              </div>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Empowering small and medium-sized businesses with fast, reliable
              funding solutions. Your growth is our mission.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-background mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-background mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-background mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+18881234567"
                  className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <HiPhone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-background/40 mb-0.5">Phone</span>
                    <span className="text-sm font-medium text-background">(888) 123-4567</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@brightfundingsolution.com"
                  className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <HiMail className="w-5 h-5 text-[#791718]" />
                  </div>
                  <div>
                    <span className="block text-xs text-background/40 mb-0.5">Email</span>
                    <span className="text-sm font-medium text-background">admin@brightfundingsolution.com</span>
                  </div>
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-xs text-background/40 mb-1">Hours</span>
                <span className="text-sm text-background/80">Mon - Sun: 9 AM - 9 PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Bright Funding Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

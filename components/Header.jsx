"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMenu,
  HiX,
  HiPhone,
  HiChevronDown,
  HiArrowRight,
  HiCash,
  HiCreditCard,
  HiOfficeBuilding,
  HiTruck,
  HiCurrencyDollar,
  HiChartBar,
  HiShieldCheck,
  HiLightningBolt,
  HiMail,
  HiLocationMarker,
} from "react-icons/hi";

const services = [
  {
    name: "Merchant Cash Advance",
    slug: "#",
    description: "Quick capital based on future sales",
    icon: HiCash,
  },
  {
    name: "Business Line of Credit",
    slug: "#",
    description: "Revolving credit for ongoing needs",
    icon: HiCreditCard,
  },
  {
    name: "Business Term Loans",
    slug: "#",
    description: "Fixed payments over set terms",
    icon: HiOfficeBuilding,
  },
  {
    name: "Equipment Financing",
    slug: "#",
    description: "Fund equipment purchases easily",
    icon: HiTruck,
  },
  {
    name: "Invoice Factoring",
    slug: "#",
    description: "Turn invoices into instant cash",
    icon: HiCurrencyDollar,
  },
  {
    name: "SBA Loans",
    slug: "#",
    description: "Government-backed favorable terms",
    icon: HiShieldCheck,
  },
  {
    name: "Working Capital",
    slug: "#",
    description: "Short-term operational funding",
    icon: HiChartBar,
  },
  {
    name: "Startup Funding",
    slug: "#",
    description: "Capital for new businesses",
    icon: HiLightningBolt,
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "How It Works", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaMenuRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`bg-primary text-primary-foreground text-sm transition-all duration-300 ${
          isScrolled ? "h-0 overflow-hidden py-0" : "py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className=" md:flex items-center gap-6">
            <a
              href="mailto:info@brightfunding.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <HiMail className="w-4 h-4" />
              <span>info@brightfunding.com</span>
            </a>
            <span className="hidden md:flex items-center gap-2">
              <HiLocationMarker className="w-4 h-4" />
              <span>New York, NY</span>
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:block">Mon - Fri: 9:00 AM - 6:00 PM</span>
            <span className="hidden sm:block">|</span>
            <a
              href="tel:+18881234567"
              className="flex items-center gap-2 hover:text-accent transition-colors font-medium"
            >
              <HiPhone className="w-4 h-4" />
              <span>(888) 123-4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className=" w-full   overflow-hidden flex items-center justify-end">
              <Image
                src="/logo.png"
                alt="Logo"
                width={160}
                height={48}
                className="w-20 h-18 md:w-22 md:h-18 border"
              />
            </div>
         <div className="hidden sm:block leading-tight">
  <span className="text-foreground font-extrabold text-xl tracking-wide">
    Bright Funding
  </span>
  <span className="block text-primary font-semibold text-sm tracking-wide">
    Solutions
  </span>
</div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} className="relative" ref={megaMenuRef}>
                  <button
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    className={`relative px-4 py-2 transition-colors text-sm font-medium group flex items-center gap-1 ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMegaMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary transition-transform origin-left ${
                        isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {isMegaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="bg-background rounded-2xl shadow-2xl border border-border p-6 w-180">
                          <div className="flex gap-6">
                            {/* Services Grid */}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-4">
                                <span className="w-8 h-0.5 bg-primary" />
                                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider">
                                  Our Services
                                </h3>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {services.map((service) => (
                                  <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                                  >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                      <service.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                      <span className="font-medium text-foreground text-sm block group-hover:text-primary transition-colors">
                                        {service.name}
                                      </span>
                                      <span className="text-muted-foreground text-xs">
                                        {service.description}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Featured CTA */}
                            <div className="w-56 bg-primary rounded-xl p-5 text-primary-foreground flex flex-col">
                              <span className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-2">
                                Need Funding?
                              </span>
                              <h4 className="font-bold text-lg mb-2">
                                Get Up To $500K
                              </h4>
                              <p className="text-sm opacity-90 mb-4 flex-1">
                                Quick approval, same-day funding available for
                                qualified businesses.
                              </p>
                              <Link
                                href="/apply"
                                className="inline-flex items-center gap-2 bg-background text-foreground px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                              >
                                Apply Now
                                <HiArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>

                          {/* Bottom Links */}
                          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                            {/* <Link
                              href="/services"
                              className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
                            >
                              View All Services
                              <HiArrowRight className="w-4 h-4" />
                            </Link> */}
                            <span className="text-xs text-muted-foreground">
                              Trusted by 5,000+ businesses nationwide
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 transition-colors text-sm font-medium group ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary transition-transform origin-left ${
                      isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+18881234567"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <HiPhone className="w-5 h-5 text-primary" />
              </div>
            </a>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link, index) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full text-foreground hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-muted font-medium flex items-center justify-between"
                    >
                      {link.name}
                      <HiChevronDown
                        className={`w-5 h-5 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </motion.button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 overflow-hidden"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 py-2.5 px-4 text-muted-foreground hover:text-primary transition-colors"
                            >
                              <service.icon className="w-4 h-4" />
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          ))}
                          {/* <Link
                            href="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2 py-2.5 px-4 text-primary font-medium text-sm"
                          >
                            View All Services
                            <HiArrowRight className="w-4 h-4" />
                          </Link> */}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`py-3 px-4 rounded-xl font-medium block transition-colors ${
                        isActive(link.href)
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:text-primary hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              )}
              <div className="pt-4 border-t border-border mt-2">
                <Link
                  href="/apply"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center px-6 py-4 bg-primary text-primary-foreground rounded-xl text-sm font-semibold"
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

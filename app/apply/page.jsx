"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  HiArrowRight,
  HiArrowLeft,
  HiCheck,
  HiShieldCheck,
  HiClock,
  HiCash,
  HiLightningBolt,
} from "react-icons/hi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
  { id: 1, name: "Business Info" },
  { id: 2, name: "Funding Needs" },
  { id: 3, name: "Contact Details" },
  { id: 4, name: "Review" },
];

const fundingOptions = [
  { value: "5000-25000", label: "$5,000 - $25,000" },
  { value: "25000-50000", label: "$25,000 - $50,000" },
  { value: "50000-100000", label: "$50,000 - $100,000" },
  { value: "100000-250000", label: "$100,000 - $250,000" },
  { value: "250000-500000", label: "$250,000 - $500,000" },
  { value: "500000+", label: "$500,000+" },
];

const fundingPurposes = [
  "Working Capital",
  "Equipment Purchase",
  "Inventory",
  "Expansion",
  "Payroll",
  "Marketing",
  "Debt Refinancing",
  "Other",
];

const businessTypes = [
  "Sole Proprietorship",
  "LLC",
  "Corporation",
  "Partnership",
  "Non-Profit",
  "Other",
];

const industries = [
  "Retail",
  "Restaurant/Food Service",
  "Healthcare",
  "Construction",
  "Transportation",
  "Professional Services",
  "Manufacturing",
  "E-commerce",
  "Technology",
  "Real Estate",
  "Other",
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Business Info
    businessName: "",
    businessType: "",
    industry: "",
    yearsInBusiness: "",
    monthlyRevenue: "",
    // Funding Needs
    fundingAmount: "",
    fundingPurpose: "",
    urgency: "",
    // Contact Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Agreement
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.businessName &&
          formData.businessType &&
          formData.industry &&
          formData.yearsInBusiness &&
          formData.monthlyRevenue
        );
      case 2:
        return (
          formData.fundingAmount && formData.fundingPurpose && formData.urgency
        );
      case 3:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone
        );
      case 4:
        return formData.agreeToTerms;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-40 pb-20 bg-muted min-h-[80vh] flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <HiCheck className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Application Submitted!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for applying, {formData.firstName}! Our team will
                review your application and contact you within 24 hours at{" "}
                {formData.email}.
              </p>
              <div className="bg-background rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-foreground mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-4 text-left">
                  {[
                    {
                      step: "1",
                      title: "Application Review",
                      desc: "Our team reviews your information",
                    },
                    {
                      step: "2",
                      title: "Funding Options",
                      desc: "We prepare customized offers for you",
                    },
                    {
                      step: "3",
                      title: "Get Funded",
                      desc: "Accept an offer and receive funds",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground block">
                          {item.title}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all"
                >
                  Return Home
                </Link>
                <a
                  href="tel:+18881234567"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  Call Us: (888) 123-4567
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-12 bg-muted overflow-hidden">
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
                Apply Now
              </span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Start Your Funding Application
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete this simple form and get a decision within 24 hours. No
              obligation, no impact on your credit score.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-colors ${
                      currentStep >= step.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-muted-foreground border border-border"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <HiCheck className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`hidden sm:block w-24 md:w-32 h-1 mx-2 rounded ${
                        currentStep > step.id ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step) => (
                <span
                  key={step.id}
                  className={`text-xs sm:text-sm font-medium ${
                    currentStep >= step.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-background rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* Step 1: Business Info */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Tell Us About Your Business
                    </h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="Your Company Name"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Business Type *
                          </label>
                          <select
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          >
                            <option value="">Select type</option>
                            {businessTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Industry *
                          </label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          >
                            <option value="">Select industry</option>
                            {industries.map((ind) => (
                              <option key={ind} value={ind}>
                                {ind}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Years in Business *
                          </label>
                          <select
                            name="yearsInBusiness"
                            value={formData.yearsInBusiness}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          >
                            <option value="">Select</option>
                            <option value="0-6months">Less than 6 months</option>
                            <option value="6-12months">6-12 months</option>
                            <option value="1-2years">1-2 years</option>
                            <option value="2-5years">2-5 years</option>
                            <option value="5+years">5+ years</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Monthly Revenue *
                          </label>
                          <select
                            name="monthlyRevenue"
                            value={formData.monthlyRevenue}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          >
                            <option value="">Select</option>
                            <option value="0-10000">Under $10,000</option>
                            <option value="10000-25000">$10,000 - $25,000</option>
                            <option value="25000-50000">$25,000 - $50,000</option>
                            <option value="50000-100000">
                              $50,000 - $100,000
                            </option>
                            <option value="100000+">$100,000+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Funding Needs */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Your Funding Requirements
                    </h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          How much funding do you need? *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {fundingOptions.map((option) => (
                            <label
                              key={option.value}
                              className={`relative flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                formData.fundingAmount === option.value
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="fundingAmount"
                                value={option.value}
                                checked={formData.fundingAmount === option.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <span
                                className={`font-medium text-sm ${
                                  formData.fundingAmount === option.value
                                    ? "text-primary"
                                    : "text-foreground"
                                }`}
                              >
                                {option.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          What will you use the funds for? *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {fundingPurposes.map((purpose) => (
                            <label
                              key={purpose}
                              className={`relative flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                                formData.fundingPurpose === purpose
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="fundingPurpose"
                                value={purpose}
                                checked={formData.fundingPurpose === purpose}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <span
                                className={`font-medium text-sm ${
                                  formData.fundingPurpose === purpose
                                    ? "text-primary"
                                    : "text-foreground"
                                }`}
                              >
                                {purpose}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          How soon do you need the funds? *
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { value: "asap", label: "ASAP" },
                            { value: "1-2weeks", label: "1-2 Weeks" },
                            { value: "1month+", label: "1 Month+" },
                          ].map((option) => (
                            <label
                              key={option.value}
                              className={`relative flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                formData.urgency === option.value
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="urgency"
                                value={option.value}
                                checked={formData.urgency === option.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <span
                                className={`font-medium ${
                                  formData.urgency === option.value
                                    ? "text-primary"
                                    : "text-foreground"
                                }`}
                              >
                                {option.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Contact Details */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Your Contact Information
                    </h2>

                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            First Name *
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
                            Last Name *
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

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
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
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Review Your Application
                    </h2>

                    <div className="space-y-6">
                      {/* Business Info Summary */}
                      <div className="bg-muted rounded-xl p-5">
                        <h3 className="font-bold text-foreground mb-3">
                          Business Information
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-muted-foreground">
                              Business Name:
                            </span>
                            <span className="text-foreground ml-2 font-medium">
                              {formData.businessName}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Type:</span>
                            <span className="text-foreground ml-2 font-medium">
                              {formData.businessType}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Industry:
                            </span>
                            <span className="text-foreground ml-2 font-medium">
                              {formData.industry}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Years:
                            </span>
                            <span className="text-foreground ml-2 font-medium">
                              {formData.yearsInBusiness}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Funding Summary */}
                      <div className="bg-muted rounded-xl p-5">
                        <h3 className="font-bold text-foreground mb-3">
                          Funding Details
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-muted-foreground">
                              Amount Requested:
                            </span>
                            <span className="text-foreground ml-2 font-medium">
                              {
                                fundingOptions.find(
                                  (o) => o.value === formData.fundingAmount
                                )?.label
                              }
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Purpose:
                            </span>
                            <span className="text-foreground ml-2 font-medium">
                              {formData.fundingPurpose}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Contact Summary */}
                      <div className="bg-muted rounded-xl p-5">
                        <h3 className="font-bold text-foreground mb-3">
                          Contact Information
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-muted-foreground">Name:</span>
                            <span className="text-foreground ml-2 font-medium">
                              {formData.firstName} {formData.lastName}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Email:</span>
                            <span className="text-foreground ml-2 font-medium">
                              {formData.email}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Phone:</span>
                            <span className="text-foreground ml-2 font-medium">
                              {formData.phone}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Agreement */}
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-muted-foreground">
                          I agree to the{" "}
                          <Link
                            href="#"
                            className="text-primary hover:underline"
                          >
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="#"
                            className="text-primary hover:underline"
                          >
                            Privacy Policy
                          </Link>
                          . I understand that submitting this application does not
                          guarantee funding approval.
                        </span>
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="inline-flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <HiArrowLeft className="w-5 h-5" />
                  Back
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <HiArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid() || isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <HiArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: HiShieldCheck, text: "256-bit SSL Encryption" },
              { icon: HiClock, text: "24hr Decision" },
              { icon: HiCash, text: "No Hidden Fees" },
              { icon: HiLightningBolt, text: "Same-Day Funding" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-background rounded-xl p-3 justify-center"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

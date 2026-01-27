"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiArrowRight,
  HiCheck,
  HiShieldCheck,
  HiLightningBolt,
  HiUserGroup,
  HiHeart,
  HiStar,
} from "react-icons/hi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const values = [
  {
    icon: HiShieldCheck,
    title: "Transparency",
    description:
      "No hidden fees, no surprises. We believe in clear, honest communication at every step.",
  },
  {
    icon: HiLightningBolt,
    title: "Speed",
    description:
      "Time is money. We streamline our processes to get you funded as quickly as possible.",
  },
  {
    icon: HiUserGroup,
    title: "Partnership",
    description:
      "We see ourselves as your partners in growth, not just a funding source.",
  },
  {
    icon: HiHeart,
    title: "Care",
    description:
      "Every business matters to us. We provide personalized attention to understand your unique needs.",
  },
];

const team = [
  {
    name: "Michael Johnson",
    role: "CEO & Founder",
    image: "/images/team-1.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Chief Operations Officer",
    image: "/images/team-2.jpg",
  },
  {
    name: "David Chen",
    role: "Head of Underwriting",
    image: "/images/team-3.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Client Success Director",
    image: "/images/team-4.jpg",
  },
];

export default function AboutPage() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  About Us
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Empowering Businesses to{" "}
                <span className="text-primary">Reach Their Potential</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                At Bright Funding Solution, we believe every business deserves
                access to the capital they need to grow. Founded on principles of
                transparency, speed, and partnership, we have helped thousands of
                businesses achieve their goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Get Started
                  <HiArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all border border-border"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div
                  className="aspect-[4/3] rounded-3xl overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)",
                  }}
                >
                  <Image
                    src="/images/about-team.jpg"
                    alt="Our Team"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      <HiStar className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold block">10+</span>
                      <span className="text-sm opacity-80">
                        Years Experience
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 50, suffix: "M+", label: "Funded to Date" },
              { value: 5000, suffix: "+", label: "Businesses Helped" },
              { value: 98, suffix: "%", label: "Satisfaction Rate" },
              { value: 24, suffix: "hr", label: "Avg. Approval" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl font-bold text-primary">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </span>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/images/hero-business.jpg"
                      alt="Business consultation"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                    <span className="text-3xl font-bold">$50M+</span>
                    <p className="text-sm opacity-80 mt-1">Total Funded</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-accent/20 rounded-2xl p-6">
                    <span className="text-3xl font-bold text-foreground">
                      5,000+
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Happy Clients
                    </p>
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/images/business-growth.jpg"
                      alt="Business success"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built on a Mission to Help Small Businesses Thrive
              </h2>
              <p className="text-muted-foreground mb-6">
                Bright Funding Solution was founded with a simple belief: small
                and medium-sized businesses are the backbone of our economy, and
                they deserve better access to capital.
              </p>
              <p className="text-muted-foreground mb-6">
                Traditional banks often overlook these businesses due to
                complicated approval processes and rigid requirements. We saw an
                opportunity to do things differently - to provide fast, flexible
                funding with transparent terms and genuine care for our clients.
              </p>
              <p className="text-muted-foreground mb-8">
                Today, we have helped over 5,000 businesses secure the funding
                they need to grow, hire, expand, and succeed. And we are just
                getting started.
              </p>

              <div className="space-y-3">
                {[
                  "Dedicated to small business success",
                  "Transparent and honest in all dealings",
                  "Fast approvals without the red tape",
                  "Personal service from real people",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <HiCheck className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Values
              </span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Everything We Do
            </h2>
            <p className="text-muted-foreground">
              Our core values guide every decision we make and every interaction
              we have with our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-muted rounded-2xl p-6 text-center group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Leadership
              </span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the Team Behind Your Success
            </h2>
            <p className="text-muted-foreground">
              Our experienced leadership team brings decades of combined
              experience in business finance and customer service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-background rounded-2xl overflow-hidden">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                      <span className="text-6xl font-bold text-primary/30">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </div>
                </div>
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
              Ready to Partner With Us?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join thousands of businesses who have trusted Bright Funding
              Solution to help them grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
              >
                Apply Now
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

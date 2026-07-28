"use client";

import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { FadeIn } from "../motion/FadeIn";
import { StaggeredGrid, StaggerItem } from "../motion/StaggeredGrid";
import { Globe, LayoutDashboard, MonitorCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProductShowcase() {
  const products = [
    {
      num: "#1",
      icon: Globe,
      title: "School Websites",
      description:
        "Fast, mobile-friendly, built specifically for how parents and prospective families actually search for a school.",
      href: "/solutions/websites",
    },
    {
      num: "#2",
      icon: LayoutDashboard,
      title: "School Management System",
      description:
        "Admissions, fees, attendance, and results in one system your staff actually wants to use.",
      href: "/solutions/management-system",
    },
    {
      num: "#3",
      icon: MonitorCheck,
      title: "CBT Installations",
      description:
        "Secure computer-based testing, deployed and configured for your computer lab.",
      href: "/solutions/cbt",
    },
  ];

  return (
    <Section variant="dark" className="py-24 bg-slate-900 text-white">
      <div className="space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <FadeIn direction="up">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-blue-400">
              What we build
            </span>
            <Heading as="h2" className="text-3xl sm:text-4xl text-white mt-2">
              Three products. One partner. Full ownership.
            </Heading>
          </FadeIn>
        </div>

        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <StaggerItem key={prod.num}>
                <div className="p-8 bg-slate-800/80 rounded-2xl border border-slate-700/80 flex flex-col justify-between h-full space-y-6 hover:border-slate-600 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-heading font-bold text-slate-500">
                        {prod.num}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white">
                      {prod.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  <Link
                    href={prod.href}
                    className="inline-flex items-center text-xs font-heading font-bold text-blue-400 hover:text-blue-300 transition-colors group pt-4"
                  >
                    Learn more about {prod.title}
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggeredGrid>

        <FadeIn direction="up" delay={0.3}>
          <div className="text-center pt-4">
            <Paragraph size="sm" className="text-slate-400 font-medium">
              Every product: one payment, full system ownership, nothing recurring.
            </Paragraph>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

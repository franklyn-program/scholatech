"use client";

import { useRef } from "react";
import Image from "next/image";
import { FadeIn } from "../motion/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#050816] text-white z-10 border-b border-white/10"
    >
      {/* Background Image - Sharper and clearly visible */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero/hero-stitch.png"
          alt="Scholatech School Tech Infrastructure"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/75 via-[#050816]/60 to-[#050816]/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Hero Content & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow Pill */}
            <FadeIn direction="down">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0A1020]/90 border border-white/10 text-[#5A7DFF] shadow-lg backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-xs font-heading font-bold tracking-widest uppercase text-[#F8FAFC]">
                  INFRASTRUCTURE YOU OWN · ZERO SUBSCRIPTIONS
                </span>
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-heading font-extrabold tracking-tight text-[#F8FAFC] leading-[1.08]">
                Own your school&apos;s tech. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#5A7DFF] to-[#4169FF]">
                  Even the exam system. Even offline.
                </span>
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn direction="up" delay={0.2}>
              <p className="text-base sm:text-xl text-[#AAB4C5] max-w-2xl leading-relaxed font-normal">
                Custom school management portals and 100% offline CBT infrastructure for Nigerian schools. Built once on your hardware, owned forever with zero subscription fees.
              </p>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <MagneticButton>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#4169FF] hover:bg-[#3451D1] text-white font-heading font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all duration-300 group"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="#offline-cbt"
                    className="inline-flex items-center justify-center gap-2 bg-[#111827]/90 hover:bg-[#1A2338] text-[#F8FAFC] font-heading font-semibold text-sm px-8 py-4 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300"
                  >
                    <span>See Offline CBT</span>
                  </a>
                </MagneticButton>
              </div>
            </FadeIn>

            {/* Value Guarantees Grid */}
            <FadeIn direction="up" delay={0.4}>
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-medium text-[#AAB4C5]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Full Source Code Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Zero Recurring SaaS Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#4169FF] shrink-0" />
                  <span>Tailored for Nigerian Schools</span>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Right Column: Clean Contact Form Container */}
          <div id="contact" className="lg:col-span-5 scroll-mt-28">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-[#0A1020]/50 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-2xl">
                
                {/* Form Header */}
                <div className="pb-3 border-b border-white/10">
                  <h3 className="text-xl font-heading font-extrabold text-[#F8FAFC]">
                    Contact Us
                  </h3>
                  <p className="text-xs text-[#AAB4C5] mt-1">
                    Send us a message to discuss your school&apos;s requirements.
                  </p>
                </div>

                {/* Form Component */}
                <QuoteRequestForm />

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
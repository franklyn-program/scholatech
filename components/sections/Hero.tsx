"use client";

import { useRef } from "react";
import Image from "next/image";
import { FadeIn } from "../motion/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { ShieldCheck, CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.488-8.413z" />
    </svg>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#0E1B38] text-white z-10 border-b border-white/10"
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1B38]/75 via-[#0E1B38]/60 to-[#0E1B38]/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Hero Content & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Eyebrow Pill */}
            <FadeIn direction="down">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#162347]/90 border border-white/15 text-[#60A5FA] shadow-lg backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-[12px] sm:text-xs font-heading font-bold tracking-widest uppercase text-[#F8FAFC]">
                  INFRASTRUCTURE YOU OWN · ZERO SUBSCRIPTIONS
                </span>
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-[28px] sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-[#F8FAFC] leading-[1.15] sm:leading-[1.08] text-center lg:text-left">
                Own your school&apos;s tech space and exam system. <br className="hidden md:inline" />
                <span className="text-[#60A5FA]">
                  Also available offline.
                </span>
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn direction="up" delay={0.2}>
              <p className="text-[11px] sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal text-center lg:text-left mx-auto lg:mx-0">
                Custom school management portals and 100% offline CBT infrastructure for Nigerian schools. Built once on your hardware, owned permanently with zero subscription fees.
              </p>
            </FadeIn>

            {/* Action Buttons - 32px spacing (mt-8 / pt-8) */}
            <FadeIn direction="up" delay={0.3} className="pt-8 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-heading font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg transition-all duration-300 group"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </MagneticButton>

                <MagneticButton className="w-full sm:w-auto">
                  <a
                    href="#offline-cbt"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#162347]/90 hover:bg-[#1C2C59] text-[#F8FAFC] font-heading font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/15 backdrop-blur-md transition-all duration-300"
                  >
                    <span>See Offline CBT</span>
                  </a>
                </MagneticButton>
              </div>
            </FadeIn>

            {/* Value Guarantees Grid */}
            <FadeIn direction="up" delay={0.4}>
              <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-medium text-slate-300 w-full text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Full Transfer of System & Database Ownership</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Zero Recurring SaaS Fees</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Tailored for Nigerian Schools</span>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Right Column: Clean Contact Form Container */}
          <div id="contact" className="lg:col-span-5 scroll-mt-28 w-full">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-[#0E1B38]/30 border border-white/5 rounded-2xl p-5 sm:p-8 space-y-4 sm:space-y-5 shadow-2xl backdrop-blur-md">
                
                {/* Form Header with WhatsApp Icon */}
                <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-extrabold text-[#F8FAFC]">
                      Contact Us
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Send us a message to discuss your school&apos;s requirements.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/2348129973621?text=Hello%20Scholatech%2C%20I%20would%20like%20to%20inquire%20about%20your%20school%20software%20and%20CBT%20solutions."
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp"
                    aria-label="Chat on WhatsApp"
                    className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all shrink-0 ml-3"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
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
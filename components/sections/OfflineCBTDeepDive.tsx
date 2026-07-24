"use client";

import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { FadeIn } from "../motion/FadeIn";
import { Info } from "lucide-react";

export function OfflineCBTDeepDive() {
  const steps = [
    {
      num: 1,
      title: "Local Server Setup",
      description:
        "A dedicated computer in your school acts as the \"Exam Brain.\" All exam questions are loaded onto it before the test begins.",
    },
    {
      num: 2,
      title: "Internal Network Link",
      description:
        "Student computers connect to this local server via your school's Wi-Fi or cables. They aren't \"on the internet\"—they're just talking to the room's server.",
    },
    {
      num: 3,
      title: "Zero-Lag Testing",
      description:
        "Because data only travels across the room, pages load instantly. No \"spinning wheels\" or disconnected sessions when a student clicks 'Next'.",
    },
    {
      num: 4,
      title: "Cloud Sync (Optional)",
      description:
        "Once exams are finished, a single click syncs the results to your central cloud management portal for parent access.",
    },
  ];

  return (
    <section id="offline-cbt" className="py-20 sm:py-28 bg-[#0F172A] text-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <FadeIn direction="up">
            <Heading darkBg as="h2" className="text-3xl sm:text-4xl text-white">
              How Offline CBT Works
            </Heading>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <Paragraph darkBg size="lg" className="text-slate-300">
              Technical reliability, simplified for school leaders.
            </Paragraph>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center font-bold text-white shadow-lg">
                  {step.num}
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-lg text-white">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <div className="p-8 bg-slate-800/90 rounded-2xl border border-primary-blue/30 space-y-3">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-blue-400" />
              <h4 className="font-heading font-bold text-base text-blue-300">
                Why this saves you money
              </h4>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Unlike other vendors, we don&apos;t charge a &quot;per-student&quot; fee for exams. Whether you have 50 students or 5,000, your cost to run an exam session is effectively zero after the initial setup.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

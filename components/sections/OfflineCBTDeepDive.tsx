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
    <section id="offline-cbt" className="py-20 sm:py-28 bg-[#F4F7FC] text-slate-900 scroll-mt-20 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <FadeIn direction="up">
            <span className="inline-block px-3 py-1 bg-blue-100/80 border border-blue-200 text-blue-700 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2">
              Infrastructure Blueprint
            </span>
            <Heading as="h2" className="text-3xl sm:text-4xl text-slate-900">
              How Offline CBT Works
            </Heading>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <Paragraph size="lg" className="text-slate-600">
              Technical reliability, simplified for school leaders.
            </Paragraph>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="grid grid-cols-1 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex gap-5 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#4169FF] flex items-center justify-center font-bold text-white shadow-md text-base">
                  {step.num}
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-lg text-slate-900">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <div className="p-6 sm:p-8 bg-white rounded-2xl border-l-4 border-[#4169FF] border border-slate-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-[#4169FF]" />
              <h4 className="font-heading font-bold text-base text-slate-900">
                Why this saves you money
              </h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unlike other vendors, we don&apos;t charge a &quot;per-student&quot; fee for exams. Whether you have 50 students or 5,000, your cost to run an exam session is effectively zero after the initial setup.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
"use client";

import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { FadeIn } from "../motion/FadeIn";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      q: "What happens if we have a technical issue after the build?",
      a: "Every project comes with a 6-month intensive support warranty. After that, you can opt for a low-cost maintenance retainer or train your own IT staff to handle basic management; since you own the system, you aren't forced to use us for every small change.",
    },
    {
      q: "Do we need to buy new computers for the offline CBT?",
      a: "Generally, no. If your computers can run a modern web browser, they can run our CBT system. We optimize the local server to do the heavy lifting.",
    },
    {
      q: "Is my data safe if it's on a local server?",
      a: "Yes. We implement automated encrypted backups both locally and to a private cloud vault. You have more control over your security than with a generic provider.",
    },
    {
      q: "How long does a custom build take?",
      a: "A typical school management portal and CBT setup takes between 6 to 10 weeks, depending on the complexity of your grading rules and data migration.",
    },
  ];

  return (
    <Section variant="soft" className="py-20 bg-slate-50 border-t border-b border-slate-200/60">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <FadeIn direction="up">
            <Heading as="h2" className="text-3xl sm:text-4xl text-slate-900">
              Frequently Asked Questions
            </Heading>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm transition-all overflow-hidden"
              >
                <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-heading font-bold text-slate-900 text-base sm:text-lg select-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

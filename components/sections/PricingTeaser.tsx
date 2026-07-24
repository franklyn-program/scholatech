"use client";

import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Button } from "../ui/Button";
import { FadeIn } from "../motion/FadeIn";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function PricingTeaser() {
  return (
    <Section variant="soft" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <FadeIn direction="up">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-primary-blue">
            Pricing model
          </span>
          <Heading as="h2" className="text-3xl sm:text-4xl text-slate-900 mt-2">
            Simple, one-time pricing
          </Heading>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <Paragraph size="lg" className="text-slate-600 max-w-2xl mx-auto">
            Every project is scoped to your school&apos;s size and needs. Packages start from{" "}
            <span className="font-mono bg-slate-200/60 px-2 py-0.5 rounded text-slate-800 text-sm font-semibold">
              [PLACEHOLDER — insert real starting price once decided]
            </span>
          </Paragraph>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-xl mx-auto space-y-6">
            <div className="flex items-center justify-center gap-2 text-accent-green font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>Includes Full Source Code & Database</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              No per-student fees. No monthly recurring charges. You pay once for development and deployment, and your school owns the software forever.
            </p>

            <div className="pt-2">
              <Button asChild size="lg">
                <a href="/pricing">
                  See full pricing packages
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

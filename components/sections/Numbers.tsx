"use client";

import { Section } from "../layout/Section";
import { FadeIn } from "../motion/FadeIn";
import { CheckCircle } from "lucide-react";

export function Numbers() {
  return (
    <Section variant="dark" className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left items-center">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-accent-green font-bold text-sm tracking-wider uppercase">
                <CheckCircle className="w-4 h-4" />
                Guaranteed Ownership Policy
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                100% Source Code Ownership
              </h3>
              <p className="text-sm text-slate-400">
                You receive every line of code, repository access, and database migration script on final delivery.
              </p>
            </div>

            <div className="p-6 bg-slate-800/60 rounded-xl border border-slate-700/60 space-y-3">
              <span className="text-xs font-mono text-slate-400 block uppercase tracking-widest">
                [PLACEHOLDER — Stats & Track Record]
              </span>
              <p className="text-xs text-slate-400 leading-relaxed italic">
                Client delivery statistics and school onboarding numbers will be displayed here once real project milestones are verified.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

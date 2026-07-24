"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Payment Model", typical: "Monthly/annual subscription", scholatech: "One-time payment" },
  { feature: "Access after you stop paying", typical: "Lost instantly", scholatech: "Yours forever" },
  { feature: "Source code", typical: "Closed & locked", scholatech: "Delivered to you" },
  { feature: "Customization", typical: "Limited by vendor", scholatech: "Fully yours to modify" },
  { feature: "Long-term cost", typical: "Compounds every year", scholatech: "Fixed. Done." },
];

export function ComparisonTable() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-slate-100 bg-[#F5F7FB]">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold tracking-widest uppercase"
          >
            Why Own vs. Subscribe
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight"
          >
            See the difference.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600"
          >
            Paying once for full ownership beats recurring vendor subscriptions every time.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg bg-white"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-5 font-heading font-bold text-sm text-slate-400 w-1/3" />
                <th className="p-5 font-heading font-bold text-sm text-slate-500 w-1/3 text-center">Typical Vendor</th>
                <th className="p-5 font-heading font-bold text-sm text-[#4169FF] w-1/3 text-center bg-blue-50/60 border-l border-blue-100">Scholatech</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {rows.map((row, idx) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group hover:bg-slate-50/80 transition-colors duration-200"
                >
                  <td className="p-5 font-medium text-slate-800">{row.feature}</td>
                  <td className="p-5 text-center text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <X className="w-4 h-4 text-red-400 shrink-0" />
                      {row.typical}
                    </span>
                  </td>
                  <td className="p-5 text-center font-bold bg-blue-50/40 border-l border-blue-100 group-hover:bg-blue-50/80 transition-colors duration-200">
                    <span className="inline-flex items-center gap-1.5 text-[#4169FF]">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      {row.scholatech}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from "lucide-react";

export function QuoteRequestForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams ? searchParams.get("service") : null;

  const [formData, setFormData] = useState({
    name: "",
    school_name: "",
    email: "",
    phone: "",
    service_needed: "School Management System",
    message: "",
    website_hp: "",
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service_needed: preselectedService }));
    }
  }, [preselectedService]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (formData.website_hp) {
      setSuccess(true);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to send quote request. Please try again.");
      }

      setSuccess(true);
    } catch (err: any) {
      console.error("Quote submission error:", err);
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    const mailtoSubject = encodeURIComponent(`[Quote Request] ${formData.school_name} - ${formData.service_needed}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nSchool: ${formData.school_name}\nPhone: ${formData.phone}\nService: ${formData.service_needed}\nMessage: ${formData.message}`);

    return (
      <div className="bg-[#050816] border border-[#10B981]/40 rounded-2xl p-6 text-center space-y-4 shadow-2xl">
        <div className="w-12 h-12 bg-[#10B981]/20 text-[#10B981] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-heading font-extrabold text-xl text-[#F8FAFC]">
          Quote Request Received!
        </h3>
        <p className="text-[#AAB4C5] text-xs leading-relaxed max-w-sm mx-auto">
          Sent to Lead Architect at{" "}
          <span className="font-mono text-[11px] font-bold text-[#5A7DFF] bg-[#4169FF]/10 px-2 py-0.5 rounded border border-[#4169FF]/30">
            agboseakade1@gmail.com
          </span>. We will respond within 24 hours.
        </p>

        <div className="pt-2 flex flex-col gap-2">
          <a
            href={`mailto:agboseakade1@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#4169FF] hover:bg-[#6D8DFF] text-white font-heading font-bold text-xs py-3 px-4 rounded-full transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Open Email App Directly</span>
          </a>

          <button
            onClick={() => {
              setSuccess(false);
              setFormData({
                name: "",
                school_name: "",
                email: "",
                phone: "",
                service_needed: "School Management System",
                message: "",
                website_hp: "",
              });
            }}
            className="text-[11px] text-[#AAB4C5] hover:text-white underline pt-1"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 font-sans text-left">
      {errorMsg && (
        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          id="website_hp"
          name="website_hp"
          tabIndex={-1}
          value={formData.website_hp}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="name" className="block text-[10px] font-heading font-bold uppercase tracking-wider text-[#AAB4C5] mb-1">
            Full Name <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="e.g. Dr. Frank Okonjo"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-[#050816] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#4169FF] transition-colors placeholder:text-[#7A879C]"
          />
        </div>

        <div>
          <label htmlFor="school_name" className="block text-[10px] font-heading font-bold uppercase tracking-wider text-[#AAB4C5] mb-1">
            School Name <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            id="school_name"
            name="school_name"
            required
            placeholder="e.g. Royal Rangers Academy"
            value={formData.school_name}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-[#050816] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#4169FF] transition-colors placeholder:text-[#7A879C]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="email" className="block text-[10px] font-heading font-bold uppercase tracking-wider text-[#AAB4C5] mb-1">
            Email Address <span className="text-rose-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="e.g. admin@school.edu.ng"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-[#050816] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#4169FF] transition-colors placeholder:text-[#7A879C]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[10px] font-heading font-bold uppercase tracking-wider text-[#AAB4C5] mb-1">
            Phone (WhatsApp) <span className="text-rose-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="e.g. +234 803 000 0000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-[#050816] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#4169FF] transition-colors placeholder:text-[#7A879C]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service_needed" className="block text-[10px] font-heading font-bold uppercase tracking-wider text-[#AAB4C5] mb-1">
          Primary Product Needed <span className="text-rose-400">*</span>
        </label>
        <select
          id="service_needed"
          name="service_needed"
          value={formData.service_needed}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-[#050816] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#4169FF] transition-colors"
        >
          <option value="School Website and Portal">School Website and Portal (Admissions and Results)</option>
          <option value="School Management System">School Management System (Fees and Full Admin)</option>
          <option value="100% Offline CBT Lab">100% Offline CBT Lab Software Installation</option>
          <option value="Full Studio Package (Web + SMS + CBT)">Full Studio Package (Web + SMS + CBT)</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-[10px] font-heading font-bold uppercase tracking-wider text-[#AAB4C5] mb-1">
          Details / Timeline (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Student count, current setup, target launch date..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-[#050816] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#4169FF] transition-colors placeholder:text-[#7A879C]"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#4169FF] hover:bg-[#6D8DFF] text-white font-heading font-bold text-xs shadow-[0_0_25px_rgba(65,105,255,0.4)] transition-all duration-300 disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-1" /> Submitting...
          </>
        ) : (
          <>
            <span>Request Your Scoping and Quote</span>
            <Send className="w-3.5 h-3.5 ml-1" />
          </>
        )}
      </button>
    </form>
  );
}
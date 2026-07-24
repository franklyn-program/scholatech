"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

function QuoteRequestFormInner() {
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
        throw new Error(data.error || "Unable to send request. Please try again.");
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
    return (
      <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
        <h4 className="font-heading font-extrabold text-lg text-white">Message Sent Successfully!</h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          Thank you for reaching out. Our team will contact you shortly via email or WhatsApp to discuss your requirements.
        </p>
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
          className="text-xs text-[#60A5FA] underline pt-2 inline-block font-mono"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field for bot protection */}
      <input
        type="text"
        name="website_hp"
        value={formData.website_hp}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {errorMsg && (
        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="name" className="block text-[10px] font-heading font-bold uppercase tracking-wider text-slate-300 mb-1">
            Your Full Name <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="e.g. Dr. Frank Okonjo"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#0E1B38]/70 backdrop-blur-md text-[#F8FAFC] text-xs focus:outline-none focus:border-[#3B82F6] transition-colors placeholder:text-slate-400"
          />
        </div>

        <div>
          <label htmlFor="school_name" className="block text-[10px] font-heading font-bold uppercase tracking-wider text-slate-300 mb-1">
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
            className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#0E1B38]/70 backdrop-blur-md text-[#F8FAFC] text-xs focus:outline-none focus:border-[#3B82F6] transition-colors placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="email" className="block text-[10px] font-heading font-bold uppercase tracking-wider text-slate-300 mb-1">
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
            className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#0E1B38]/70 backdrop-blur-md text-[#F8FAFC] text-xs focus:outline-none focus:border-[#3B82F6] transition-colors placeholder:text-slate-400"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[10px] font-heading font-bold uppercase tracking-wider text-slate-300 mb-1">
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
            className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#0E1B38]/70 backdrop-blur-md text-[#F8FAFC] text-xs focus:outline-none focus:border-[#3B82F6] transition-colors placeholder:text-slate-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service_needed" className="block text-[10px] font-heading font-bold uppercase tracking-wider text-slate-300 mb-1">
          Primary Solution Needed <span className="text-rose-400">*</span>
        </label>
        <select
          id="service_needed"
          name="service_needed"
          value={formData.service_needed}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#0E1B38]/70 backdrop-blur-md text-[#F8FAFC] text-xs focus:outline-none focus:border-[#3B82F6] transition-colors"
        >
          <option value="School Website and Portal" className="bg-[#0E1B38] text-white">School Website & Portal (₦150k)</option>
          <option value="School Management System" className="bg-[#0E1B38] text-white">School Management System (₦300k)</option>
          <option value="100% Offline CBT Lab" className="bg-[#0E1B38] text-white">100% Offline CBT Lab (₦300k)</option>
          <option value="Full Studio Package (Web + SMS + CBT)" className="bg-[#0E1B38] text-white">Full Package (Web + SMS + CBT)</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-[10px] font-heading font-bold uppercase tracking-wider text-slate-300 mb-1">
          Details / Timeline (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Student count, current setup, target launch date..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#0E1B38]/70 backdrop-blur-md text-[#F8FAFC] text-xs focus:outline-none focus:border-[#3B82F6] transition-colors placeholder:text-slate-400"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-heading font-bold text-xs shadow-lg transition-all duration-300 disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-1" /> Submitting...
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-3.5 h-3.5 ml-1" />
          </>
        )}
      </button>
    </form>
  );
}

export function QuoteRequestForm() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-[#3B82F6]" />
          <span>Loading form...</span>
        </div>
      }
    >
      <QuoteRequestFormInner />
    </Suspense>
  );
}
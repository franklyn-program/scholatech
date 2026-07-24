import * as React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: string | number;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
    ctaText?: string;
    href?: string;
}

function CreativePricing({
    tag = "100% Ownership · Zero Subscription Tax",
    title = "Investment built once. Owned forever.",
    description = "We don't charge per student or per month. Every package includes custom engineering, full source code delivery, database setup, and staff onboarding.",
    tiers,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
}) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050816] border border-white/10 text-[#5A7DFF] text-xs font-mono font-bold tracking-widest uppercase">
                    {tag}
                </div>
                <div className="relative max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                        {title}
                    </h2>
                </div>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative group flex flex-col justify-between",
                            "transition-all duration-300",
                            index === 0 && "rotate-[-1deg]",
                            index === 1 && "rotate-[1deg]",
                            index === 2 && "rotate-[-1deg]"
                        )}
                    >
                        <div
                            className={cn(
                                "absolute inset-0 bg-[#050816] dark:bg-[#050816]",
                                "border-2 border-white/20",
                                "rounded-2xl shadow-[6px_6px_0px_0px] shadow-[#4169FF]/40",
                                "transition-all duration-300",
                                "group-hover:shadow-[10px_10px_0px_0px] group-hover:shadow-[#4169FF]",
                                "group-hover:translate-x-[-3px]",
                                "group-hover:translate-y-[-3px]",
                                tier.popular && "border-[#10B981] shadow-[#10B981]/50 group-hover:shadow-[#10B981]"
                            )}
                        />

                        <div className="relative p-6 sm:p-8 flex flex-col justify-between h-full z-10 space-y-6">
                            <div>
                                {tier.popular && (
                                    <div
                                        className="absolute -top-3 -right-2 bg-[#10B981] text-[#050816] 
                                        font-heading font-extrabold px-3 py-1 rounded-full rotate-6 text-xs border-2 border-white shadow-lg"
                                    >
                                        Most Popular!
                                    </div>
                                )}

                                <div className="mb-6">
                                    <div
                                        className={cn(
                                            "w-12 h-12 rounded-xl mb-4",
                                            "flex items-center justify-center",
                                            "border-2 border-white/20 bg-[#050816]",
                                            "text-[#5A7DFF]"
                                        )}
                                    >
                                        {tier.icon}
                                    </div>
                                    <h3 className="font-heading font-extrabold text-2xl text-white mb-1">
                                        {tier.name}
                                    </h3>
                                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                                        {tier.description}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <span className="text-2xl font-extrabold font-heading text-[#10B981]">
                                        {typeof tier.price === 'number' ? $ : tier.price}
                                    </span>
                                    <span className="text-xs text-slate-400 block font-mono mt-0.5">
                                        One-time payment · Owned forever
                                    </span>
                                </div>

                                <div className="space-y-3 mb-6 pt-4 border-t border-white/10">
                                    {tier.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-start gap-2.5 text-xs text-slate-300"
                                        >
                                            <div
                                                className="w-4 h-4 rounded-full border border-[#10B981] 
                                                flex items-center justify-center shrink-0 mt-0.5 text-[#10B981]"
                                            >
                                                <Check className="w-2.5 h-2.5" />
                                            </div>
                                            <span>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button
                                asChild
                                className={cn(
                                    "w-full h-12 font-heading font-bold text-xs relative rounded-full",
                                    "border-2 border-white/20",
                                    "transition-all duration-300",
                                    "shadow-[4px_4px_0px_0px] shadow-[#4169FF]/50",
                                    "hover:shadow-[6px_6px_0px_0px]",
                                    "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                                    tier.popular
                                        ? [
                                              "bg-[#10B981] text-[#050816]",
                                              "hover:bg-[#059669]",
                                              "shadow-[#10B981]/50"
                                          ]
                                        : [
                                              "bg-[#050816]",
                                              "text-white",
                                              "hover:bg-[#050816]/80"
                                          ]
                                )}
                            >
                                <a href={tier.href || "#contact"}>
                                    {tier.ctaText || "Contact Us"}
                                </a>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { CreativePricing, type PricingTier };
"use client";

import { Check, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Prices() {
  const { t } = useLanguage();
  
  const plans = [
    {
      name: t("prices.planName"),
      price: "$600",
      period: t("prices.period"),
      popular: true,
      location: "Alabama",
      features: [
        t("prices.f1"),
        t("prices.f2"),
        t("prices.f3"),
        t("prices.f4"),
        t("prices.f5"),
        t("prices.f6"),
      ],
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="prices">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#1d4ed8]" />
            <span className="text-[#1d4ed8] font-bold tracking-widest text-xs uppercase">
              {t("prices.subheader")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[0.95] uppercase">
            {t("prices.title1")} <br />
            <span className="outline-text">{t("prices.title2")}</span>
          </h2>
        </div>

        <div className="flex justify-center relative">
          {plans.map((plan, index) => (
            <div key={index} className="relative max-w-md w-full">
              {/* Vertical Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-gray-200 ml-[11px] z-0" />

              {/* Section Title */}
              <div className="relative z-10 flex items-center gap-6 mb-12">
                <div className="w-6 h-6 rounded-full bg-[#1d4ed8] flex items-center justify-center shadow-[0_0_15px_rgba(29,78,216,0.2)]">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="flex items-center gap-4">
                  <h3 className="text-gray-900 font-bold text-lg tracking-widest uppercase">
                    {plan.name}
                  </h3>
                  {plan.location && (
                    <span className="bg-blue-50 text-[#1d4ed8] text-[10px] font-bold px-3 py-1 rounded-full border border-blue-100 uppercase tracking-tighter">
                      {plan.location}
                    </span>
                  )}
                  <div className="h-[2px] w-8 bg-[#1d4ed8] mt-1" />
                </div>
              </div>

              {/* Price Card */}
              <div className="ml-12 mb-8 group">
                <div className="bg-white border border-gray-100 p-6 rounded-lg transition-all hover:border-[#1d4ed8]/30 hover:shadow-lg shadow-blue-500/5">
                  <span className="text-[#1d4ed8] text-xs font-bold tracking-widest mb-2 block">{t("prices.annualPrice")}</span>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                    <span className="text-gray-400 text-xs ml-2">/ {plan.period}</span>
                  </div>
                </div>
              </div>

              {/* Features Node */}
              <div className="relative z-10 flex items-start gap-6 ml-0">
                 <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-2">
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-lg flex-1 transition-all hover:border-[#1d4ed8]/20 hover:shadow-lg shadow-blue-500/5">
                   <span className="text-[#1d4ed8] text-xs font-bold tracking-widest mb-4 block uppercase">{t("prices.included")}</span>
                   <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600 text-sm font-light">
                        <Check className="w-3.5 h-3.5 text-[#1d4ed8] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full mt-8 py-3 rounded-md text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    plan.popular 
                      ? "bg-[#1d4ed8] text-white hover:bg-[#1e40af] shadow-lg shadow-blue-500/20" 
                      : "bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200"
                  }`}>
                    {t("prices.getStarted")} <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

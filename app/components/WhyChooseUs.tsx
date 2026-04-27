"use client";

import { useState, useEffect } from "react";
import { Landmark, Shield, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      id: 0,
      title: t("whyUs.feature1.title"),
      description: t("whyUs.feature1.desc"),
      icon: Landmark,
    },
    {
      id: 1,
      title: t("whyUs.feature2.title"),
      description: t("whyUs.feature2.desc"),
      icon: Shield,
    },
    {
      id: 2,
      title: t("whyUs.feature3.title"),
      description: t("whyUs.feature3.desc"),
      icon: Lock,
    },
  ];

  const stats = [
    { value: "100", label: t("whyUs.stat1") },
    { value: "6", label: t("whyUs.stat2") },
    { value: "16", label: t("whyUs.stat3") },
    { value: "110", label: t("whyUs.stat4") },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [features.length]);

  // Math: x = r * cos(theta), y = r * sin(theta)
  // Hardcoded the 6 positions for perfect alignment in percentage:
  const getCoordinates = (index: number) => {
    const positions = [
      { top: "10%", left: "50%" },   // Top
      { top: "75%", left: "85%" },  // Bottom Right
      { top: "75%", left: "15%" },  // Bottom Left
    ];
    return positions[index];
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="why-choose-us">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#f8faff] rounded-bl-[80px] -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#1d4ed8]" />
            <span className="text-[#1d4ed8] font-bold tracking-widest text-xs uppercase">
              {t("whyUs.subheader")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[0.95] uppercase">
            {t("whyUs.title1")} <br />
            <span className="outline-text">{t("whyUs.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          
          {/* Left Column - Circular Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[480px] aspect-square mx-auto"
          >
            {/* The thin rotating dashed circle */}
            <div className="absolute inset-8 rounded-full border-2 border-dashed border-gray-200 animate-[spin_40s_linear_infinite]" />

            {/* Central Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {features[activeIndex].title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {features[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Icons around the circle */}
            {features.map((feature, index) => {
              const pos = getCoordinates(index);
              const isActive = activeIndex === index;
              const Icon = feature.icon;

              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute w-12 h-12 md:w-16 md:h-16 -mt-6 -ml-6 md:-mt-8 md:-ml-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.06)] z-20 ${
                    isActive 
                      ? "bg-[#1d4ed8] text-white scale-110" 
                      : "bg-white text-blue-500 hover:scale-105"
                  }`}
                  style={{ top: pos.top, left: pos.left }}
                >
                  <Icon className={`w-5 h-5 md:w-6 h-6 ${isActive ? "text-white" : "text-[#1d4ed8]"}`} />
                </button>
              );
            })}
          </motion.div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 pl-0 lg:pl-10">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <div className="flex items-start mb-1">
                  <span className="text-3xl lg:text-4xl font-bold text-gray-900 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-lg font-bold text-[#1d4ed8] ml-1">+</span>
                </div>
                <span className="text-sm font-semibold text-gray-500 tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

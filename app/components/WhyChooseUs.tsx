"use client";

import { useState } from "react";
import { Star, User, Lightbulb, TrendingUp, Wrench, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: 0,
    title: "Experience",
    description: "Many years of work in this field is an excellent indicator that companies trust us and in response, we offer unique solutions.",
    icon: Star,
  },
  {
    id: 1,
    title: "Expertise",
    description: "Our team consists of highly qualified professionals who deeply understand the nuances of the US market and corporate structures.",
    icon: User,
  },
  {
    id: 2,
    title: "Innovation",
    description: "We utilize modern strategies and tools to provide efficient, fast, and reliable business structuring services.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Growth",
    description: "We focus on long-term scalability, ensuring your newly formed business is set up for continuous expansion.",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Support",
    description: "Dedicated maintenance and continuous technical support to keep your operations running flawlessly.",
    icon: Wrench,
  },
  {
    id: 5,
    title: "Security",
    description: "Your data and legal processes are handled with the highest level of confidentiality and regulatory compliance.",
    icon: ShieldCheck,
  },
];

const stats = [
  { value: "100", label: "HAPPY CLIENTS" },
  { value: "6", label: "YEARS OF EXPERIENCE" },
  { value: "16", label: "MARKETING CUSTOMERS" },
  { value: "110", label: "SUCCESSFUL PROJECTS" },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Math: x = r * cos(theta), y = r * sin(theta)
  // Hardcoded the 6 positions for perfect alignment in percentage:
  const getCoordinates = (index: number) => {
    const positions = [
      { top: "15%", left: "85%" }, // Top right
      { top: "50%", left: "100%" }, // Middle right
      { top: "85%", left: "85%" }, // Bottom right
      { top: "85%", left: "15%" }, // Bottom left
      { top: "50%", left: "0%" },   // Middle left
      { top: "15%", left: "15%" },   // Top left
    ];
    return positions[index];
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden" id="why-choose-us">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#f8faff] rounded-bl-[80px] -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-[2px] w-6 bg-[#1d4ed8]" />
            <div className="h-[2px] w-12 bg-[#1d4ed8]" />
            <div className="h-[2px] w-6 bg-[#1d4ed8]" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Biggest brands in the industry recommend our company as a reliable corporate structuring partner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          
          {/* Left Column - Circular Layout */}
          <div className="relative w-full max-w-[380px] aspect-square mx-auto">
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
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isActive ? "text-white" : "text-[#1d4ed8]"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 pl-0 lg:pl-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-start mb-1">
                  <span className="text-4xl lg:text-5xl font-bold text-gray-900 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xl font-bold text-[#1d4ed8] ml-1">+</span>
                </div>
                <span className="text-xs font-semibold text-gray-500 tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

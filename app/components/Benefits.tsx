"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Benefits() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const benefits = [
    {
      id: "01",
      subtitle: "PAYMENTS",
      title: t("benefits.b1.title"),
      description: t("benefits.b1.desc"),
      image: "/mockup.png",
    },
    {
      id: "02",
      subtitle: "BANKING",
      title: t("benefits.b2.title"),
      description: t("benefits.b2.desc"),
      image: "/bank_mockup.png",
    },
    {
      id: "03",
      subtitle: "EXPANSION",
      title: t("benefits.b3.title"),
      description: t("benefits.b3.desc"),
      image: "/global_mockup.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % benefits.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [benefits.length]);

  const next = () => setActive((prev) => (prev + 1) % benefits.length);
  const prev = () => setActive((prev) => (prev - 1 + benefits.length) % benefits.length);

  return (
    <section className="relative py-32 bg-white overflow-hidden min-h-[600px]" id="benefits">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Header Area */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-[#1d4ed8]" />
              <span className="text-[#1d4ed8] font-bold tracking-widest text-xs uppercase">
                {t("benefits.subheader")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[0.95] uppercase">
              {t("benefits.title1")} <br />
              <span className="outline-text">{t("benefits.title2")}</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-gray-500" />
            </button>
            
            <div className="flex items-center gap-1.5">
              {benefits.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 transition-all duration-300 rounded-full ${active === i ? "w-6 bg-[#1d4ed8]" : "w-1.5 bg-gray-200"}`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative pt-8">
                {/* Large Background Number */}
                <span className="absolute -top-20 -left-12 text-[200px] font-bold text-gray-100/60 leading-none select-none pointer-events-none -z-10">
                  {benefits[active].id}
                </span>

                <div className="bg-white/60 backdrop-blur-md p-10 border border-gray-50 rounded-lg shadow-sm max-w-md">
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-[#1d4ed8]">{benefits[active].id}</span>
                    {benefits[active].title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-8">
                    {benefits[active].description}
                  </p>
                  
                  <button className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-900">
                      {t("benefits.learnMore")}
                    </span>
                  </button>
                </div>
              </div>

              {/* 3D Phone Side */}
              <div className="relative flex justify-center items-center">
                <div className="perspective-container">
                  <motion.div
                    animate={{ rotateY: [0, 5, -5, 0], rotateX: [15, 10, 15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="phone-case shadow-2xl"
                  >
                    <div className="phone-screen overflow-hidden relative bg-white">
                       <img
                        src={benefits[active].image}
                        alt={benefits[active].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="phone-edge-right" />
                    <div className="phone-edge-bottom" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .perspective-container {
          perspective: 1200px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .phone-case {
          width: 240px;
          height: 480px;
          background: #111;
          border-radius: 40px;
          padding: 8px;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(15deg) rotateY(-15deg);
          border: 4px solid #222;
        }
        .phone-screen {
          width: 100%;
          height: 100%;
          background: #fff;
          border-radius: 32px;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
        }
        .phone-edge-right {
          position: absolute;
          right: -8px;
          top: 40px;
          bottom: 40px;
          width: 8px;
          background: linear-gradient(to right, #333, #000);
          transform: rotateY(90deg);
          transform-origin: left;
        }
        .phone-edge-bottom {
          position: absolute;
          bottom: -8px;
          left: 40px;
          right: 40px;
          height: 8px;
          background: linear-gradient(to bottom, #333, #000);
          transform: rotateX(-90deg);
          transform-origin: top;
        }
      `}</style>
    </section>
  );
}

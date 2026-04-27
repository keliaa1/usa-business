"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";
import Benefits from "./components/Benefits";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useLanguage } from "./context/LanguageContext";
import { ArrowRight, ChevronLeft, ChevronRight, Globe, Shield, Landmark } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="bg-white font-jost">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center overflow-hidden" id="start">
        {/* Background Image with Dark Overlay */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/hero_bg.png"
            alt="Business Background"
            fill
            unoptimized
            className="object-cover brightness-[0.4]"
            priority
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col lg:flex-row justify-between items-center h-full pt-20"
        >
          {/* Left Content */}
          <div className="max-w-3xl w-full">
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6 text-white/90">
              <Globe className="w-4 h-4 text-[#1d4ed8]" />
              <span className="text-xs font-bold tracking-widest uppercase">{t("hero.welcome")}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-5">
              {t("hero.title").split("Lasting Growth.")[0]}
              <span className="text-[#1d4ed8]">Lasting Growth.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex gap-4 mb-6 border-l-[1.5px] border-[#1d4ed8] pl-4">
              <p className="text-gray-300 text-[13px] md:text-sm max-w-md leading-relaxed font-light">
                {t("hero.desc")}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <button className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white px-5 py-3 rounded-sm text-xs font-bold flex items-center gap-2 transition-all group">
                {t("hero.book")} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-5 py-3 rounded-sm text-xs font-bold flex items-center gap-2 transition-all group">
                {t("hero.viewPlans")} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Side - Carousel Controls Style */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden lg:flex flex-col gap-3"
          >
            <button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
            <button className="w-14 h-14 rounded-full border border-[#1d4ed8] flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
              <ChevronLeft className="w-5 h-5 text-[#1d4ed8]" />
            </button>
          </motion.div>

          {/* Bottom Tabs Selection */}
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 right-0 hidden md:flex"
          >
            <div className="bg-white flex shadow-lg">
              <div className="px-8 py-6 border-r border-gray-100 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
                <Landmark className="w-5 h-5 text-gray-900" />
                <span className="font-bold text-xs text-gray-900">{t("hero.commercial")}</span>
              </div>
              <div className="px-8 py-6 bg-[#1d4ed8] flex items-center gap-3 cursor-pointer text-white">
                <Shield className="w-5 h-5" />
                <span className="font-bold text-xs">{t("hero.residential")}</span>
              </div>
              <div className="px-8 py-6 border-l border-gray-100 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
                <Globe className="w-5 h-5 text-gray-900" />
                <span className="font-bold text-xs text-gray-900">{t("hero.custom")}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <WhyChooseUs />
      <Benefits />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
}

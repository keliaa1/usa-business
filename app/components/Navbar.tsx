"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("Start");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: t("nav.start"), id: "Start", href: "#start" },
    { name: t("nav.whyUs"), id: "WhyUs", href: "#why-choose-us" },
    { name: t("nav.benefits"), id: "Benefits", href: "#benefits" },
    { name: t("nav.prices"), id: "Prices", href: "#prices" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", name: "EN English" },
    { code: "es", name: "ES Spanish" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl z-50">
      <div className="flex items-center justify-between bg-white rounded-full px-5 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Image
            src="/logo.webp"
            alt="My USA Business"
            width={100}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveTab(link.id)}
              className={`${
                activeTab === link.id ? "text-white font-semibold" : "text-gray-600 hover:text-black font-medium"
              } relative px-4 py-2 rounded-full text-xs transition-colors duration-300`}
            >
              {activeTab === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[#1d4ed8] rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Language Dropdown */}
        <div className="flex-shrink-0 flex items-center relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3.5 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-700 hover:bg-gray-50 transition-colors uppercase font-bold"
          >
            <span>{languages.find(l => l.code === language)?.name}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-[140px] overflow-hidden"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as "en" | "es");
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <span className={language === lang.code ? "font-bold text-[#1d4ed8]" : ""}>
                      {lang.name}
                    </span>
                    {language === lang.code && <Check className="w-3 h-3 text-[#1d4ed8]" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}

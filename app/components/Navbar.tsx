"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Start", href: "#start" },
  { name: "Why choose us?", href: "#why-choose-us" },
  { name: "Benefits", href: "#benefits" },
  { name: "Prices", href: "#prices" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(navLinks[0].name);

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
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`${
                activeTab === link.name ? "text-white font-semibold" : "text-gray-600 hover:text-black font-medium"
              } relative px-4 py-2 rounded-full text-xs transition-colors duration-300`}
            >
              {activeTab === link.name && (
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
        <div className="flex-shrink-0 flex items-center">
          <button className="flex items-center gap-2 px-3.5 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-700 hover:bg-gray-50 transition-colors">
            <span>ES Spanish</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </button>
        </div>
      </div>
    </nav>
  );
}

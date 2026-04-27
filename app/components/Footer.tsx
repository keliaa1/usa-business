import Image from "next/image";
import { Mail, Phone, Camera, MessageCircle, Send, Globe, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#1d4ed8] pt-20 pb-10 px-6 md:px-10 lg:px-12">
      {/* Main Footer Card */}
      <div className="max-w-7xl mx-auto bg-white rounded-[40px] p-10 md:p-16 shadow-2xl overflow-hidden relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.webp"
                alt="My USA Business"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <p className="text-[#1d4ed8] text-xs font-bold mt-2 uppercase tracking-widest">
                {t("footer.slogan")}
              </p>
            </div>
            
            <h4 className="text-gray-900 font-bold text-lg mb-4">{t("footer.about")}</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              {t("footer.aboutDesc")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-6">{t("footer.services")}</h4>
            <ul className="space-y-4">
              {["Company Creation", "EIN Registration", "Bank Accounts", "Legal Management", "Tax Compliance"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 text-sm hover:text-[#1d4ed8] transition-colors flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#1d4ed8] rounded-full" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-6">{t("footer.company")}</h4>
            <ul className="space-y-4">
              {["Why choose us?", "Our Services", "Pricing Plans", "Privacy Policy", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 text-sm hover:text-[#1d4ed8] transition-colors flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#1d4ed8] rounded-full" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-6">{t("footer.contact")}</h4>
            <div className="space-y-4 mb-8">
              <div className="flex flex-col">
                <span className="text-gray-900 font-bold text-sm">Call :</span>
                <span className="text-gray-500 text-sm font-light">+0123 456 789 00</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-bold text-sm">Email :</span>
                <span className="text-gray-500 text-sm font-light">info@myusabusiness.com</span>
              </div>
              <div className="h-[3px] w-10 bg-[#1d4ed8]" />
            </div>

            <div className="relative mb-6">
              <input 
                type="email" 
                placeholder="Write Email" 
                className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#1d4ed8]/20"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#1d4ed8] text-white px-3 rounded-md flex items-center justify-center hover:bg-[#1e40af] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4">
              {[MessageCircle, Send, Globe, Camera].map((Icon, i) => (
                <a key={i} href="#" className={`w-8 h-8 rounded-full flex items-center justify-center border border-gray-100 text-gray-400 hover:bg-[#1d4ed8] hover:text-white hover:border-[#1d4ed8] transition-all ${i === 0 ? "bg-[#1d4ed8] text-white border-[#1d4ed8]" : ""}`}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <span className="text-gray-900 font-black text-lg">{t("footer.follow")}</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-white/60 text-[10px] font-bold tracking-widest uppercase">
        <div className="flex gap-8 mb-4 md:mb-0">
          <a href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</a>
          <span className="opacity-20">|</span>
          <a href="#" className="hover:text-white transition-colors">{t("footer.history")}</a>
          <span className="opacity-20">|</span>
          <a href="#" className="hover:text-white transition-colors">{t("footer.terms")}</a>
        </div>
        <p>© 2026 MY USA BUSINESS. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

import { Send, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="contact">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#1d4ed8]" />
            <span className="text-[#1d4ed8] font-bold tracking-widest text-xs uppercase">
              {t("contact.subheader")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[0.95] uppercase">
            {t("contact.title1")} <br />
            <span className="outline-text">{t("contact.title2")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 border border-gray-100 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.04)]">
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2 ml-1">{t("contact.name")}</label>
                <input 
                  type="text" 
                  placeholder={t("contact.name")}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2 ml-1">{t("contact.email")}</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2 ml-1">{t("contact.message")}</label>
                <textarea 
                  rows={4}
                  placeholder={t("contact.message")}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/10 transition-all resize-none"
                />
              </div>
              <button className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-black py-5 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                {t("contact.send")} <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Map & Address */}
          <div className="h-full min-h-[400px] lg:min-h-full relative group">
            {/* Stylized Map Placeholder */}
            <div className="absolute inset-0 bg-gray-100 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.83157434947!2d-80.1915!3d25.7617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b68d6f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2s1000%20Brickell%20Ave%2C%20Miami%2C%20FL%2033131%2C%20USA!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            {/* Address Overlay Card */}
            <div className="absolute top-6 left-6 right-6 md:right-auto md:w-64 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-xl">
              <h4 className="text-gray-900 font-black text-sm mb-2">{t("contact.office")}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                1000 Brickell Ave, Suite 100<br />
                Miami, FL 33131, USA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/your-number" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
      >
        <MessageCircle className="w-8 h-8 fill-white text-[#25d366]" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">
          1
        </span>
      </a>
    </section>
  );
}

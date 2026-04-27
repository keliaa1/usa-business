import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      id: "01",
      subtitle: "EASY SETUP",
      title: "Seamless US Company Formation",
      description:
        "We handle all the paperwork required to register your LLC or Corporation in any US state. Our experts navigate the bureaucratic hurdles so you can focus on building your business, completely hassle-free for foreign founders.",
      image: "/benefit_1.png",
      reverse: false,
    },
    {
      id: "02",
      subtitle: "FINANCIAL FREEDOM",
      title: "US Bank Accounts & Tax ID",
      description:
        "Obtain your Employer Identification Number (EIN) securely. We guide you through the process of opening a fully compliant, digital US business bank account without you ever needing to step foot in the country.",
      image: "/benefit_2.png",
      reverse: true,
    },
  ];

  return (
    <section className="bg-[#0b132b] py-24 lg:py-32" id="benefits">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-32">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${
              benefit.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="flex-1 relative">
              {/* Massive Background Number */}
              <span className="absolute -top-16 -left-8 lg:-left-12 text-[180px] font-bold text-white/[0.04] leading-none select-none pointer-events-none z-0">
                {benefit.id}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-12 bg-blue-500" />
                  <span className="text-blue-400 font-semibold tracking-[0.2em] text-sm uppercase">
                    {benefit.subtitle}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                  {benefit.title}
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                  {benefit.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors group"
                >
                  read more
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Image Container */}
            <div className="flex-1 w-full max-w-xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover shadow-2xl"
                />
                {/* Subtle border accent like in some high-end designs */}
                <div className="absolute inset-0 border border-white/10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";
import Benefits from "./components/Benefits";
import Prices from "./components/Prices";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="h-screen max-h-screen font-sans flex flex-col p-4 md:p-6 lg:p-6 pt-24 pb-4 md:pb-6 lg:pb-6 overflow-hidden" id="start">
        <Navbar />

        <main className="flex-1 w-full max-w-[1600px] mx-auto relative rounded-[32px] overflow-hidden shadow-2xl">
          {/* Background Image */}
          <Image
            src="/businessmen.jpg"
            alt="Business professionals"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Gradient Overlay using #1d4ed8 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d4ed8] via-[#1d4ed8]/90 to-transparent w-full md:w-4/5 lg:w-2/3" />

          {/* Content Container */}
          <div className="relative h-full z-10 flex flex-col justify-center px-8 md:px-16 lg:px-20">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
                Start your own business <br />
                <span className="text-blue-200">in the united states</span><br />
                as a foreigner.
              </h1>

              <p className="text-blue-100/90 text-base md:text-lg leading-relaxed mb-8 max-w-lg font-light">
                We help businesses refine strategy, strengthen operations, scale with
                confidence through data-driven consulting and practical execution.
              </p>

              <button className="flex items-center gap-2 bg-white text-[#1d4ed8] px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                Book a Call <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Floating Glassmorphism Stats Card */}
          <div className="absolute bottom-6 right-8 bg-black/20 backdrop-blur-md border border-white/20 rounded-[20px] p-5 text-white max-w-[240px] shadow-2xl hidden md:block">
            <div className="flex items-center mb-3">
              {/* Fake avatars */}
              <div className="w-10 h-10 rounded-full border-2 border-black/20 bg-gray-300 relative z-30 overflow-hidden">
                <Image src="/hero_business_men.png" alt="User" fill className="object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-black/20 bg-gray-400 relative z-20 -ml-3 overflow-hidden">
                <Image src="/hero_business_men.png" alt="User" fill className="object-cover object-right" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-black/20 bg-gray-500 relative z-10 -ml-3 overflow-hidden">
                <Image src="/hero_business_men.png" alt="User" fill className="object-cover object-left" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-black/20 bg-[#1d4ed8] relative z-0 -ml-3 flex items-center justify-center text-white font-bold text-base">
                +
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">30k+</h3>
            <p className="text-xs text-gray-200 leading-snug">
              Happy clients we have world-wide.
            </p>
          </div>
        </main>
      </div>

      <WhyChooseUs />
      <Benefits />
      <Prices />
    </div>
  );
}

import { Check, ArrowRight } from "lucide-react";

export default function Prices() {
  const plans = [
    {
      name: "ESSENTIAL PLAN",
      price: "$390",
      period: "one-time",
      popular: false,
      features: [
        "State Filing Fees Included",
        "Articles of Organization",
        "Registered Agent Service (1 Yr)",
        "Standard Processing Speed",
        "Basic Name Availability Search",
        "Digital Document Delivery",
        "Standard Email Support",
        "Online Document Dashboard",
      ],
    },
    {
      name: "PREMIUM PLAN",
      price: "$790",
      period: "one-time",
      popular: true,
      features: [
        "Everything in Essential, plus",
        "Expedited Filing Speed",
        "Employer Identification Number (EIN)",
        "Operating Agreement Template",
        "Banking Resolution",
        "US Virtual Business Address",
        "Lifetime Compliance Alerts",
        "Priority 24/7 Support",
      ],
    },
    {
      name: "ENTERPRISE PLAN",
      price: "$1,490",
      period: "one-time",
      popular: false,
      features: [
        "Everything in Premium, plus",
        "US Business Bank Account Setup",
        "Tax Strategy Consultation",
        "Annual Report Filing",
        "Custom Operating Agreement",
        "Apostille & Certification",
        "Dedicated Account Manager",
        "Monthly Financial Reports",
      ],
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50" id="prices">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Choose the plan that best fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-3 rounded-[40px] flex flex-col h-full transition-transform hover:-translate-y-2 duration-300 ${
                plan.popular ? "bg-[#f3f4f6] shadow-2xl scale-105 z-10" : "bg-white shadow-lg border border-gray-100"
              }`}
            >
              {/* Main White Card */}
              <div className="bg-white rounded-[32px] p-8 lg:p-10 flex-1 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                    {plan.name}
                  </span>
                  {plan.popular && (
                    <span className="bg-gray-200/80 text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <div className="flex items-baseline mb-8">
                  <span className="text-6xl font-semibold tracking-tighter text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 font-medium ml-2">/{plan.period}</span>
                </div>

                <hr className="border-gray-200 mb-8" />

                <ul className="space-y-5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-700 font-medium text-[15px]">
                      <div className="bg-gray-900 text-white rounded-full p-[3px] flex-shrink-0">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Button Area (Contained within outer gray wrapper) */}
              <div className="pt-3">
                <button
                  className={`w-full py-5 rounded-[28px] flex items-center justify-center gap-2 font-medium text-[17px] transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-b from-gray-800 to-black text-white shadow-xl hover:shadow-2xl hover:opacity-90"
                      : "bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Get started <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

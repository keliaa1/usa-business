"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.start": "Start",
    "nav.whyUs": "Why choose us?",
    "nav.benefits": "Benefits",
    "nav.prices": "Prices",
    "hero.welcome": "Welcome to My USA Business",
    "hero.title": "Start your business for Lasting Growth.",
    "hero.desc": "We transform your vision into a professional US entity that prioritizes functionality and aesthetics. Our skilled team of experts is dedicated to delivering top-notch corporate solutions.",
    "hero.book": "Book a Call",
    "hero.viewPlans": "View Plans",
    "hero.commercial": "Commercial",
    "hero.residential": "Residential",
    "hero.custom": "Custom",
    "whyUs.subheader": "WHY CHOOSE US",
    "whyUs.title1": "CHOOSE",
    "whyUs.title2": "OUR SERVICE",
    "whyUs.feature1.title": "Business Bank Account",
    "whyUs.feature1.desc": "An FDIC-protected business bank account provides a secure foundation for your financial operations.",
    "whyUs.feature2.title": "Asset Protection",
    "whyUs.feature2.desc": "We prioritize privacy so your competition remains at a disadvantage. Names will not be disclosed.",
    "whyUs.feature3.title": "Privacy Protection",
    "whyUs.feature3.desc": "Our high standard of privacy ensures competitors never get ahead. Operate with total peace of mind.",
    "whyUs.stat1": "HAPPY CLIENTS",
    "whyUs.stat2": "YEARS OF EXPERIENCE",
    "whyUs.stat3": "MARKETING CUSTOMERS",
    "whyUs.stat4": "SUCCESSFUL PROJECTS",
    "benefits.subheader": "PORTFOLIO",
    "benefits.title1": "SELECTED",
    "benefits.title2": "BENEFITS",
    "benefits.learnMore": "LEARN MORE",
    "benefits.b1.title": "RECEIVE PAYMENTS IN DOLLARS",
    "benefits.b1.desc": "Offer your customers all payment methods: credit or debit card, cryptocurrency, Zelle and many more, so you can receive your payments quickly and securely, no matter which channel your customers choose.",
    "benefits.b2.title": "OPENING A BANK ACCOUNT",
    "benefits.b2.desc": "At My USA Business, we offer easy and secure solutions for opening US bank accounts, offshore accounts, and crypto accounts for both individuals and businesses.",
    "benefits.b3.title": "INTERNATIONAL MARKET EXPANSION",
    "benefits.b3.desc": "Create or expand your business into the international market. We provide you with the tools and support you need as an entrepreneur, business owner, or investor.",
    "prices.subheader": "PRICING",
    "prices.title1": "OUR",
    "prices.title2": "PLANS",
    "prices.period": "year",
    "prices.annualPrice": "ANNUAL PRICE",
    "prices.included": "Included Benefits",
    "prices.getStarted": "GET STARTED",
    "prices.f1": "Company creation with EIN",
    "prices.f2": "Legal management",
    "prices.f3": "Resident Agent",
    "prices.f4": "Federal and state obligations",
    "prices.f5": "Full payment of expenses",
    "prices.f6": "Personalized attention from an advisor",
    "prices.planName": "START NEW BUSINESS",
    "contact.subheader": "CONTACT US",
    "contact.title1": "GET IN",
    "contact.title2": "TOUCH",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "SEND MESSAGE",
    "contact.office": "MIAMI OFFICE",
    "footer.about": "About Us",
    "footer.slogan": "Start your US journey with confidence",
    "footer.aboutDesc": "We help entrepreneurs worldwide establish their business footprint in the United States with expert guidance and secure corporate solutions.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.contact": "Contact us",
    "footer.follow": "Follow Us",
    "footer.privacy": "Privacy Policy",
    "footer.history": "Our History",
    "footer.terms": "Terms of Service"
  },
  es: {
    "nav.start": "Inicio",
    "nav.whyUs": "¿Por qué nosotros?",
    "nav.benefits": "Beneficios",
    "nav.prices": "Precios",
    "hero.welcome": "Bienvenido a My USA Business",
    "hero.title": "Inicie su negocio para un Crecimiento Duradero.",
    "hero.desc": "Transformamos su visión en una entidad estadounidense profesional que prioriza la funcionalidad y la estética. Nuestro equipo de expertos se dedica a ofrecer soluciones corporativas de primer nivel.",
    "hero.book": "Agendar Llamada",
    "hero.viewPlans": "Ver Planes",
    "hero.commercial": "Comercial",
    "hero.residential": "Residencial",
    "hero.custom": "Personalizado",
    "whyUs.subheader": "POR QUÉ ELEGIRNOS",
    "whyUs.title1": "ELIJA",
    "whyUs.title2": "NUESTRO SERVICIO",
    "whyUs.feature1.title": "Cuenta Bancaria Comercial",
    "whyUs.feature1.desc": "Una cuenta bancaria comercial protegida por la FDIC proporciona una base segura para sus operaciones financieras.",
    "whyUs.feature2.title": "Protección de Activos",
    "whyUs.feature2.desc": "Priorizamos la privacidad para que su competencia permanezca en desventaja. No se revelarán nombres.",
    "whyUs.feature3.title": "Protección de Privacidad",
    "whyUs.feature3.desc": "Nuestro alto estándar de privacidad garantiza que los competidores nunca se adelanten. Opere con total tranquilidad.",
    "whyUs.stat1": "CLIENTES FELICES",
    "whyUs.stat2": "AÑOS DE EXPERIENCIA",
    "whyUs.stat3": "CLIENTES DE MARKETING",
    "whyUs.stat4": "PROYECTOS EXITOSOS",
    "benefits.subheader": "PORTAFOLIO",
    "benefits.title1": "BENEFICIOS",
    "benefits.title2": "SELECCIONADOS",
    "benefits.learnMore": "LEER MÁS",
    "benefits.b1.title": "RECIBE PAGOS EN DÓLARES",
    "benefits.b1.desc": "Ofrezca a sus clientes todos los métodos de pago: tarjeta de crédito o débito, criptomonedas, Zelle y muchos más, para que pueda recibir sus pagos de forma rápida y segura.",
    "benefits.b2.title": "APERTURA DE CUENTA BANCARIA",
    "benefits.b2.desc": "En My USA Business, ofrecemos soluciones fáciles y seguras para abrir cuentas bancarias en EE. UU., cuentas offshore y cuentas cripto.",
    "benefits.b3.title": "EXPANSIÓN AL MERCADO INTERNACIONAL",
    "benefits.b3.desc": "Cree o expanda su negocio hacia el mercado internacional. Le proporcionamos las herramientas y el apoyo que necesita como emprendedor o inversor.",
    "prices.subheader": "PRECIOS",
    "prices.title1": "NUESTROS",
    "prices.title2": "PLANES",
    "prices.period": "año",
    "prices.annualPrice": "PRECIO ANUAL",
    "prices.included": "Beneficios Incluidos",
    "prices.getStarted": "COMENZAR",
    "prices.f1": "Creación de empresa con EIN",
    "prices.f2": "Gestión legal",
    "prices.f3": "Agente Residente",
    "prices.f4": "Obligaciones federales y estatales",
    "prices.f5": "Pago total de gastos",
    "prices.f6": "Atención personalizada de un asesor",
    "prices.planName": "INICIAR NUEVO NEGOCIO",
    "contact.subheader": "CONTÁCTENOS",
    "contact.title1": "PONERSE EN",
    "contact.title2": "CONTACTO",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.message": "Mensaje",
    "contact.send": "ENVIAR MENSAJE",
    "contact.office": "OFICINA MIAMI",
    "footer.about": "Sobre Nosotros",
    "footer.slogan": "Inicie su viaje en EE. UU. con confianza",
    "footer.aboutDesc": "Ayudamos a emprendedores de todo el mundo a establecer su presencia comercial en los Estados Unidos con orientación experta y soluciones corporativas seguras.",
    "footer.services": "Servicios",
    "footer.company": "Compañía",
    "footer.contact": "Contáctenos",
    "footer.follow": "Síguenos",
    "footer.privacy": "Política de Privacidad",
    "footer.history": "Nuestra Historia",
    "footer.terms": "Términos de Servicio"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

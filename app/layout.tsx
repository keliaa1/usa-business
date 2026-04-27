import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "My USA Business | Corporate Solutions",
  description: "Start your own business in the United States as a foreigner with our expert guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-jost">{children}</body>
    </html>
  );
}

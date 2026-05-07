import FeatureSection from "@/components/feature-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import { SupportSection } from "@/components/support-section";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-800 text-white`}
    >
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <SupportSection />
      </main>
      <Footer />
    </div >
  );
}

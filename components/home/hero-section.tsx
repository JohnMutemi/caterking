"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { useState } from "react";

const clientLogos = [
  "Hotels",
  "Restaurants",
  "Hospitals",
  "Schools",
  "Catering",
];

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    "Hello Caterking! I'm interested in your commercial kitchen equipment."
  )}`;

  const scrollToProducts = () => {
    document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-kitchen.jpg"
          alt="Professional commercial kitchen with stainless steel equipment"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30" />
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent">
                Trusted by 500+ Businesses in Kenya
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-primary-foreground leading-[1.1]">
              Professional
              <span className="block text-accent">Kitchen Equipment</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 font-sans font-normal text-primary-foreground/80">
                Built for Performance
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-primary-foreground/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
              From refrigeration systems to custom stainless steel fabrication, we deliver 
              commercial-grade solutions that power Kenya&apos;s finest kitchens.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base font-semibold px-8 h-14 rounded-xl shadow-lg shadow-accent/25"
              >
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold px-8 h-14 rounded-xl bg-transparent"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="mr-2 h-5 w-5 fill-current" />
                Watch Video
              </Button>
            </div>

            {/* Client Types */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/10">
              <p className="text-sm text-primary-foreground/50 mb-4">TRUSTED BY</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {clientLogos.map((client) => (
                  <span
                    key={client}
                    className="px-4 py-2 bg-primary-foreground/5 rounded-lg text-sm font-medium text-primary-foreground/60 border border-primary-foreground/10"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Quick Links */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Stats Cards */}
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors">
                <p className="text-5xl font-bold text-accent">{companyInfo.yearsInBusiness}+</p>
                <p className="mt-2 text-primary-foreground/70 font-medium">Years of Excellence</p>
              </div>
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors">
                <p className="text-5xl font-bold text-accent">{companyInfo.customBuildsCompleted}+</p>
                <p className="mt-2 text-primary-foreground/70 font-medium">Projects Delivered</p>
              </div>
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors">
                <p className="text-5xl font-bold text-accent">{companyInfo.happyClients}+</p>
                <p className="mt-2 text-primary-foreground/70 font-medium">Happy Clients</p>
              </div>
              <div className="bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 hover:bg-accent/20 transition-colors group cursor-pointer">
                <Link href="/contact" className="block">
                  <p className="text-lg font-bold text-accent group-hover:underline">Get a Free Quote</p>
                  <p className="mt-2 text-primary-foreground/70 text-sm">Custom solutions available</p>
                  <ArrowRight className="mt-4 h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground transition-colors cursor-pointer"
        aria-label="Scroll to products"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-4xl mx-4 aspect-video bg-primary rounded-2xl flex items-center justify-center">
            <p className="text-primary-foreground text-lg">Video Coming Soon</p>
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground"
            >
              <span className="sr-only">Close</span>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

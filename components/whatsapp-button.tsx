"use client";

import Image from "next/image";
import { MessageCircle, X } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    "Hello Caterking! I'm interested in your commercial kitchen equipment."
  )}`;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Popup */}
      {isOpen && (
        <div className="bg-card rounded-2xl shadow-2xl border border-border w-80 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-[#075E54] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Caterking Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Caterking</p>
                  <p className="text-xs text-white/70">Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#ECE5DD]">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-sm text-foreground">
                Hello! Looking for commercial kitchen equipment? We&apos;re here to help you find the perfect solution.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Click below to start a conversation
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="p-4 border-t border-border">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" fill="currentColor" />
              Start Chat
            </a>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-5 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen ? "scale-90" : "hover:scale-105"
        }`}
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6" fill="currentColor" />
            <span className="font-semibold hidden sm:inline">Chat with us</span>
          </>
        )}
      </button>
    </div>
  );
}

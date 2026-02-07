import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle, Mail } from "lucide-react";
import { companyInfo } from "@/lib/data";

export function CTASection() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    "Hello Caterking! I'm interested in your commercial kitchen equipment and would like to get a quote."
  )}`;

  return (
    <section className="py-24 lg:py-32 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Left - Content */}
            <div className="p-8 lg:p-12">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                Get Started Today
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
                Ready to Equip Your Kitchen?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Whether you need a single piece of equipment or a complete kitchen 
                setup, our team is ready to help you find the perfect solution.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                {[
                  "Free consultation and kitchen layout advice",
                  "Competitive pricing with flexible payment options",
                  "Nationwide delivery and professional installation",
                  "Comprehensive warranty and after-sales support",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="mt-10 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Request a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right - Contact Cards */}
            <div className="bg-primary p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-primary-foreground mb-6">
                Contact Us Directly
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${companyInfo.phonePrimary}`}
                  className="flex items-center gap-4 p-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">Call Us</p>
                    <p className="font-semibold text-primary-foreground group-hover:text-accent transition-colors">
                      {companyInfo.phone}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl border border-green-500/20 hover:bg-green-500/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">WhatsApp</p>
                    <p className="font-semibold text-primary-foreground group-hover:text-green-400 transition-colors">
                      Chat with us instantly
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">Email Us</p>
                    <p className="font-semibold text-primary-foreground group-hover:text-accent transition-colors">
                      {companyInfo.email}
                    </p>
                  </div>
                </a>
              </div>

              <p className="mt-6 text-sm text-primary-foreground/50 text-center">
                {companyInfo.hours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

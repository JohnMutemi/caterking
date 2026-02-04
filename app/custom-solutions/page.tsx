import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2, Snowflake, Wrench, Building, Waves } from "lucide-react";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Custom Kitchen Solutions | Caterking",
  description:
    "Tailor-made commercial kitchen solutions including cold rooms, drain floors, stainless steel fabrication, and complete kitchen project construction.",
};

const services = [
  {
    icon: Snowflake,
    title: "Cold Room Construction",
    description:
      "Custom-built cold rooms and freezer rooms designed for your specific storage requirements. We handle everything from design to installation.",
    features: [
      "Walk-in refrigerators and freezers",
      "Modular panel systems",
      "Temperature monitoring systems",
      "Energy-efficient compressors",
    ],
  },
  {
    icon: Wrench,
    title: "Stainless Steel Fabrication",
    description:
      "Custom fabrication of sinks, tables, shelving, hoods, and specialty items using food-grade stainless steel.",
    features: [
      "Work tables and prep stations",
      "Custom sink configurations",
      "Exhaust hoods and ventilation",
      "Storage racks and shelving",
    ],
  },
  {
    icon: Building,
    title: "Complete Kitchen Projects",
    description:
      "End-to-end kitchen design and construction services for restaurants, hotels, hospitals, and food production facilities.",
    features: [
      "Kitchen layout design",
      "Equipment selection",
      "Installation and setup",
      "Staff training",
    ],
  },
  {
    icon: Waves,
    title: "Drain Floor Systems",
    description:
      "Professional drain floor installation for commercial kitchens ensuring proper drainage and hygiene compliance.",
    features: [
      "Slope engineering",
      "Stainless steel drains",
      "Epoxy floor coating",
      "Grease trap systems",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We discuss your requirements, space constraints, and operational needs to understand your project scope.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Our team creates detailed designs and specifications tailored to your specific requirements and budget.",
  },
  {
    step: "03",
    title: "Fabrication",
    description:
      "Equipment is manufactured in our workshop using high-grade materials and precision techniques.",
  },
  {
    step: "04",
    title: "Installation",
    description:
      "Professional installation by our experienced team, ensuring everything works perfectly from day one.",
  },
];

export default function CustomSolutionsPage() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    "Hello Caterking! I'm interested in custom kitchen solutions. Can we discuss my project?"
  )}`;

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/custom-kitchen.jpg"
            alt="Custom kitchen installation"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-6">
                Custom Solutions
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground text-balance">
                Tailor-Made Kitchen Solutions
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
                From cold room construction to complete kitchen projects, we design 
                and build custom solutions that perfectly fit your operational needs 
                and space requirements.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-8 text-base font-semibold"
                >
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-base font-semibold bg-transparent"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Discuss on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="hidden lg:block">
              <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
                <h3 className="text-xl font-bold text-primary-foreground mb-6">
                  Why Custom Solutions?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Perfect fit for your space and requirements",
                    "Maximize efficiency and workflow",
                    "Built to meet local health regulations",
                    "Long-term cost savings",
                    "Single point of accountability",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              Our Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              What We Build
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive custom fabrication and construction services for commercial kitchens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              How We Work
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              A systematic approach to ensure your project is delivered on time and to specification.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-border" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="bg-card rounded-2xl p-6 border border-border h-full">
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto relative z-10">
                      <span className="text-3xl font-bold text-primary-foreground">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-foreground text-center">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery Teaser */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-4 w-fit">
                  Our Work
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-foreground text-balance">
                  Trusted by Leading Businesses
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/70 leading-relaxed">
                  We&apos;ve completed custom kitchen projects for restaurants, hotels, 
                  hospitals, schools, and food production facilities across Kenya.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {["Hotels", "Restaurants", "Hospitals", "Schools", "Factories"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-primary-foreground/10 text-primary-foreground/80 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-0">
                <Image
                  src="/images/custom-kitchen.jpg"
                  alt="Custom kitchen project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl border border-border overflow-hidden">
            <div className="p-8 lg:p-12 text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                Get Started
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
                Have a Custom Project in Mind?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Let&apos;s discuss your requirements and create a solution that 
                perfectly fits your needs and budget.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-8 text-base font-semibold"
                >
                  <Link href="/contact">
                    Request a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base font-semibold bg-transparent"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Thermometer, Factory, LayoutGrid, Droplets } from "lucide-react";

const services = [
  {
    icon: Thermometer,
    title: "Cold Room Construction",
    description:
      "Custom-built cold rooms and walk-in freezers designed for optimal temperature control and energy efficiency.",
    features: ["Insulated Panels", "Temperature Monitoring", "Energy Efficient"],
  },
  {
    icon: Factory,
    title: "Stainless Steel Fabrication",
    description:
      "Custom fabricated tables, sinks, shelving, and specialized equipment built to your exact specifications.",
    features: ["Custom Sizes", "Food-Grade Steel", "Durable Welds"],
  },
  {
    icon: LayoutGrid,
    title: "Complete Kitchen Projects",
    description:
      "End-to-end kitchen solutions from design consultation through installation and commissioning.",
    features: ["Layout Design", "Equipment Supply", "Installation"],
  },
  {
    icon: Droplets,
    title: "Drainage Systems",
    description:
      "Professional stainless steel floor drains and grease trap solutions for commercial kitchens.",
    features: ["Grease Traps", "Floor Drains", "Maintenance"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/custom-kitchen.jpg"
                alt="Custom kitchen installation"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-xl max-w-xs hidden lg:block">
              <p className="text-4xl font-bold text-accent">500+</p>
              <p className="text-foreground font-medium mt-1">Custom Projects Completed</p>
              <p className="text-muted-foreground text-sm mt-2">
                From small cafes to large hotel kitchens
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              Custom Solutions
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
              Tailored Kitchen Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Beyond standard equipment, we specialize in custom fabrication and 
              complete kitchen projects designed to maximize your operational efficiency.
            </p>

            {/* Services List */}
            <div className="mt-10 space-y-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-0.5 bg-secondary/50 text-xs text-muted-foreground rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-10 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/custom-solutions">
                Explore Custom Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

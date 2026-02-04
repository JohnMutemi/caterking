"use client";

import { DollarSign, Award, Wrench, Truck, Shield, Headphones } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const features = [
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Quality commercial equipment at affordable prices. Direct manufacturer partnerships ensure the best value for your investment.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "High-grade stainless steel construction and components engineered to withstand the demands of professional kitchens.",
  },
  {
    icon: Wrench,
    title: "Custom Fabrication",
    description:
      "Tailor-made equipment and layouts designed specifically for your space, workflow, and operational requirements.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "Professional delivery and installation services across Kenya with careful handling of your equipment.",
  },
  {
    icon: Shield,
    title: "Warranty & Support",
    description:
      "Comprehensive warranty coverage and dedicated after-sales support to keep your kitchen running smoothly.",
  },
  {
    icon: Headphones,
    title: "Expert Consultation",
    description:
      "Free professional advice on equipment selection, kitchen layout optimization, and efficiency improvements.",
  },
];

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Why Caterking
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
            Your Trusted Partner in Commercial Kitchen Equipment
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            For over 15 years, we&apos;ve been equipping Kenya&apos;s finest restaurants, 
            hotels, and food businesses with reliable, professional-grade equipment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-muted/50 rounded-2xl p-8 border border-border hover:border-accent/30 hover:bg-muted transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-primary rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            <div className="text-center lg:border-r lg:border-primary-foreground/20">
              <p className="text-4xl lg:text-5xl font-bold text-accent">
                <AnimatedCounter end={15} />+
              </p>
              <p className="mt-2 text-primary-foreground/70 font-medium">Years Experience</p>
            </div>
            <div className="text-center lg:border-r lg:border-primary-foreground/20">
              <p className="text-4xl lg:text-5xl font-bold text-accent">
                <AnimatedCounter end={500} />+
              </p>
              <p className="mt-2 text-primary-foreground/70 font-medium">Projects Completed</p>
            </div>
            <div className="text-center lg:border-r lg:border-primary-foreground/20">
              <p className="text-4xl lg:text-5xl font-bold text-accent">
                <AnimatedCounter end={1000} />+
              </p>
              <p className="mt-2 text-primary-foreground/70 font-medium">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-accent">
                <AnimatedCounter end={47} />
              </p>
              <p className="mt-2 text-primary-foreground/70 font-medium">Counties Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

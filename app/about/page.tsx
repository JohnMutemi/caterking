import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Award, Target, CheckCircle2, Building, Utensils, GraduationCap } from "lucide-react";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Caterking Superior Kitchen Appliances",
  description:
    "Learn about Caterking - Kenya's leading manufacturer and supplier of commercial kitchen equipment. Over 15 years of experience serving restaurants, hotels, and food businesses.",
};

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "We use only high-grade materials and maintain strict quality control throughout our manufacturing process.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Your success is our priority. We work closely with clients to understand and meet their unique requirements.",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "We continuously improve our products and processes to deliver better solutions for modern kitchens.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "1,200+", label: "Happy Clients" },
  { value: "47", label: "Counties Served" },
];

const clientTypes = [
  { icon: Utensils, label: "Restaurants & Hotels" },
  { icon: Building, label: "Hospitals & Healthcare" },
  { icon: GraduationCap, label: "Schools & Universities" },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-6">
              About Caterking
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground text-balance">
              Building Kenya&apos;s Kitchens Since 2009
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Kenya&apos;s leading manufacturer and supplier of commercial kitchen equipment, 
              serving restaurants, hotels, and institutions with quality, affordable solutions.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/60">
              <MapPin className="h-5 w-5 text-accent" />
              <span>{companyInfo.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-xl border border-border p-8 lg:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-workshop.jpg"
                  alt="Caterking workshop and manufacturing facility"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-xl hidden lg:block">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm font-medium mt-1">Years of Excellence</p>
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
                From Local Workshop to Industry Leader
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Founded in 2009, Caterking Superior Kitchen Appliances started as a small 
                fabrication workshop in Nairobi. Today, we&apos;ve grown into one of Kenya&apos;s 
                most trusted names in commercial kitchen equipment.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our journey has been driven by a simple belief: every food business deserves 
                access to quality, reliable equipment at fair prices. From small cafes to 
                five-star hotels, we&apos;ve helped hundreds of businesses build efficient, 
                professional kitchens.
              </p>

              {/* Client Types */}
              <div className="mt-8 flex flex-wrap gap-4">
                {clientTypes.map((client) => (
                  <div
                    key={client.label}
                    className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full"
                  >
                    <client.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">{client.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              Affordable, Professional Kitchen Solutions for Africa
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We believe every food business deserves access to quality commercial kitchen 
              equipment. Our mission is to provide affordable, reliable, and customizable 
              solutions that help businesses thrive—from street food vendors to five-star hotels.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              Our Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-muted-foreground">0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                What We Offer
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
                Complete Kitchen Equipment Solutions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From individual equipment to complete kitchen setups, we provide everything 
                you need to run an efficient commercial kitchen.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Refrigerators & freezers for all capacities",
                  "Cake & beverage display units",
                  "Commercial stoves, ovens & cooking equipment",
                  "Dishwashers & cleaning equipment",
                  "Stainless steel sinks, tables & cabinets",
                  "Custom-built kitchen solutions",
                  "Cold room construction",
                  "Nationwide delivery across Kenya",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="mt-10 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border">
              <h3 className="text-2xl font-bold text-foreground">
                Why Choose Caterking?
              </h3>
              <ul className="mt-8 space-y-6">
                {[
                  { title: "Local Manufacturing", desc: "Made in Kenya, supporting local industry and ensuring quick turnaround" },
                  { title: "Competitive Pricing", desc: "Quality equipment at fair prices with flexible payment options" },
                  { title: "Custom Solutions", desc: "Equipment tailored to your specific space and operational needs" },
                  { title: "Expert Support", desc: "Technical assistance and comprehensive after-sales service" },
                  { title: "Quick Delivery", desc: "Nationwide delivery with professional installation services" },
                ].map((item) => (
                  <li key={item.title} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <p className="font-bold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-4">
              Get Started
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-foreground text-balance">
              Ready to Equip Your Kitchen?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70 leading-relaxed">
              Contact us today to discuss your kitchen equipment needs. Our team is 
              ready to help you find the perfect solutions for your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-8 text-base font-semibold"
              >
                <Link href="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-base font-semibold bg-transparent"
              >
                <Link href="/custom-solutions">View Custom Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/data";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Caterking Superior Kitchen Appliances",
  description:
    "Get in touch with Caterking for commercial kitchen equipment inquiries, quotes, and custom solutions. Located on Mombasa Road, Nairobi, Kenya.",
};

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us for immediate assistance",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone}`,
    cta: "Call Now",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us on WhatsApp",
    value: "Start a conversation",
    href: `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
      "Hello Caterking! I'm interested in your commercial kitchen equipment."
    )}`,
    cta: "Start Chat",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a detailed inquiry",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    cta: "Send Email",
    color: "bg-accent/10 text-accent",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground text-balance">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
              Have questions about our products or need a custom quote? Our team 
              is ready to help you find the perfect kitchen equipment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative -mt-8 z-10 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.title === "WhatsApp" ? "_blank" : undefined}
                rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl group"
              >
                <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {method.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {method.description}
                </p>
                <p className="mt-3 font-medium text-foreground text-sm">{method.value}</p>
                <div className="mt-4 flex items-center text-sm font-semibold text-accent group-hover:underline">
                  {method.cta}
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Info */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                Send a Message
              </span>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">
                Request a Quote
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Location Info */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Visit Us
              </span>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">
                Visit Our Showroom
              </h2>
              <p className="mt-2 text-muted-foreground">
                Come see our products in person at our Nairobi showroom.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Address</h3>
                    <p className="text-muted-foreground">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">{companyInfo.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8191033840803!2d${companyInfo.location.lng}!3d${companyInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTknMDMuNyJTIDM2wrA0OSczNS4wIkU!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Caterking Location on Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground">
                Need Immediate Assistance?
              </h2>
              <p className="mt-2 text-primary-foreground/70">
                Call us now for urgent inquiries or equipment needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-8 text-base font-semibold"
              >
                <a href={`tel:${companyInfo.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {companyInfo.phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-base font-semibold bg-transparent"
              >
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

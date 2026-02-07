import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { companyInfo, categories } from "@/lib/data";

const footerNavigation = {
  products: categories.map((cat) => ({ name: cat.name, href: `/products?category=${cat.slug}` })),
  company: [
    { name: "About Us", href: "/about" },
    { name: "Custom Solutions", href: "/custom-solutions" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "FAQ", href: "/contact" },
    { name: "Warranty", href: "/contact" },
    { name: "Delivery Info", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 flex items-center justify-center bg-primary-foreground/10 rounded-lg p-2 shadow-sm border border-primary-foreground/20 group-hover:bg-primary-foreground/20 group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="Caterking Logo"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="font-bold text-xl">Caterking</span>
                <span className="block text-xs text-primary-foreground/60 -mt-0.5">
                  Embracing Quality and Affordability
                </span>
              </div>
            </Link>
            <p className="mt-6 text-primary-foreground/70 leading-relaxed max-w-sm">
              Professional commercial kitchen equipment manufacturer and supplier. 
              Serving businesses across Kenya with quality, affordability, and 
              custom solutions since 2009.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary-foreground/70 group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground/70 group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary-foreground/70 group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wider uppercase text-primary-foreground">
              Products
            </h3>
            <ul className="mt-6 space-y-4">
              {footerNavigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wider uppercase text-primary-foreground">
              Company
            </h3>
            <ul className="mt-6 space-y-4">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-primary-foreground">
              Contact Us
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phonePrimary}`}
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/50">Call us</p>
                    <p className="font-medium text-primary-foreground">{companyInfo.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/50">Email us</p>
                    <p className="font-medium text-primary-foreground">{companyInfo.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/50">Visit us</p>
                    <p className="font-medium text-primary-foreground">{companyInfo.address}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/50">Working hours</p>
                    <p className="font-medium text-primary-foreground">{companyInfo.hours}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/contact"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

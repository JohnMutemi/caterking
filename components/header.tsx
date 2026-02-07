"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo, categories } from "@/lib/data";
import { ThemeSwitcher } from "@/components/theme-switcher";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    children: categories.map((cat) => ({
      name: cat.name,
      href: `/products?category=${cat.slug}`,
    })),
  },
  { name: "Custom Solutions", href: "/custom-solutions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/98 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`hidden lg:block transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center justify-between py-2 text-sm">
              <p className="text-primary-foreground/80">
                Kenya&apos;s Leading Commercial Kitchen Equipment Supplier
              </p>
              <div className="flex items-center gap-6">
                <a
                  href={`tel:${companyInfo.phonePrimary}`}
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {companyInfo.phone}
                </a>
                <span className="text-primary-foreground/50">|</span>
                <span className="text-primary-foreground/80">{companyInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-background/80 dark:bg-background/90 rounded-lg p-2 shadow-sm border border-border/50 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
              <Image
                src="/logo.png"
                alt="Caterking Logo"
                width={64}
                height={64}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span
                className={`font-bold text-xl tracking-tight transition-colors ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                Caterking
              </span>
              <span
                className={`block text-xs font-medium -mt-0.5 transition-colors ${
                  scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
                }`}
              >
                Embracing Quality and Affordability
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    scrolled
                      ? "text-foreground hover:bg-muted"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-xl border border-border overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-card-foreground hover:bg-muted transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <ThemeSwitcher />
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-foreground/30 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="relative w-12 h-12 flex items-center justify-center bg-background rounded-lg p-2 shadow-sm border border-border">
                  <Image
                    src="/logo.png"
                    alt="Caterking Logo"
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="font-bold text-foreground text-lg">Caterking</span>
              </Link>
              <ThemeSwitcher />
              <button
                type="button"
                className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <div className="ml-4 space-y-1 mt-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <a
                    href={`tel:${companyInfo.phonePrimary}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted text-foreground"
                  >
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Call us now</p>
                      <p className="font-medium">{companyInfo.phone}</p>
                    </div>
                  </a>
                  <Button
                    asChild
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    size="lg"
                  >
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Request a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

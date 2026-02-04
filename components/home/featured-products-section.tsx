"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Eye } from "lucide-react";
import { featuredProducts, companyInfo } from "@/lib/data";
import { useState } from "react";

export function FeaturedProductsSection() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-muted relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              Featured Products
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
              Popular Equipment
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Discover our best-selling commercial kitchen equipment trusted by 
              professionals across Kenya.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="group bg-transparent">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm text-xs font-semibold text-accent rounded-full uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>

                {/* Quick Actions */}
                <div
                  className={`absolute inset-0 bg-foreground/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="w-12 h-12 bg-background rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
                      `Hi Caterking! I'm interested in: ${product.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                  {product.name}
                </h3>

                {/* Specs */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.specs.slice(0, 3).map((spec) => (
                    <span
                      key={spec.label}
                      className="inline-flex items-center px-2.5 py-1 text-xs bg-muted rounded-lg text-muted-foreground"
                    >
                      <span className="font-medium text-foreground mr-1">{spec.label}:</span>
                      {spec.value}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm font-semibold text-accent">Get Price Quote</span>
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">
              Request Custom Equipment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

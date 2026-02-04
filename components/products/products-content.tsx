"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, Grid3X3, List, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, categories, companyInfo, type Product } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ProductsContent() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categorySlug === selectedCategory)
    : products;

  const currentCategory = selectedCategory
    ? categories.find((c) => c.slug === selectedCategory)
    : null;

  return (
    <div className="bg-background">
      {/* Hero Banner */}
      <div className="bg-primary pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-4">
              Product Catalog
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-primary-foreground text-balance">
              {currentCategory ? currentCategory.name : "All Products"}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/70 leading-relaxed">
              {currentCategory
                ? currentCategory.description
                : "Explore our comprehensive range of commercial kitchen equipment designed for performance, durability, and efficiency."}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Link href="/products">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                className={cn(
                  "rounded-full",
                  selectedCategory === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent"
                )}
              >
                All Products
              </Button>
            </Link>
            {categories.map((category) => (
              <Link key={category.slug} href={`/products?category=${category.slug}`}>
                <Button
                  variant={selectedCategory === category.slug ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "rounded-full",
                    selectedCategory === category.slug
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent"
                  )}
                >
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* View Toggle & Count */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} Products
            </p>
            <div className="flex items-center border border-border rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  viewMode === "grid" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Grid view"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  viewMode === "list" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <ProductListCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Filter className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-lg font-medium text-foreground">No products found</p>
            <p className="text-muted-foreground mt-2">
              Try selecting a different category or view all products.
            </p>
            <Button asChild className="mt-6">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-muted rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            We offer custom fabrication services and can source specialized equipment. 
            Contact us to discuss your specific requirements.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/custom-solutions">
                Explore Custom Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent">
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
                  "Hi Caterking! I'm looking for specific kitchen equipment."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Ask on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm text-xs font-semibold text-accent rounded-full uppercase tracking-wide">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.specs.slice(0, 2).map((spec) => (
            <span
              key={spec.label}
              className="inline-flex items-center px-2.5 py-1 text-xs bg-muted rounded-lg text-muted-foreground"
            >
              <span className="font-medium text-foreground mr-1">{spec.label}:</span>
              {spec.value}
            </span>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-sm font-semibold text-accent">Get Price Quote</span>
          <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

function ProductListCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col sm:flex-row gap-6 bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl p-4"
    >
      <div className="relative w-full sm:w-48 aspect-[4/3] sm:aspect-square overflow-hidden bg-muted rounded-xl flex-shrink-0">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 py-2">
        <span className="text-xs font-semibold text-accent uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="mt-1 text-xl font-bold text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.specs.slice(0, 4).map((spec) => (
            <span
              key={spec.label}
              className="inline-flex items-center px-2.5 py-1 text-xs bg-muted rounded-lg text-muted-foreground"
            >
              <span className="font-medium text-foreground mr-1">{spec.label}:</span>
              {spec.value}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center text-sm font-semibold text-accent">
          Get Price Quote
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

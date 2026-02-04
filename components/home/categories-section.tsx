"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Snowflake, ChefHat, Wrench, Cog, Layout } from "lucide-react";
import { categories } from "@/lib/data";

const categoryIcons: Record<string, typeof Snowflake> = {
  refrigeration: Snowflake,
  "display-cabinets": Layout,
  "cooking-equipment": ChefHat,
  "stainless-steel": Wrench,
  "processing-machines": Cog,
};

export function CategoriesSection() {
  return (
    <section id="categories" className="py-24 lg:py-32 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-secondary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Product Categories
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
            Complete Kitchen Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Explore our comprehensive range of professional equipment designed for 
            performance, durability, and efficiency in commercial kitchens.
          </p>
        </div>

        {/* Categories Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category.slug] || Cog;
            const isLarge = index === 0 || index === 3;

            return (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl ${
                  isLarge ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-primary-foreground">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-sm text-primary-foreground/70">
                        {category.productCount} Products Available
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline underline-offset-4"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

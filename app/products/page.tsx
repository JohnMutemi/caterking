import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsContent } from "@/components/products/products-content";

export const metadata: Metadata = {
  title: "Commercial Kitchen Equipment | Caterking Products",
  description:
    "Browse our complete range of commercial kitchen equipment - refrigeration, display cabinets, cooking equipment, stainless steel fabrication, and processing machines.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  );
}

function ProductsLoading() {
  return (
    <div className="bg-background">
      {/* Hero Skeleton */}
      <div className="bg-primary pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="h-8 bg-primary-foreground/20 rounded-full w-40 mx-auto mb-4 animate-pulse" />
            <div className="h-12 bg-primary-foreground/20 rounded-lg w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-6 bg-primary-foreground/10 rounded-lg w-96 mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex gap-2 mb-10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-9 bg-muted rounded-full w-28 animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-muted rounded-2xl animate-pulse">
              <div className="aspect-[4/3]" />
              <div className="p-6 space-y-3">
                <div className="h-6 bg-background/50 rounded w-3/4" />
                <div className="h-4 bg-background/50 rounded w-full" />
                <div className="h-4 bg-background/50 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

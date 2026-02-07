import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  ArrowRight,
  Check,
  Truck,
  Shield,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById, products, companyInfo } from "@/lib/data";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found | Caterking",
    };
  }

  return {
    title: `${product.name} | Caterking Commercial Kitchen Equipment`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

const benefits = [
  { icon: Truck, text: "Nationwide Delivery Available" },
  { icon: Shield, text: "Warranty Included" },
  { icon: Wrench, text: "Installation Service" },
];

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    `Hello Caterking! I'm interested in the ${product.name}. Can you provide pricing and availability?`
  )}`;

  return (
    <div className="bg-background">
      {/* Breadcrumb Bar */}
      <div className="bg-muted border-b border-border pt-24 lg:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href={`/products?category=${product.categorySlug}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {product.category}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted border border-border">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Benefits Strip */}
            <div className="grid grid-cols-3 gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex flex-col items-center gap-2 p-4 bg-muted rounded-xl text-center"
                >
                  <benefit.icon className="w-5 h-5 text-accent" />
                  <span className="text-xs text-muted-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <Link
              href="/products"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors w-fit mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {product.name}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="mt-8">
              <h2 className="text-lg font-bold text-foreground mb-4">
                Technical Specifications
              </h2>
              <div className="bg-muted rounded-2xl overflow-hidden border border-border">
                <table className="w-full">
                  <tbody>
                    {product.specs.map((spec, index) => (
                      <tr
                        key={spec.label}
                        className={`${index !== product.specs.length - 1 ? "border-b border-border" : ""}`}
                      >
                        <td className="px-5 py-4 text-sm font-semibold text-foreground bg-background/50 w-1/3">
                          {spec.label}
                        </td>
                        <td className="px-5 py-4 text-sm text-muted-foreground">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Customization Note */}
            <div className="mt-6 p-5 bg-accent/5 rounded-2xl border border-accent/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Custom Options Available</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    This product can be customized to meet your specific requirements including
                    size modifications, additional features, and branding.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-14 text-base font-semibold"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Price on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full h-14 text-base font-semibold bg-transparent"
              >
                <a href={`tel:${companyInfo.phonePrimary}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {companyInfo.phone}
                </a>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Questions? Our team is available {companyInfo.hours} to help you
                find the right equipment for your kitchen.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">
                Related Products
              </h2>
              <Link
                href={`/products?category=${product.categorySlug}`}
                className="text-sm font-semibold text-accent hover:underline hidden sm:flex items-center gap-1"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="mt-4 flex items-center text-sm font-semibold text-accent">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James Mwangi",
    role: "Executive Chef",
    company: "Safari Park Hotel",
    content:
      "Caterking transformed our kitchen with their custom fabrication work. The stainless steel prep tables and cold room installation exceeded our expectations. Their team's professionalism and attention to detail made all the difference.",
    rating: 5,
  },
  {
    id: 2,
    name: "Grace Ochieng",
    role: "Operations Manager",
    company: "Nairobi Hospital Catering",
    content:
      "We've been sourcing equipment from Caterking for over 5 years. Their pricing is competitive, quality is excellent, and delivery is always on time. The after-sales support is what truly sets them apart.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Kimani",
    role: "Owner",
    company: "Kimani's Restaurant Chain",
    content:
      "When we expanded to our third location, Caterking handled the entire kitchen setup. From design consultation to installation, everything was seamless. They understand the unique needs of Kenyan food service businesses.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah Wanjiku",
    role: "Head of Procurement",
    company: "Kempinski Hotel",
    content:
      "The display cabinets and refrigeration units we purchased have been running flawlessly for years. Caterking's equipment is built to handle our high-volume operations without breaking down.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Quote className="absolute top-20 left-20 w-40 h-40 text-primary-foreground" />
        <Quote className="absolute bottom-20 right-20 w-60 h-60 text-primary-foreground rotate-180" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-4">
          Testimonials
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-primary-foreground text-balance">
          What Our Clients Say
        </h2>

        {/* Testimonial Card */}
        <div className="mt-12">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-accent fill-accent" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl sm:text-2xl text-primary-foreground/90 leading-relaxed font-medium">
            &ldquo;{currentTestimonial.content}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="mt-8">
            <p className="text-lg font-bold text-primary-foreground">
              {currentTestimonial.name}
            </p>
            <p className="text-primary-foreground/60">
              {currentTestimonial.role}, {currentTestimonial.company}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

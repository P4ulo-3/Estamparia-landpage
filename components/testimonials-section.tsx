"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empresa de Eventos",
    text: "Fizemos 500 abadás para nosso evento e ficaram perfeitos! Qualidade incrível e entrega super rápida. Recomendo demais a Renove Estamparia!",
    rating: 5,
    initials: "MS",
  },
  {
    name: "Carlos Oliveira",
    role: "Dono de Loja",
    text: "As camisetas personalizadas da minha loja são todas feitas pela Renove. Sublimação perfeita, cores vibrantes e tecido de qualidade.",
    rating: 5,
    initials: "CO",
  },
  {
    name: "Ana Santos",
    role: "Designer Freelancer",
    text: "Como designer, sou exigente com qualidade de impressão. A Renove sempre entrega exatamente o que aprovei no digital. Parceria top!",
    rating: 5,
    initials: "AS",
  },
  {
    name: "Pedro Costa",
    role: "Empresa de Marketing",
    text: "Encomendamos brindes corporativos para um cliente importante e superou nossas expectativas. Canecas, sacolas e camisetas impecáveis.",
    rating: 5,
    initials: "PC",
  },
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToPrev = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-primary/10 text-primary font-sans font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="reveal relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="min-w-full px-4"
                >
                  <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-sm">
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-sans font-bold">
                      {testimonial.initials}
                    </div>

                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="font-sans text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                      {`"${testimonial.text}"`}
                    </blockquote>

                    {/* Author */}
                    <div>
                      <div className="font-sans font-bold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all text-foreground"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all text-foreground"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

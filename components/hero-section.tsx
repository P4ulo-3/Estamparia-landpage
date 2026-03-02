"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const words = ["Camisetas", "Canecas", "Sacolas", "Abadás", "Brindes"]

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-foreground"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 lg:px-8 py-32 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full" style={{ animation: "pulse 2s infinite" }} />
              <span className="text-primary font-sans text-sm font-medium">
                Brindes & Personalização
              </span>
            </div>

            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight text-balance">
              Transformamos suas ideias em{" "}
              <span className="text-primary">estampas incríveis</span>
            </h1>

            <p className="mt-6 text-primary-foreground/70 font-sans text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              Personalizamos{" "}
              <span className="text-accent font-semibold inline-block min-w-[140px] transition-all duration-500">
                {words[currentWord]}
              </span>{" "}
              com qualidade premium e agilidade. Do design à entrega, cuidamos de cada detalhe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <a
                href="#contato"
                className="bg-primary text-primary-foreground font-sans font-semibold px-8 py-4 rounded-full text-base hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Solicitar Orçamento
              </a>
              <a
                href="#portfolio"
                className="border-2 border-primary-foreground/20 text-primary-foreground font-sans font-semibold px-8 py-4 rounded-full text-base hover:border-primary hover:text-primary transition-all duration-300"
              >
                Ver Portfólio
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
              {[
                { number: "5000+", label: "Pedidos" },
                { number: "500+", label: "Clientes" },
                { number: "99%", label: "Satisfação" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-primary font-sans font-bold text-2xl">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/50 font-sans text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 relative flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Spinning circle decoration */}
              <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow" />
              <div
                className="absolute inset-4 border-2 border-dashed border-accent/20 rounded-full animate-spin-slow"
                style={{ animationDirection: "reverse" }}
              />

              {/* Floating shirt image */}
              <div className="absolute inset-8 animate-float">
                <Image
                  src="/images/hero-tshirt.jpg"
                  alt="Camiseta personalizada Renove Estamparia"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain rounded-2xl drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating small card */}
              <div
                className="absolute -bottom-4 -left-4 bg-primary-foreground rounded-2xl shadow-xl p-3 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-foreground font-sans text-xs font-semibold">Qualidade</div>
                    <div className="text-muted-foreground font-sans text-xs">Garantida</div>
                  </div>
                </div>
              </div>

              {/* Floating badge top right */}
              <div
                className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full px-4 py-2 shadow-lg animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <span className="font-sans text-xs font-bold">Entrega Rápida</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-primary-foreground/40 font-sans text-xs">Role para baixo</span>
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div
            className="w-1.5 h-3 bg-primary rounded-full"
            style={{ animation: "bounce 1s infinite" }}
          />
        </div>
      </div>
    </section>
  )
}

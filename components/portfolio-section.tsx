"use client"

import { useState } from "react"
import Image from "next/image"

const categories = ["Todos", "Camisetas", "Canecas", "Brindes", "Eventos"]

const portfolioItems = [
  {
    image: "/images/eco-bag.jpg",
    title: "Camisetas Corporativas",
    category: "Camisetas",
    tech: "Sublimação",
  },
  {
    image: "/images/Caneca-Personalizada.png",
    title: "Canecas Personalizadas",
    category: "Canecas",
    tech: "Sublimação",
  },
  {
    image: "/images/portfolio-1.jpg",
    title: "Kit de Brindes",
    category: "Brindes",
    tech: "Diversas",
  },
  {
    image: "/images/portfolio-2.jpg",
    title: "Coleção Especial",
    category: "Camisetas",
    tech: "DTF",
  },
  {
    image: "/images/portfolio-3.jpg",
    title: "Produção em Série",
    category: "Eventos",
    tech: "Silk Screen",
  },
  {
    image: "/images/portfolio-4.jpg",
    title: "Brindes Corporativos",
    category: "Brindes",
    tech: "Sublimação",
  },
]

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Todos")

  const filtered =
    activeFilter === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-highlight/10 text-highlight font-sans font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Portfólio
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Nossos <span className="text-primary">Trabalhos Recentes</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-2xl mx-auto text-pretty">
            Veja alguns dos projetos que realizamos com excelência para nossos clientes
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-sans text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div
              key={item.title}
              className="reveal group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                    <h3 className="text-primary-foreground font-sans font-bold text-lg mb-1">
                      {item.title}
                    </h3>
                    <span className="inline-block bg-primary/80 text-primary-foreground font-sans text-xs font-medium px-3 py-1 rounded-full">
                      {item.tech}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

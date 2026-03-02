"use client"

import { Layers, Printer, Sparkles, ArrowRightLeft } from "lucide-react"

const techs = [
  {
    icon: Sparkles,
    title: "Sublimação",
    description: "Estampas vibrantes e duráveis em tecidos claros de poliéster. Perfeita para fotos e designs complexos com cores ilimitadas.",
    highlight: true,
  },
  {
    icon: Layers,
    title: "Silk Screen",
    description: "Técnica clássica e versátil para grandes quantidades. Excelente definição de cores e durabilidade em qualquer tecido.",
    highlight: false,
  },
  {
    icon: Printer,
    title: "DTF (Direct to Film)",
    description: "Tecnologia moderna que permite estampar em qualquer cor de tecido com qualidade fotográfica e toque super macio.",
    highlight: false,
  },
  {
    icon: ArrowRightLeft,
    title: "Transfer",
    description: "Ideal para pequenas tiragens e personalização individual. Aplicação rápida com resultado profissional.",
    highlight: false,
  },
]

export default function TechnologiesSection() {
  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-primary/20 text-primary font-sans font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Tecnologias
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground text-balance">
            Técnicas de <span className="text-primary">Estampa</span>
          </h2>
          <p className="mt-4 text-primary-foreground/60 font-sans text-lg max-w-2xl mx-auto text-pretty">
            Utilizamos as melhores tecnologias do mercado para garantir qualidade e durabilidade
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, index) => (
            <div
              key={tech.title}
              className={`reveal group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                tech.highlight
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  tech.highlight
                    ? "bg-primary-foreground/20"
                    : "bg-primary/10"
                }`}
              >
                <tech.icon
                  className={`w-7 h-7 ${
                    tech.highlight ? "text-primary-foreground" : "text-primary"
                  }`}
                />
              </div>
              <h3
                className={`font-sans font-bold text-lg mb-3 ${
                  tech.highlight ? "text-primary-foreground" : "text-primary-foreground"
                }`}
              >
                {tech.title}
              </h3>
              <p
                className={`font-sans text-sm leading-relaxed ${
                  tech.highlight
                    ? "text-primary-foreground/80"
                    : "text-primary-foreground/60"
                }`}
              >
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

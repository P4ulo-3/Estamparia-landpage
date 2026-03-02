"use client"

import { Upload, CheckCircle, Cog, Truck } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Envie sua Arte",
    description: "Envie seu design pronto ou conte sua ideia que nossa equipe cria para você.",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: CheckCircle,
    step: "02",
    title: "Aprovação Digital",
    description: "Receba uma prévia digital do produto final para aprovação antes da produção.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Cog,
    step: "03",
    title: "Produção",
    description: "Produzimos com equipamentos de última geração e materiais de alta qualidade.",
    color: "bg-highlight text-highlight-foreground",
  },
  {
    icon: Truck,
    step: "04",
    title: "Entrega Rápida",
    description: "Entregamos seu pedido no prazo combinado, com todo cuidado e segurança.",
    color: "bg-primary text-primary-foreground",
  },
]

export default function ProcessSection() {
  return (
    <section id="processo" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-accent/10 text-accent-foreground font-sans font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Como Funciona
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Processo <span className="text-primary">Simples e Rápido</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-2xl mx-auto text-pretty">
            Do seu pedido à entrega, garantimos uma experiência sem complicações
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="reveal relative" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-border" />
              )}

              <div className="flex flex-col items-center text-center group">
                <div className={`relative w-24 h-24 ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-primary-foreground rounded-full flex items-center justify-center font-sans font-bold text-xs">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

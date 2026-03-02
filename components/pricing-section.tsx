"use client"

import { Check } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "R$ 29",
    unit: "/unidade",
    description: "Ideal para pedidos pequenos e testes",
    features: [
      "A partir de 10 unidades",
      "1 cor de estampa",
      "Silk Screen",
      "Prazo: 7 dias úteis",
      "Arte simples inclusa",
    ],
    highlighted: false,
    cta: "Solicitar Orçamento",
  },
  {
    name: "Profissional",
    price: "R$ 22",
    unit: "/unidade",
    description: "Melhor custo-benefício para empresas",
    features: [
      "A partir de 50 unidades",
      "Cores ilimitadas",
      "Sublimação ou DTF",
      "Prazo: 5 dias úteis",
      "Criação de arte inclusa",
      "Aprovação digital",
    ],
    highlighted: true,
    cta: "Mais Popular",
  },
  {
    name: "Corporativo",
    price: "R$ 18",
    unit: "/unidade",
    description: "Para grandes volumes e parceiros",
    features: [
      "A partir de 200 unidades",
      "Cores ilimitadas",
      "Todas as técnicas",
      "Prazo: 3 dias úteis",
      "Designer dedicado",
      "Frete grátis",
      "Amostras grátis",
    ],
    highlighted: false,
    cta: "Fale Conosco",
  },
]

export default function PricingSection() {
  return (
    <section id="precos" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-accent/10 text-accent-foreground font-sans font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Preços
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Planos que cabem no{" "}
            <span className="text-primary">seu bolso</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-2xl mx-auto text-pretty">
            Oferecemos preços competitivos para todos os tamanhos de projetos
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`reveal rounded-2xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 scale-105 relative"
                  : "bg-card border border-border shadow-sm"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-sans text-xs font-bold px-4 py-1.5 rounded-full">
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-sans font-bold text-xl mb-2 ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`font-sans text-sm ${
                    plan.highlighted
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={`font-sans font-bold text-4xl ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`font-sans text-sm ${
                    plan.highlighted
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.unit}
                </span>
              </div>

              <ul className="flex-1 flex flex-col gap-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlighted
                          ? "bg-primary-foreground/20"
                          : "bg-primary/10"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.highlighted
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                    </div>
                    <span
                      className={`font-sans text-sm ${
                        plan.highlighted
                          ? "text-primary-foreground/90"
                          : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`font-sans font-semibold text-sm py-3.5 rounded-full text-center transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

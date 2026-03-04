"use client"

import Image from "next/image"
import { Shirt, Coffee, ShoppingBag, PartyPopper, Gift } from "lucide-react"

const services = [
  {
    icon: Shirt,
    title: "Camisetas Personalizadas",
    description: "Estampas de alta qualidade em diversos tecidos e cores. Do casual ao corporativo.",
    image: "/images/Camisas-Personalizadas.png",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Coffee,
    title: "Canecas Personalizadas",
    description: "Sublimação de alta definição em canecas de porcelana e polímero.",
    image: "/images/Caneca-Personalizada.png",
    color: "bg-accent/10 text-accent-foreground",
  },
  {
    icon: ShoppingBag,
    title: "Sacolas Ecológicas",
    description: "Sacolas reutilizáveis personalizadas. Sustentabilidade com a cara da sua marca.",
    image: "/images/Sacolas-Boca-de-Palhaço-Personalizadas.png",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: PartyPopper,
    title: "Abadás para Eventos",
    description: "Abadás coloridos e criativos para festas, carnavais e eventos corporativos.",
    image: "/images/abada.jpg",
    color: "bg-highlight/10 text-highlight",
  },
  {
    icon: Gift,
    title: "Brindes Corporativos",
    description: "Linha completa de brindes personalizados para fortalecer sua marca.",
    image: "/images/brindes.jpg",
    color: "bg-accent/10 text-accent-foreground",
  },
]

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-primary/10 text-primary font-sans font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            O que podemos fazer{" "}
            <span className="text-primary">por você</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-2xl mx-auto text-pretty">
            Oferecemos soluções completas em estamparia personalizada para todos os tipos de projetos
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-bold text-lg text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

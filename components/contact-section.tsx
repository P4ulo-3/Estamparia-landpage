"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    details: "Rua Vera Cruz, 194 - Parque Guadalajara, Caucaia - CE",
  },
  {
    icon: Phone,
    title: "Telefone",
    details: "(85) 98125-0926",
  },
  {
    icon: Mail,
    title: "E-mail",
    details: "renoveestamparia@gmail.com",
  },
  {
    icon: Clock,
    title: "Horário",
    details: "Seg - Sex: 9h às 18h | Sáb: 9h às 12h",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Me chamo ${formData.name}.\n\nServiço: ${formData.service}\n\n${formData.message}\n\nE-mail: ${formData.email}\nTelefone: ${formData.phone}`;
    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5585981250926?text=${encoded}`, "_blank");
  };

  const address =
    contactInfo.find((c) => c.title === "Endereço")?.details ||
    contactInfo[0].details;

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-primary/10 text-primary font-sans font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Contato
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Entre em <span className="text-primary">contato</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-2xl mx-auto text-pretty">
            Solicite um orçamento sem compromisso ou tire suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="reveal">
            <h3 className="font-sans font-bold text-2xl text-foreground mb-8">
              Informações de Contato
            </h3>
            <div className="flex flex-col gap-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground">
                      {info.title}
                    </h4>
                    <p className="font-sans text-sm text-muted-foreground mt-0.5">
                      {info.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden h-64 bg-secondary border border-border">
              <iframe
                src={mapSrc}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Renove Estamparia"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm"
            >
              <h3 className="font-sans font-bold text-2xl text-card-foreground mb-6">
                Solicite seu Orçamento
              </h3>

              <div className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="font-sans text-sm font-medium text-card-foreground mb-1.5 block"
                  >
                    Nome completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="font-sans text-sm font-medium text-card-foreground mb-1.5 block"
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="font-sans text-sm font-medium text-card-foreground mb-1.5 block"
                    >
                      Telefone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="font-sans text-sm font-medium text-card-foreground mb-1.5 block"
                  >
                    Serviço desejado
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Camisetas Personalizadas">
                      Camisetas Personalizadas
                    </option>
                    <option value="Canecas Personalizadas">
                      Canecas Personalizadas
                    </option>
                    <option value="Sacolas Ecológicas">
                      Sacolas Ecológicas
                    </option>
                    <option value="Abadás para Eventos">
                      Abadás para Eventos
                    </option>
                    <option value="Brindes Corporativos">
                      Brindes Corporativos
                    </option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-sans text-sm font-medium text-card-foreground mb-1.5 block"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Descreva seu projeto, quantidade, prazo..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-sans font-semibold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Enviar pelo WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

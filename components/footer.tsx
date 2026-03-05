"use client"

import Image from "next/image"

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Preços", href: "#precos" },
  { label: "Contato", href: "#contato" },
]

const services = [
  "Camisetas Personalizadas",
  "Canecas Personalizadas",
  "Sacolas Ecológicas",
  "Abadás para Eventos",
  "Brindes Corporativos",
]

export default function Footer() {
  return (
    <footer className="bg-foreground pt-16 pb-6">
      {/* CTA Banner */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 mb-16">
        <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-primary-foreground text-balance">
              Ganhe 10% de desconto no primeiro pedido!
            </h3>
            <p className="font-sans text-primary-foreground/80 mt-2">
              Entre em contato agora e aproveite esta oferta especial.
            </p>
          </div>
          <a
            href="https://wa.me/5585981250926?text=Olá! Quero aproveitar o desconto de 10%!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground text-primary font-sans font-bold px-8 py-4 rounded-full hover:bg-primary-foreground/90 transition-all shadow-lg flex-shrink-0"
          >
            Quero meu desconto
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Renove Estamparia Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-sans font-bold text-lg text-primary-foreground">
                Renove Estamparia
              </span>
            </div>
            <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed mb-6">
              Transformamos suas ideias em estampas incríveis. Qualidade,
              agilidade e criatividade em cada projeto.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {["Instagram", "Facebook", "WhatsApp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social}
                >
                  {social === "Instagram" && (
                    <a href="https://www.instagram.com/renoveestamparia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="blank">
                    <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    </a>
                  )}
                  {social === "Facebook" && (
                    <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social === "WhatsApp" && (
                   <a href="https://wa.me/5585981250926?text=Olá! Gostaria de fazer um orçamento."
                          target="_blank">
                   <svg  
                          className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    </a>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-primary-foreground mb-4">
              Links Rápidos
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-bold text-primary-foreground mb-4">
              Serviços
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-sans text-sm text-primary-foreground/60">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-primary-foreground mb-4">
              Contato
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="font-sans text-sm text-primary-foreground/60">
                Rua Vera Cruz, 194 - Parque Guadalajara, 
              </li>
              <li className="font-sans text-sm text-primary-foreground/60">
                Caucaia -  CE, CEP 61650-450
              </li>
              <li className="font-sans text-sm text-primary-foreground/60">
                (85) 98125-0926
              </li>
              <li className="font-sans text-sm text-primary-foreground/60">
                renoveestamparia@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-primary-foreground/40">
              &copy; {new Date().getFullYear()} Renove Estamparia. Todos os direitos
              reservados.
            </p>
            <p className="font-sans text-xs text-primary-foreground/40">
              Brindes & Personalização
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

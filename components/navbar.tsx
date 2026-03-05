"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Preços", href: "#precos" },
  { label: "Contato", href: "#contato" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-foreground/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Renove Estamparia Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-primary-foreground font-sans font-bold text-lg hidden sm:block">
            Renove Estamparia
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-primary font-sans text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5585981250926"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-sans font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/25"
          >
            Orçamento
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-foreground/95 backdrop-blur-md border-t border-primary-foreground/10 mt-2">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-primary-foreground/80 hover:text-primary font-sans text-base font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-sans font-semibold text-sm px-6 py-3 rounded-full text-center hover:bg-primary/90 transition-all mt-2"
            >
              Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

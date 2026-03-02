"use client"

import { useEffect } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import TechnologiesSection from "@/components/technologies-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  useScrollReveal()

  useEffect(() => {
    console.log("[v0] Home page mounted successfully")
  }, [])

  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TechnologiesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

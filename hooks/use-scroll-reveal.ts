"use client"

import { useEffect } from "react"

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    // Observe existing elements
    const observe = () => {
      const elements = document.querySelectorAll(".reveal:not(.visible)")
      elements.forEach((el) => observer.observe(el))
    }

    observe()

    // Use MutationObserver to watch for new .reveal elements
    const mutationObserver = new MutationObserver(() => {
      observe()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}

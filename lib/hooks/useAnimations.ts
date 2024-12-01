// hooks/useAnimations.ts
"use client"
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

// Add type for split-type elements
type SplitTypeElement = HTMLElement & {
  chars?: HTMLElement[]
}

export const useAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const splitTypes = document.querySelectorAll('[data-animation="split-type"]')
    splitTypes.forEach((char) => {
      const text = new SplitType(char as SplitTypeElement, { types: 'chars' })
      if (text.chars) {
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.1,
          y: 100,
        })
      }
    })

    // Parallax effects
    const parallaxElements = document.querySelectorAll('[data-speed]')
    parallaxElements.forEach((element) => {
      const speed = element.getAttribute('data-speed')
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed!,
        ease: 'none',
      })
    })
  }, [])
}
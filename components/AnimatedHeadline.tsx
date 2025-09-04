'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/useReducedMotion'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedHeadlineProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedHeadline({ children, className }: AnimatedHeadlineProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || !headlineRef.current) return

    const element = headlineRef.current
    
    // Initial state using transform instead of y
    gsap.set(element, { 
      opacity: 0, 
      transform: "translateY(50px)" 
    })

    // Animation using only transform and opacity
    gsap.to(element, {
      opacity: 1,
      transform: "translateY(0px)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [prefersReducedMotion])

  return (
    <h1 ref={headlineRef} className={className}>
      {children}
    </h1>
  )
}
'use client';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export default function HeadlineReveal(){
  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lines = document.querySelectorAll<HTMLElement>('[data-line]');
    const underline = document.querySelector<HTMLElement>('[data-underline]');
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

    if (lines.length) {
      // Fallback-Init für den Fall, dass CSS nicht greift
      lines.forEach(el => { el.style.transform='translateY(110%)'; el.style.opacity='0'; el.style.filter='blur(2px)'; });
      tl.to(lines, { y: '0%', opacity: 1, filter:'blur(0px)', stagger: 0.08 }, 0);
    }
    if (underline) tl.to(underline, { scaleX: 1, duration: 0.9 }, 0.15);

    return () => tl.kill();
  }, []);
  return null;
}
'use client';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export default function HeadlineReveal(){
  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lines = document.querySelectorAll<HTMLElement>('[data-line]');
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

    if (lines.length) {
      tl.to(lines, { 
        y: "0%", 
        opacity: 1, 
        stagger: 0.08,
        onStart() { 
          lines.forEach(el => {
            el.style.transform ||= "translate3d(0,100%,0)";
            el.style.opacity ||= "0";
          });
        }
      }, 0);
    }

    return () => tl.kill();
  }, []);
  return null;
}
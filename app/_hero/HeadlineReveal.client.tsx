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
      tl.to(lines, { 
        y: "0%", 
        opacity: 1, 
        filter: "blur(0px)", 
        stagger: 0.08,
        onStart() { 
          lines.forEach(el => {
            el.style.transform ||= "translate3d(0,110%,0)";
            el.style.opacity ||= "0";
            el.style.filter ||= "blur(2px)";
          });
        }
      }, 0);
    }
    if (underline) {
      gsap.set(underline, { y: '1em', transformOrigin: '0% 50%' });
      tl.to(underline, { scaleX: 1, duration: 0.9 }, 0.15);
    }

    return () => tl.kill();
  }, []);
  return null;
}
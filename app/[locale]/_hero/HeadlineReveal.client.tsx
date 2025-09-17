'use client';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export default function HeadlineReveal(){
  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lines = document.querySelectorAll('[data-line]');
    const underline = document.querySelector('[data-underline]') as HTMLElement | null;
    const tl = gsap.timeline({ defaults:{ ease:'power2.out', duration:0.7 } });
    if (lines.length) {
      lines.forEach(el => {
        el.style.transform ||= "translate3d(0,100%,0)";
        el.style.opacity ||= "0";
      });
      tl.from(lines, { yPercent:20, opacity:0, stagger:0.08, clearProps:'all' });
    }
    if (underline) gsap.fromTo(underline, { scaleX:0, y:'1em' }, { scaleX:1, y:'1em', transformOrigin:'0% 50%', duration:0.8, delay:0.1 });
    return () => tl.kill();
  }, []);
  return null;
}
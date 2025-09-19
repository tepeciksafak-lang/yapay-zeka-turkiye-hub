'use client';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export default function HeadlineReveal(){
  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lines = document.querySelectorAll<HTMLElement>('[data-line]');
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

  if (lines.length) {
    tl.fromTo(lines,
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, stagger: 0.08, clearProps: 'transform,opacity' }
    );
  }

  return () => tl.kill();
}, []);
return null;
}
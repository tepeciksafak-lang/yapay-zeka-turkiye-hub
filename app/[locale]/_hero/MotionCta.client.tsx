'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './hero.module.css';

export default function MotionCta({
  href, children, variant='primary'
}:{ href:string; children:React.ReactNode; variant?:'primary'|'ghost' }){
  return (
    <motion.div whileHover={{ scale:1.04 }} whileTap={{ scale:0.98 }}>
      <Link href={href} className={variant==='primary' ? styles.ctaPrimary : styles.ctaGhost}
            aria-label={typeof children==='string' ? children : 'CTA'}>
        {children}
      </Link>
    </motion.div>
  );
}
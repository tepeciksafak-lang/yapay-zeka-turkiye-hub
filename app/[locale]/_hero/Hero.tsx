import dynamic from 'next/dynamic';
import styles from './hero.module.css';
import { heroCopy, HeroLang } from './copy';

const HeadlineReveal = dynamic(() => import('./HeadlineReveal.client'), { ssr:false });
const MotionCta     = dynamic(() => import('./MotionCta.client'),     { ssr:false });

export default function Hero({ locale }: { locale: HeroLang }){
  const copy = heroCopy[locale] ?? heroCopy.tr;
  return (
    <section className={styles.heroSection}>
      <div aria-hidden className={styles.glowLayer}>
        <div className={styles.radialGlow} /><div className={styles.noise} />
      </div>
      <div className={styles.container}>
        <div>
          <h1 className={styles.headline}>
            <span className={styles.lineWrap}>
              <span data-line className={styles.line}>{copy.title1}</span>
            </span>
            <span className={styles.lineWrap}>
              <span data-line className={styles.line}>{copy.title2}</span>
            </span>
          </h1>
          <HeadlineReveal />
          <p className={styles.sub}>{copy.subtitle}</p>
          <div className={styles.ctaRow}>
            <MotionCta href={`/${locale}#basla`} variant="primary">{copy.ctaPrimary}</MotionCta>
          </div>
        </div>
        <div>{/* optional visual */}</div>
      </div>
    </section>
  );
}
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type FeatureItem = {
  id: number | string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description?: string;    // optional kurzer Teaser
  bullets?: string[];      // 3 Zeilen Detailtext (empfohlen)
  image: string;           // Bild-URL oder /public Pfad
  imageAlt?: string;
};

export function Features({
  features,
  className,
}: {
  features: FeatureItem[];
  className?: string;
}) {
  const [activeId, setActiveId] = React.useState(features[0]?.id);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const active = React.useMemo(
    () => features.find(f => f.id === activeId) ?? features[0],
    [activeId, features]
  );

  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const idx = features.findIndex(f => f.id === activeId);
    if (e.key === 'ArrowDown') { 
      setActiveId(features[(idx + 1) % features.length].id); 
      e.preventDefault(); 
    }
    if (e.key === 'ArrowUp') { 
      setActiveId(features[(idx - 1 + features.length) % features.length].id); 
      e.preventDefault(); 
    }
  };

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-8 items-start", className)}>
      {/* Linke Liste */}
      <div 
        className="md:col-span-5" 
        role="listbox" 
        aria-label="Feature Options" 
        tabIndex={0} 
        onKeyDown={onKey}
      >
        {features.map((f) => {
          const Icon = f.icon;
          const selected = f.id === activeId;
          return (
            <button
              key={f.id}
              role="option"
              aria-selected={selected}
              onClick={() => setActiveId(f.id)}
              className={cn(
                'w-full text-left rounded-xl px-4 py-3 mb-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                selected 
                  ? 'bg-primary/10 border border-primary/20' 
                  : 'bg-muted/30 hover:bg-muted/50 border border-transparent'
              )}
            >
              <div className="flex items-center gap-3">
                <span className={cn(
                  'inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors',
                  selected 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-muted text-muted-foreground'
                )}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className={cn(
                  'font-medium transition-colors',
                  selected ? 'text-foreground' : 'text-muted-foreground'
                )}>
                  {f.title}
                </span>
              </div>
              {f.description && (
                <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
              )}
            </button>
          );
        })}
      </div>

      {/* Rechtes Detail-Panel */}
      <div className="md:col-span-7">
        <div
          key={String(active?.id)}
          className={cn(
            'rounded-2xl border bg-card p-4 md:p-6 transition-all duration-300',
            !reduceMotion && 'animate-fade-in'
          )}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
            <img
              src={active?.image || '/placeholder.svg'}
              alt={active?.imageAlt || active?.title || 'Feature detail image'}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {active?.bullets?.length ? (
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {active.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          ) : active?.description ? (
            <p className="mt-4 text-muted-foreground">{active.description}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
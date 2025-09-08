"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  image?: string;
  imageAlt?: string;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const isMobile = useIsMobile();

  // Track window size for responsive calculations
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Get responsive values based on screen size
  const getResponsiveValues = () => {
    const { width } = windowSize;
    
    if (width < 768) {
      // Mobile
      return {
        radius: Math.min(150, width * 0.35),
        nodeSize: 32,
        iconSize: 14,
        cardWidth: Math.min(280, width - 40),
        containerHeight: '65vh',
        orbitHeight: '60vh'
      };
    } else if (width < 1024) {
      // Tablet
      return {
        radius: Math.min(220, width * 0.28),
        nodeSize: 40,
        iconSize: 18,
        cardWidth: 320,
        containerHeight: '75vh',
        orbitHeight: '70vh'
      };
    } else {
      // Desktop
      return {
        radius: Math.min(300, width * 0.25),
        nodeSize: 48,
        iconSize: 20,
        cardWidth: 360,
        containerHeight: '85vh',
        orbitHeight: '78vh'
      };
    }
  };

  const responsive = getResponsiveValues();

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const next = Object.fromEntries(Object.keys(prev).map(k => [Number(k), false]));
      const now = !prev[id];
      next[id] = now;

      if (now) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const rel = getRelatedItems(id);
        const pulse: Record<number, boolean> = {};
        rel.forEach(r => pulse[r] = true);
        setPulseEffect(pulse);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return next;
    });
  };

  useEffect(() => {
    let t: NodeJS.Timeout | undefined;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (autoRotate && !prefersReducedMotion) {
      t = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
      }, 50);
    }
    return () => { if (t) clearInterval(t); };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;
    const idx = timelineData.findIndex((i) => i.id === nodeId);
    const total = timelineData.length;
    const targetAngle = (idx / total) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = responsive.radius;
    const rad = (angle * Math.PI) / 180;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    const zIndex = Math.round(100 + 50 * Math.cos(rad));
    const opacity = Math.max(0.55, Math.min(1, 0.55 + 0.45 * ((1 + Math.sin(rad)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (id: number) => timelineData.find((i) => i.id === id)?.relatedIds ?? [];
  const isRelatedToActive = (id: number) => activeNodeId ? getRelatedItems(activeNodeId).includes(id) : false;

  return (
    <div
      className="w-full overflow-hidden bg-bg-1"
      style={{ minHeight: responsive.containerHeight }}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div 
        className="relative w-full max-w-6xl mx-auto flex items-center justify-center"
        style={{ height: responsive.orbitHeight }}
      >
        {/* Subtle lime glow background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="w-full h-full bg-gradient-radial from-lime/10 via-transparent to-transparent" />
        </div>

        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Central core */}
          <div className={`absolute ${isMobile ? 'w-16 h-16' : 'w-20 h-20 lg:w-24 lg:h-24'} rounded-full flex items-center justify-center z-10 bg-gradient-to-br from-lime to-emerald`}>
            <div className={`absolute ${isMobile ? 'w-20 h-20' : 'w-24 h-24 lg:w-28 lg:h-28'} rounded-full border border-white/15 animate-ping opacity-70`}></div>
            <div className={`absolute ${isMobile ? 'w-24 h-24' : 'w-28 h-28 lg:w-32 lg:h-32'} rounded-full border border-white/10 animate-ping opacity-50`} style={{ animationDelay: "0.5s" }}></div>
            <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10 lg:w-12 lg:h-12'} rounded-full bg-white/90 backdrop-blur-md`}></div>
          </div>

          {/* Orbital rings */}
          <div 
            className="absolute rounded-full border border-white/10" 
            style={{ 
              width: `${responsive.radius * 2}px`, 
              height: `${responsive.radius * 2}px` 
            }}
          ></div>
          <div 
            className="absolute rounded-full border border-white/5" 
            style={{ 
              width: `${responsive.radius * 2.4}px`, 
              height: `${responsive.radius * 2.4}px` 
            }}
          ></div>

          {timelineData.map((item, index) => {
            const pos = calculateNodePosition(index, timelineData.length);
            const expanded = !!expandedItems[item.id];
            const related = isRelatedToActive(item.id);
            const pulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${pos.x}px, ${pos.y}px)`,
              zIndex: expanded ? 200 : pos.zIndex,
              opacity: expanded ? 1 : pos.opacity,
            } as const;

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {pulsing && (
                  <div className="absolute rounded-full -inset-2 bg-gradient-radial from-lime/25 to-transparent animate-pulse" />
                )}
                
                <div
                  className={`rounded-full flex items-center justify-center border-2 transition-all duration-500 transform ${
                    expanded 
                      ? "bg-white text-slate-900 border-white shadow-lg shadow-lime/30 scale-[1.4]"
                      : related 
                        ? "bg-white/60 text-slate-900 border-white scale-110"
                        : "bg-card text-text-hi border-white/40 hover:bg-border/30 hover:scale-105"
                  }`}
                  style={{ 
                    width: `${responsive.nodeSize}px`, 
                    height: `${responsive.nodeSize}px` 
                  }}
                >
                  <Icon size={responsive.iconSize} />
                </div>

                <div className={`absolute whitespace-nowrap text-xs font-semibold tracking-wide transition-all duration-500 ${
                  expanded ? "text-white scale-125" : "text-white/85"
                }`}
                style={{ 
                  top: `${responsive.nodeSize + 8}px`,
                  fontSize: isMobile ? '11px' : '12px'
                }}>
                  {item.title}
                </div>

                {expanded && (
                  <Card 
                    className="absolute left-1/2 -translate-x-1/2 bg-bg-2/95 backdrop-blur-lg border border-white/15 shadow-xl shadow-black/40 overflow-visible rounded-xl"
                    style={{
                      top: `${responsive.nodeSize + 32}px`,
                      width: `${responsive.cardWidth}px`,
                      maxWidth: isMobile ? '90vw' : 'none'
                    }}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/15"></div>
                    <CardHeader className="pb-4">
                      <CardTitle className={`text-text-hi ${isMobile ? 'text-sm' : 'text-base lg:text-lg'}`}>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className={`text-text-hi/90 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      {item.image && (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                          <img
                            src={item.image}
                            alt={item.imageAlt ?? item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="whitespace-pre-line leading-relaxed">{item.content}</div>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
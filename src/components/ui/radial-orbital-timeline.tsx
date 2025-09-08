"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

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
    // Use clamp for responsive radius: min 260px, preferred 38vmin, max 480px
    const radius = 280; // Base radius for consistent calculation
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
      className="w-full min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-bg-1"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-6xl h-[75vh] md:h-[80vh] lg:h-[85vh] flex items-center justify-center">
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
          <div className="absolute w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center z-10 bg-gradient-to-br from-lime to-emerald">
            <div className="absolute w-24 h-24 lg:w-28 lg:h-28 rounded-full border border-white/15 animate-ping opacity-70"></div>
            <div className="absolute w-28 h-28 lg:w-32 lg:h-32 rounded-full border border-white/10 animate-ping opacity-50" style={{ animationDelay: "0.5s" }}></div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-md"></div>
          </div>

          {/* Orbital rings */}
          <div className="absolute rounded-full border border-white/10" style={{ 
            width: `${Math.min(Math.max(520, window.innerWidth * 0.76), 960)}px`, 
            height: `${Math.min(Math.max(520, window.innerWidth * 0.76), 960)}px` 
          }}></div>
          <div className="absolute rounded-full border border-white/5" style={{ 
            width: `${Math.min(Math.max(600, window.innerWidth * 0.88), 1120)}px`, 
            height: `${Math.min(Math.max(600, window.innerWidth * 0.88), 1120)}px` 
          }}></div>

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
                  className={`w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 transform ${
                    expanded 
                      ? "bg-white text-slate-900 border-white shadow-lg shadow-lime/30 scale-[1.4]"
                      : related 
                        ? "bg-white/60 text-slate-900 border-white scale-110"
                        : "bg-card text-text-hi border-white/40 hover:bg-border/30 hover:scale-105"
                  }`}
                >
                  <Icon size={window.innerWidth >= 1024 ? 20 : window.innerWidth >= 768 ? 18 : 16} />
                </div>

                <div className={`absolute top-14 lg:top-16 whitespace-nowrap text-xs md:text-sm lg:text-base font-semibold tracking-wide transition-all duration-500 ${
                  expanded ? "text-white scale-125" : "text-white/85"
                }`}>
                  {item.title}
                </div>

                {expanded && (
                  <Card className="absolute top-20 lg:top-24 left-1/2 -translate-x-1/2 w-80 lg:w-96 bg-bg-2/95 backdrop-blur-lg border border-white/15 shadow-xl shadow-black/40 overflow-visible rounded-xl">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/15"></div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-base lg:text-lg text-text-hi">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-text-hi/90">
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
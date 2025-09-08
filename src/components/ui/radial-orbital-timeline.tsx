"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
        setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
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
    const radius = 200;
    const rad = (angle * Math.PI) / 180;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    const zIndex = Math.round(100 + 50 * Math.cos(rad));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(rad)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (id: number) => timelineData.find((i) => i.id === id)?.relatedIds ?? [];
  const isRelatedToActive = (id: number) => activeNodeId ? getRelatedItems(activeNodeId).includes(id) : false;

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":   return "text-slate-900 bg-lime-300 border-lime-400";
      case "in-progress": return "text-slate-900 bg-emerald-300 border-emerald-400";
      case "pending":     return "text-white bg-white/10 border-white/30";
      default:            return "text-white bg-white/10 border-white/30";
    }
  };

  return (
    <div
      className="w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-bg-1"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-5xl h-[60vh] md:h-[72vh] flex items-center justify-center">
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
          <div className="absolute w-16 h-16 rounded-full flex items-center justify-center z-10 bg-gradient-to-br from-lime to-emerald">
            <div className="absolute w-20 h-20 rounded-full border border-white/15 animate-ping opacity-70"></div>
            <div className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50" style={{ animationDelay: "0.5s" }}></div>
            <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md"></div>
          </div>

          {/* Orbital ring */}
          <div className="absolute w-96 h-96 rounded-full border border-white/10"></div>

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
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 transform ${
                    expanded 
                      ? "bg-white text-slate-900 border-white shadow-lg shadow-lime/30 scale-150"
                      : related 
                        ? "bg-white/60 text-slate-900 border-white"
                        : "bg-card text-text-hi border-white/40 hover:bg-border/30"
                  }`}
                >
                  <Icon size={16} />
                </div>

                <div className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${
                  expanded ? "text-white scale-125" : "text-text-muted"
                }`}>
                  {item.title}
                </div>

                {expanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-72 bg-card/95 backdrop-blur-lg border-border shadow-xl shadow-black/40 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-border"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>
                          {item.status === "completed" ? "TAMAMLANDI" : item.status === "in-progress" ? "DEVAM EDİYOR" : "BEKLEMEDE"}
                        </Badge>
                        <span className="text-xs font-mono text-text-muted">{item.date}</span>
                      </div>
                      <CardTitle className="text-sm mt-2 text-text-hi">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-text-hi/90">
                      <div className="whitespace-pre-line">{item.content}</div>

                      <div className="mt-4 pt-3 border-t border-border">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center text-text-muted">
                            <Zap size={10} className="mr-1 text-lime" />
                            Enerji Seviyesi
                          </span>
                          <span className="font-mono text-text-hi">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-lime to-emerald"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-border">
                          <div className="flex items-center mb-2">
                            <Link size={10} className="text-text-muted mr-1" />
                            <h4 className="text-xs uppercase tracking-wider font-medium text-text-muted">
                              Bağlı Düğümler
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((rid) => (
                              <Button
                                key={rid}
                                variant="outline"
                                size="sm"
                                className="h-6 px-2 py-0 text-xs"
                                onClick={(e) => { e.stopPropagation(); toggleItem(rid); }}
                              >
                                {timelineData.find(i => i.id === rid)?.title}
                                <ArrowRight size={8} className="ml-1" />
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
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
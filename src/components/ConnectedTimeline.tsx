import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface CaseStudy {
  id: number;
  etiket: string;
  baslik: string;
  ozet: string;
  kpis: Array<{
    label: string;
    value: string;
  }>;
  problem: string[];
  cozum: string;
  uygulamaAsamalari: string[];
  sonuclar: string[];
  alinti?: string;
}

interface ConnectedTimelineProps {
  caseStudies: CaseStudy[];
}

export default function ConnectedTimeline({ caseStudies }: ConnectedTimelineProps) {
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleNodeClick = (caseId: number) => {
    setActiveCase(activeCase === caseId ? null : caseId);
  };

  const handleKeyDown = (event: React.KeyboardEvent, caseId: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNodeClick(caseId);
    }
  };

  return (
    <div className="relative py-16" style={{ backgroundColor: '#0B0F14' }}>
      <div className="container mx-auto px-4">
        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative flex justify-between items-center mb-16">
            {/* Timeline Line */}
            <div 
              className="absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2"
              style={{
                background: '#A3E635',
                boxShadow: '0 0 8px rgba(163, 230, 53, 0.18)',
              }}
            />
            
            {/* Timeline Nodes */}
            {caseStudies.map((caseStudy, index) => (
              <div key={caseStudy.id} className="relative z-10">
                <button
                  onClick={() => handleNodeClick(caseStudy.id)}
                  onKeyDown={(e) => handleKeyDown(e, caseStudy.id)}
                  className={`
                    w-16 h-16 rounded-full border-2 transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-slate-900
                    ${activeCase === caseStudy.id
                      ? 'bg-lime-400/12 border-lime-400 shadow-lg shadow-lime-400/25'
                      : 'bg-slate-900 border-lime-400 hover:bg-lime-400/8'
                    }
                    ${prefersReducedMotion ? '' : 'hover:scale-105'}
                  `}
                  style={{ backgroundColor: activeCase === caseStudy.id ? 'rgba(163, 230, 53, 0.12)' : '#111827' }}
                  aria-selected={activeCase === caseStudy.id}
                  role="tab"
                >
                  <span className="text-lime-400 font-bold text-lg">{index + 1}</span>
                </button>
                <div className="mt-4 text-center max-w-32">
                  <p className="text-lime-400 text-sm font-medium">{caseStudy.etiket}</p>
                  <p className="text-slate-300 text-xs mt-1">{caseStudy.baslik}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Panel */}
          {activeCase && (
            <div 
              className={`transition-all duration-200 ${prefersReducedMotion ? '' : 'animate-fade-in'}`}
            >
              <CasePanel caseStudy={caseStudies.find(c => c.id === activeCase)!} />
            </div>
          )}
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div 
              className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{
                background: '#A3E635',
                boxShadow: '0 0 8px rgba(163, 230, 53, 0.18)',
              }}
            />
            
            {caseStudies.map((caseStudy, index) => (
              <div key={caseStudy.id} className="relative mb-8">
                {/* Mobile Node */}
                <div className="flex items-start">
                  <button
                    onClick={() => handleNodeClick(caseStudy.id)}
                    onKeyDown={(e) => handleKeyDown(e, caseStudy.id)}
                    className={`
                      relative z-10 w-16 h-16 rounded-full border-2 transition-all duration-200 flex-shrink-0
                      focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-slate-900
                      ${activeCase === caseStudy.id
                        ? 'bg-lime-400/12 border-lime-400 shadow-lg shadow-lime-400/25'
                        : 'bg-slate-900 border-lime-400 hover:bg-lime-400/8'
                      }
                    `}
                    style={{ backgroundColor: activeCase === caseStudy.id ? 'rgba(163, 230, 53, 0.12)' : '#111827' }}
                    aria-selected={activeCase === caseStudy.id}
                    role="tab"
                  >
                    <span className="text-lime-400 font-bold text-lg mx-auto">{index + 1}</span>
                  </button>
                  
                  <div className="ml-6 flex-1">
                    <Badge 
                      variant="outline" 
                      className="bg-transparent border-lime-400 text-lime-400 mb-2"
                    >
                      {caseStudy.etiket}
                    </Badge>
                    <h3 className="text-slate-300 font-semibold text-lg">{caseStudy.baslik}</h3>
                  </div>
                </div>

                {/* Mobile Panel */}
                {activeCase === caseStudy.id && (
                  <div 
                    className={`mt-4 ml-22 transition-all duration-200 ${prefersReducedMotion ? '' : 'animate-fade-in'}`}
                  >
                    <CasePanel caseStudy={caseStudy} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CasePanel({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Card 
      className="border border-slate-700 bg-slate-900/90 backdrop-blur-sm"
      style={{ 
        borderRadius: '14px',
        borderColor: '#1F2937',
        boxShadow: '0 0 20px rgba(163, 230, 53, 0.1)'
      }}
    >
      <CardContent className="p-8">
        {/* Brief Summary */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-slate-200 mb-4">Kısa Özet</h3>
          <p className="text-slate-400 leading-relaxed">{caseStudy.ozet}</p>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {caseStudy.kpis.map((kpi, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 p-4 rounded-lg border border-slate-700"
            >
              <p className="text-slate-400 text-sm mb-1">{kpi.label}</p>
              <p className="text-lime-400 text-2xl font-bold">{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="problem" className="w-full" role="tablist">
          <TabsList 
            className="grid w-full grid-cols-4 bg-slate-800/30 border border-slate-700"
            style={{ height: 'auto', padding: '4px' }}
          >
            <TabsTrigger 
              value="problem"
              className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300"
              role="tab"
            >
              Problem
            </TabsTrigger>
            <TabsTrigger 
              value="cozum"
              className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300"
              role="tab"
            >
              Çözüm
            </TabsTrigger>
            <TabsTrigger 
              value="uygulama"
              className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300"
              role="tab"
            >
              Uygulama Aşamaları
            </TabsTrigger>
            <TabsTrigger 
              value="sonuclar"
              className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300"
              role="tab"
            >
              Sonuçlar
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="problem" className="mt-6" role="tabpanel">
            <ul className="space-y-3">
              {caseStudy.problem.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-400">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#A3E635' }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="cozum" className="mt-6" role="tabpanel">
            <p className="text-slate-400 leading-relaxed">{caseStudy.cozum}</p>
          </TabsContent>
          
          <TabsContent value="uygulama" className="mt-6" role="tabpanel">
            <div className="flex flex-wrap gap-2">
              {caseStudy.uygulamaAsamalari.map((asama, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="bg-transparent border-lime-400 text-lime-400 px-3 py-1"
                >
                  {asama}
                </Badge>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sonuclar" className="mt-6" role="tabpanel">
            <ul className="space-y-3">
              {caseStudy.sonuclar.map((sonuc, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-400">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#A3E635' }}
                  />
                  {sonuc}
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>

        {/* Quote */}
        {caseStudy.alinti && (
          <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700 rounded-lg">
            <blockquote className="text-slate-300 italic leading-relaxed">
              "{caseStudy.alinti}"
            </blockquote>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { getCaseStudyBySlug, getAdjacentCaseStudies } from "@/data/caseStudiesData";
import { useModal } from "@/contexts/ModalContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/lib/routeMappings";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openQuickAnalysis } = useModal();
  const { t, currentLanguage } = useLanguage();
  
  if (!slug) {
    return <Navigate to={getLocalizedRoute(currentLanguage, 'cases')} replace />;
  }

  const caseStudy = getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    return <Navigate to={getLocalizedRoute(currentLanguage, 'cases')} replace />;
  }

  const { prev, next } = getAdjacentCaseStudies(slug);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={caseStudy.metaTitle}
        description={caseStudy.metaDescription}
        image={caseStudy.ogImage}
        url={`https://pratikyz.com/tr/vaka-calismalari/${caseStudy.slug}`}
        type="article"
      />
      <BreadcrumbSchema items={[
        { name: "Ana Sayfa", url: "https://pratikyz.com/tr" },
        { name: "Vaka Çalışmaları", url: "https://pratikyz.com/tr/vaka-calismalari" },
        { name: caseStudy.baslik, url: `https://pratikyz.com/tr/vaka-calismalari/${caseStudy.slug}` }
      ]} />

      {/* Structured Data for Case Study */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": caseStudy.baslik,
          "description": caseStudy.ozet,
          "image": caseStudy.ogImage || "/og-homepage.jpg",
          "datePublished": "2024-01-15",
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Person",
            "name": "Pratik Yapay Zeka"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Pratik YZ",
            "logo": {
              "@type": "ImageObject",
              "url": "https://pratikyz.com/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://pratikyz.com/tr/vaka-calismalari/${caseStudy.slug}`
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{
        minHeight: '40vh',
        backgroundColor: '#0B0F14',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(163, 230, 53, 0.05) 0%, transparent 70%), url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23A3E635" fill-opacity="0.02"%3E%3Cpath d="m0 40l40-40h-40v40zm40 0v-40h-40l40 40z"/%3E%3C/g%3E%3C/svg%3E")'
      }}>
        <div className="container mx-auto px-4 relative py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <Link to={getLocalizedRoute(currentLanguage, 'cases')} className="inline-flex items-center text-lime-400 hover:text-lime-300 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tüm Vaka Çalışmaları
            </Link>
            
            <Badge 
              variant="outline" 
              className="mb-6 border border-[#A3E635] text-[#A3E635] bg-transparent hover:bg-[#A3E635]/5"
            >
              {caseStudy.etiket}
            </Badge>
            
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: '#E5E7EB' }}>
              {caseStudy.baslik}
            </h1>
            
            <p className="text-lg lg:text-xl" style={{ color: '#94A3B8' }}>
              {caseStudy.ozet}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#0B0F14' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {caseStudy.kpis.map((kpi, index) => (
                <Card 
                  key={index}
                  className="border border-slate-700 bg-slate-900/90 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <p className="text-slate-400 text-sm mb-2">{kpi.label}</p>
                    <p className="text-lime-400 text-3xl font-bold">{kpi.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tabs */}
            <Card 
              className="border border-slate-700 bg-slate-900/90 backdrop-blur-sm mb-12"
              style={{ 
                borderRadius: '14px',
                boxShadow: '0 0 20px rgba(163, 230, 53, 0.1)'
              }}
            >
              <CardContent className="p-8">
                <Tabs defaultValue="problem" className="w-full">
                  <TabsList 
                    className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-800/30 border border-slate-700 h-auto p-1 gap-1 mb-8"
                  >
                    <TabsTrigger 
                      value="problem"
                      className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300 px-2 py-3"
                    >
                      Problem
                    </TabsTrigger>
                    <TabsTrigger 
                      value="cozum"
                      className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300 px-2 py-3"
                    >
                      Çözüm
                    </TabsTrigger>
                    <TabsTrigger 
                      value="uygulama"
                      className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300 px-2 py-3"
                    >
                      <span className="md:hidden">Uygulama</span>
                      <span className="hidden md:inline">Uygulama Aşamaları</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="sonuclar"
                      className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300 px-2 py-3"
                    >
                      Sonuçlar
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="problem" className="mt-6">
                    <h2 className="text-xl font-semibold text-slate-200 mb-4">Karşılaşılan Zorluklar</h2>
                    <ul className="space-y-4">
                      {caseStudy.problem.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-400 text-lg">
                          <div 
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: '#A3E635' }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="cozum" className="mt-6">
                    <h2 className="text-xl font-semibold text-slate-200 mb-4">Uygulanan Çözüm</h2>
                    <p className="text-slate-400 leading-relaxed text-lg">{caseStudy.cozum}</p>
                  </TabsContent>
                  
                  <TabsContent value="uygulama" className="mt-6">
                    <h2 className="text-xl font-semibold text-slate-200 mb-4">Uygulama Aşamaları</h2>
                    <div className="flex flex-wrap gap-3">
                      {caseStudy.uygulamaAsamalari.map((asama, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="bg-transparent border-lime-400 text-lime-400 px-4 py-2 text-sm"
                        >
                          {index + 1}. {asama}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sonuclar" className="mt-6">
                    <h2 className="text-xl font-semibold text-slate-200 mb-4">Elde Edilen Sonuçlar</h2>
                    <ul className="space-y-4">
                      {caseStudy.sonuclar.map((sonuc, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-400 text-lg">
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
                    <blockquote className="text-slate-300 italic leading-relaxed text-lg">
                      "{caseStudy.alinti}"
                    </blockquote>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
              {prev ? (
                <Button asChild variant="outline" className="w-full sm:w-auto border-lime-400 text-lime-400 hover:bg-lime-400/10">
                  <Link to={getLocalizedRoute(currentLanguage, 'case-detail', { slug: prev.slug })}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {prev.baslik}
                  </Link>
                </Button>
              ) : <div className="w-full sm:w-auto" />}
              
              <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Link to={getLocalizedRoute(currentLanguage, 'cases')}>
                  Tüm Vakalar
                </Link>
              </Button>
              
              {next ? (
                <Button asChild variant="outline" className="w-full sm:w-auto border-lime-400 text-lime-400 hover:bg-lime-400/10">
                  <Link to={getLocalizedRoute(currentLanguage, 'case-detail', { slug: next.slug })}>
                    {next.baslik}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : <div className="w-full sm:w-auto" />}
            </div>

            {/* CTA */}
            <Card 
              className="border border-lime-400/30 bg-gradient-to-br from-lime-400/5 to-transparent"
            >
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-200 mb-4">
                  Sizin İçin Nasıl Bir Çözüm Üretebiliriz?
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {caseStudy.baslik} için geliştirdiğimiz bu çözümün sizin işinize nasıl uyarlanabileceğini birlikte keşfedelim.
                </p>
                <Button 
                  size="lg" 
                  className="bg-lime-400 text-slate-900 hover:bg-lime-500"
                  onClick={openQuickAnalysis}
                >
                  Ücretsiz Analiz Talep Et
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;

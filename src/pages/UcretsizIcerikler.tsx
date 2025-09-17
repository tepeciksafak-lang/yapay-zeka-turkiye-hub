import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Download, ExternalLink, Linkedin, Instagram, FileText, ChevronRight, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/SEO';
import freeResourcesData from '@/data/free-resources.tr.json';

interface FreeResource {
  id: string;
  title: string;
  excerpt: string;
  platform: 'linkedin' | 'instagram' | 'file';
  type: 'excel' | 'prompt-library' | 'template' | 'video' | 'guide';
  tags: string[];
  gate: 'link' | 'comment' | 'download';
  actionUrl: string;
  assetUrl?: string | null;
  metrics: {
    downloads: number;
    saves: number;
  };
  createdAt: string;
  gateNote?: string;
}

const UcretsizIcerikler = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['Hepsi']);
  const [sortBy, setSortBy] = useState('newest');
  const [email, setEmail] = useState('');

  const resources = freeResourcesData as FreeResource[];

  const filterOptions = [
    'Hepsi',
    'LinkedIn', 
    'Instagram',
    'Dosya/Template',
    'Prompt Library',
    'Lead Gen',
    'Ads'
  ];

  const filteredResources = useMemo(() => {
    let filtered = resources;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (!selectedFilters.includes('Hepsi')) {
      filtered = filtered.filter(resource => {
        return selectedFilters.some(filter => {
          if (filter === 'LinkedIn') return resource.platform === 'linkedin';
          if (filter === 'Instagram') return resource.platform === 'instagram';
          if (filter === 'Dosya/Template') return resource.type === 'excel' || resource.type === 'template';
          if (filter === 'Prompt Library') return resource.type === 'prompt-library';
          return resource.tags.includes(filter);
        });
      });
    }

    // Sort
    switch (sortBy) {
      case 'downloads':
        return [...filtered].sort((a, b) => b.metrics.downloads - a.metrics.downloads);
      case 'saves':
        return [...filtered].sort((a, b) => b.metrics.saves - a.metrics.saves);
      case 'newest':
      default:
        return [...filtered].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  }, [resources, searchTerm, selectedFilters, sortBy]);

  const handleFilterToggle = (filter: string) => {
    if (filter === 'Hepsi') {
      setSelectedFilters(['Hepsi']);
    } else {
      const newFilters = selectedFilters.includes(filter)
        ? selectedFilters.filter(f => f !== filter)
        : [...selectedFilters.filter(f => f !== 'Hepsi'), filter];
      
      if (newFilters.length === 0) {
        setSelectedFilters(['Hepsi']);
      } else {
        setSelectedFilters(newFilters);
      }
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin': return <Linkedin className="h-4 w-4" />;
      case 'instagram': return <Instagram className="h-4 w-4" />;
      case 'file': return <FileText className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'linkedin': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'instagram': return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
      case 'file': return 'bg-lime-500/10 text-lime-400 border-lime-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const getActionButtonText = (platform: string, gate: string) => {
    if (gate === 'download') return 'İndir';
    if (platform === 'linkedin') return "LinkedIn'de aç";
    if (platform === 'instagram') return "Instagram'da aç";
    return 'Aç';
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <>
      <SEO 
        title="Ücretsiz İçerikler | Pratik Yapay Zeka"
        description="LinkedIn postları, Instagram taktikleri, indirilebilir dosyalar ve prompt kütüphaneleri — hepsi tek yerde. Gerçek, uygulanabilir değer."
      />
      
      <div className="min-h-screen bg-slate-950 text-slate-100">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-radial from-lime-400/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A3E635' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            opacity: 0.3
          }}></div>
          
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <Badge 
                  variant="outline" 
                  className="bg-transparent border-lime-400/30 text-lime-400 px-3 py-1 text-sm font-medium"
                >
                  Başarı Hikayeleri
                </Badge>
              </div>

              {/* H1 */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Ücretsiz içerikler.</span>
                <span className="block relative">
                  Gerçek, uygulanabilir değer.
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-lime-400 transform scale-x-0 animate-[scale-x_0.8s_ease-out_0.5s_forwards] origin-left"></div>
                </span>
              </h1>

              {/* Subheadline */}
              <div className="space-y-4 mb-8">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  LinkedIn postları, Instagram taktikleri, indirilebilir dosyalar ve prompt kütüphaneleri — hepsi tek yerde.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <p className="text-lg md:text-xl text-slate-300">
                    Aşağıdaki vakalarda, kurulumdan günler içinde ölçülen kazanımları görürsünüz.
                  </p>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="shrink-0"
                  >
                    Danışmanlık alın
                  </Button>
                </div>
              </div>

              {/* KPI Strip */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="bg-slate-800/50 border-lime-400/20 text-slate-300 px-4 py-2">
                  <span className="text-lime-400 font-bold mr-1">+2000</span>
                  şirket listesi
                </Badge>
                <Badge variant="outline" className="bg-slate-800/50 border-lime-400/20 text-slate-300 px-4 py-2">
                  <span className="text-lime-400 font-bold mr-1">Google Ads</span>
                  prompt library
                </Badge>
                <Badge variant="outline" className="bg-slate-800/50 border-lime-400/20 text-slate-300 px-4 py-2">
                  <span className="text-lime-400 font-bold mr-1">Haftalık</span>
                  yeni kaynak
                </Badge>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="lime" 
                  size="lg"
                  className="group"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Her hafta 1 ücretsiz kaynak
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-lime-400 hover:text-lime-300 group"
                >
                  Tüm kaynaklar
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="py-12 border-t border-slate-800">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Kaynak ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-400 focus:ring-lime-400 focus:border-lime-400"
                />
              </div>

              {/* Filters & Sort */}
              <div className="flex flex-col lg:flex-row gap-6 mb-12">
                {/* Filter Chips */}
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-slate-300 mb-3">Kategoriler</h3>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {filterOptions.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => handleFilterToggle(filter)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                          selectedFilters.includes(filter)
                            ? "bg-lime-400/12 text-lime-400 border border-lime-400/30"
                            : "bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-slate-600 hover:text-slate-300"
                        )}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div className="lg:w-48">
                  <h3 className="text-sm font-medium text-slate-300 mb-3">Sıralama</h3>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="bg-slate-800/50 border-slate-700 text-slate-100">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="newest">Yeni</SelectItem>
                      <SelectItem value="downloads">En çok indirilen</SelectItem>
                      <SelectItem value="saves">En çok kaydedilen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Cards Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredResources.map((resource) => (
                  <Card 
                    key={resource.id}
                    className="group bg-slate-900/50 border-slate-700 hover:border-lime-400/30 hover:shadow-lg hover:shadow-lime-400/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge 
                          variant="outline"
                          className={cn("px-3 py-1 border", getPlatformColor(resource.platform))}
                        >
                          {getPlatformIcon(resource.platform)}
                          <span className="ml-2 capitalize">{resource.platform}</span>
                        </Badge>
                        <div className="flex gap-2 text-xs text-slate-400">
                          <span>{resource.metrics.downloads} indirme</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl text-slate-100 group-hover:text-lime-400 transition-colors">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {resource.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {resource.tags.slice(0, 3).map((tag) => (
                          <Badge 
                            key={tag}
                            variant="outline" 
                            className="bg-slate-800/50 text-slate-400 border-slate-700 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-2 pt-2">
                        <Button 
                          variant="lime" 
                          size="sm" 
                          className="w-full group"
                          onClick={() => window.open(resource.actionUrl, '_blank')}
                        >
                          {resource.gate === 'download' ? (
                            <Download className="h-4 w-4 mr-2" />
                          ) : (
                            <ExternalLink className="h-4 w-4 mr-2" />
                          )}
                          {getActionButtonText(resource.platform, resource.gate)}
                        </Button>
                        
                        {resource.gateNote && (
                          <p className="text-xs text-slate-400 text-center">
                            {resource.gateNote}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredResources.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-slate-400 text-lg">Aradığınız kriterlere uygun kaynak bulunamadı.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-slate-900/50 border-t border-slate-800">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                Her hafta 1 ücretsiz kaynak — e-postana gelsin.
              </h2>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 mt-8">
                <Input
                  type="email"
                  placeholder="E-posta adresiniz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-400 focus:ring-lime-400 focus:border-lime-400"
                  required
                />
                <Button type="submit" variant="lime" size="lg" className="shrink-0">
                  Kaydol
                </Button>
              </form>
              <p className="text-sm text-slate-400 mt-4">
                Spam yok. İstediğin zaman çıkış.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-slate-800">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 text-center mb-12">
                Sıkça Sorulan Sorular
              </h2>
              
              <div className="space-y-6">
                <div className="bg-slate-900/30 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    Kaynakları nasıl alırım?
                  </h3>
                  <p className="text-slate-300">
                    Karttaki butona tıklayın: LinkedIn/Instagram'da yorum/DM veya doğrudan indirme.
                  </p>
                </div>
                
                <div className="bg-slate-900/30 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    Kaynaklar ücretsiz mi?
                  </h3>
                  <p className="text-slate-300">
                    Evet, tamamı ücretsiz.
                  </p>
                </div>
                
                <div className="bg-slate-900/30 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    Ne sıklıkla güncelleniyor?
                  </h3>
                  <p className="text-slate-300">
                    Haftalık yeni kaynak hedefi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UcretsizIcerikler;
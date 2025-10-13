import { SEO } from "@/components/SEO";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SatisOtomasyonuDemo = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added when Supabase is integrated
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <SEO 
        title={t('sales.demo.seo.title')}
        description={t('sales.demo.seo.description')}
      />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('sales.demo.hero.title')}
            </h1>
            <h2 className="text-2xl text-muted-foreground">
              {t('sales.demo.hero.subtitle')}
            </h2>
          </header>

          <div className="space-y-16">
            {/* Hero Image */}
            <section className="flex justify-center mb-12">
              <img 
                src="https://static.wixstatic.com/media/754410_5693dfbc303143fead980dfbf7f95701~mv2.jpg" 
                alt="Yapay zeka destekli satış otomasyonunu temsil eden soyut bir pipeline görseli. Dağınık veriler, süreç içinde otomatik olarak işlenip yapılandırılmış bir satış akışına dönüşüyor."
                className="max-w-full h-auto rounded-lg shadow-xl"
                loading="eager"
              />
            </section>

            {/* Demo Sections */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Kişiselleştirilmiş Konu Başlığı Demo */}
              <section className="bg-card rounded-lg p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t('sales.demo.subject.title')}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('sales.demo.subject.description')}
                </p>
                <div className="bg-accent/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center h-24">
                    <span className="text-muted-foreground italic">Demo alanı - AI ile konu başlığı oluşturma</span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  {t('sales.demo.button.start')}
                </button>
              </section>

              {/* Satış Görüşmesi Hazırlık Demo */}
              <section className="bg-card rounded-lg p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t('sales.demo.meeting.title')}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('sales.demo.meeting.description')}
                </p>
                <div className="bg-accent/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center h-24">
                    <span className="text-muted-foreground italic">Demo alanı - Görüşme hazırlık otomasyonu</span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  {t('sales.demo.button.start')}
                </button>
              </section>
            </div>

            {/* Second Image */}
            <section className="flex justify-center my-12">
              <img 
                src="https://static.wixstatic.com/media/754410_7cef9180f79e4fae89f7a9811a04dd4a~mv2.jpg" 
                alt="Yapay zeka ile çalışan satış otomasyonuna ait veri işleme sürecini gösteren soyut bir görsel. Düzensiz veriler, merkezi analiz noktasında yapay zeka tarafından işlenerek yapılandırılmış satış verilerine dönüştürülür."
                className="max-w-full h-auto rounded-lg shadow-xl"
                loading="lazy"
              />
            </section>

            {/* Açıklama Section */}
            <section className="bg-card rounded-lg p-8 shadow-sm border border-border text-center">
              <h4 className="text-2xl font-bold text-foreground mb-6">
                {t('sales.demo.explanation.title')}
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t('sales.demo.explanation.text')}
              </p>
              <p className="text-primary font-semibold text-lg">
                {t('sales.demo.explanation.tagline')}
              </p>
            </section>

            {/* Contact Form */}
            <section className="bg-card rounded-lg p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {t('sales.demo.form.title')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('sales.demo.form.name.label')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('sales.demo.form.email.label')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    {t('sales.demo.form.company.label')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('sales.demo.form.message.label')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  {t('sales.demo.form.submit')}
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default SatisOtomasyonuDemo;
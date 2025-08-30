import { SEO } from "@/components/SEO";

const Hakkimda = () => {
  return (
    <>
      <SEO 
        title="Hakkımda | Pratik Yapay Zeka"
        description="Safak Tepecik - B2B yazılım satışları ve dijital dönüşüm alanında uzman, Pratik Yapay Zeka kurucusu."
      />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hakkımda | Pratik Yapay Zeka
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="bg-card rounded-lg p-8 shadow-sm border border-border mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ben Safak Tepecik, B2B yazılım satışları ve dijital dönüşüm alanında uzmanım. Yıllardır teknoloji sektöründe çalışarak, işletmelerin dijital süreçlerini optimize etme konusunda deneyim kazandım.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mb-4">Profesyonel Geçmişim</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Kariyerim boyunca farklı sektörlerden işletmelere teknoloji çözümleri sundum. Özellikle satış süreçlerinin otomasyonu, müşteri ilişkileri yönetimi ve veri analizi alanlarında uzmanlaştım. Bu deneyimlerim sayesinde, yapay zeka teknolojilerinin işletmeler için nasıl pratik çözümler sunabileceğini keşfettim.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">Bugün Ne Yapıyorum</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pratik Yapay Zeka olarak, Türkiye'deki işletmelerin yapay zeka teknolojilerinden maksimum fayda sağlamalarına yardımcı oluyorum. Amacım, karmaşık görünen teknolojileri herkesin anlayabileceği ve uygulayabileceği pratik çözümlere dönüştürmek.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                İnanıyorum ki yapay zeka, yalnızca büyük teknoloji şirketleri için değil, her ölçekteki işletme için erişilebilir olmalı. Bu vizyonla, özellikle KOBİ'lerin dijital dönüşüm süreçlerinde onlara rehberlik ediyor ve sürdürülebilir çözümler sunuyorum.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hakkimda;
import { useState } from "react";
import { createBlogPost, fileToBase64 } from "@/utils/createBlogPost";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function CreateBlogPostDemo() {
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const handleCreatePost = async () => {
    setIsCreating(true);
    try {
      // Convert images to base64
      const coverImage = await fileToBase64("/blog-temp/kapak.png");
      const image1 = await fileToBase64("/blog-temp/uygulama-alanlari.png");
      const image2 = await fileToBase64("/blog-temp/avantaj-dezavantaj.png");
      const image3 = await fileToBase64("/blog-temp/gelecek.png");

      const result = await createBlogPost({
        language: "tr",
        title: "Yapay Zeka Nedir? Basit ve Anlaşılır Anlatım (2025 Güncel Rehber)",
        excerpt: "Yapay zeka nedir, nasıl çalışır, nerelerde kullanılır? Bu yazıda, herkesin anlayabileceği şekilde yapay zekanın temelleri, örnekleri, avantajları ve geleceği anlatılıyor.",
        content: `## Yapay Zekaya Giriş

**Yapay zeka (YZ)**, bilgisayarların insanlar gibi düşünebilmesini, öğrenebilmesini ve karar verebilmesini sağlayan teknolojidir. Yani makinelerin insan zekasını taklit etmesidir.

Bugün yapay zeka; sesli asistanlarda (Siri, Alexa), öneri sistemlerinde (Netflix, YouTube), akıllı arabalarda (Tesla) ve akıllı ev sistemlerinde karşımıza çıkar.

## Yapay Zekanın Kısa Tarihi

Yapay zekanın temeli 1950'lerde **Alan Turing**'in 'Makineler düşünebilir mi?' sorusuyla başladı. 1956'da resmi olarak 'Artificial Intelligence' (Yapay Zeka) terimi kullanıldı.

- **1950:** Turing Testi ortaya çıktı.
- **1970–1980:** İlk akıllı sistemler geliştirildi.
- **2000'lerden sonra:** Büyük veri ve derin öğrenme dönemi başladı.

Bugün yapay zeka, sağlık, eğitim, sanayi ve pazarlama dahil birçok sektörde kullanılıyor.

## Yapay Zeka Nasıl Çalışır?

Yapay zekanın temeli **veri** ve **öğrenme**ye dayanır. Sistemler geçmiş verilerden öğrenir, sonra bu bilgileri yeni durumlarda kullanır.

### Makine Öğrenmesi
Verilerdeki örnekleri ve desenleri öğrenir. Örneğin bir alışveriş sitesi, kullanıcının ilgilendiği ürünleri analiz ederek yeni öneriler sunar.

### Derin Öğrenme
İnsan beynine benzeyen **yapay sinir ağları** kullanır. Görüntü, ses veya metin gibi karmaşık verileri işler.

### Model Eğitimi
Yapay zeka önce **öğrenir**, sonra **test edilir**. Amaç hatasız sonuçlar üretmektir.

## Yapay Zeka Nerelerde Kullanılır?

### Günlük Hayatta
- Sesli asistanlar: Siri, Alexa, Google
- Öneri sistemleri: Netflix, Spotify, YouTube
- Akıllı ev sistemleri: Işık, klima, güvenlik

### İş Dünyasında
- Otomasyon: Üretim ve ofis işlerini hızlandırır.
- Chatbot'lar: 7/24 müşteri desteği sağlar.
- Finans: Risk analizi ve dolandırıcılık tespiti yapar.

### Sağlıkta
- Görüntü analiziyle erken teşhis
- İlaç geliştirme süreçlerinde veri desteği
- Hasta verisi takibi ve analiz

## Yapay Zekanın Artıları ve Eksileri

### Artıları
- Hızlı çalışır, zaman kazandırır.
- Hata oranı düşüktür.
- Büyük veriyi kolay analiz eder.
- 7/24 kesintisiz çalışabilir.

### Eksileri
- Bazı mesleklerde iş kaybına yol açabilir.
- Veri gizliliği riski taşır.
- Duygu ve empati yoktur.
- Geliştirme maliyetleri yüksektir.

## Yapay Zeka ve Etik Sorular

- Yapay zekanın kararlarından kim sorumlu olacak?
- İnsan kontrolü nasıl sağlanacak?
- Yapay zeka insan zekasını geçebilir mi?

Bu sorular geleceğin en önemli tartışma konuları arasında.

## Yapay Zekanın Geleceği

Uzmanlara göre önümüzdeki 10 yılda:
- Yapay zeka iş verimliliğini %40 artıracak.
- Yeni meslekler ortaya çıkacak.
- İnsan ve makineler birlikte çalışacak.

Yapay zeka artık sadece bir teknoloji değil; yeni bir çağın temeli.

## Sık Sorulan Sorular

**Yapay zeka nedir?** Bilgisayarların insan zekasını taklit etmesini sağlayan teknolojidir.

**Yapay zeka nasıl çalışır?** Veri toplar, analiz eder ve karar verir.

**Yapay zeka örnekleri nelerdir?** ChatGPT, Siri, Tesla Autopilot.

**Yapay zeka tehlikeli mi?** Yanlış kullanılırsa evet. Bu yüzden etik kurallar çok önemlidir.

**Yapay zekanın geleceği nasıl olacak?** İnsan zekasıyla birlikte çalışan, üretken sistemler dönemi geliyor.`,
        author: "Safak Tepecik",
        author_bio: "Safak Tepecik, Pratik Yapay Zeka ve ki-automatisieren.de'nin kurucusudur. Yapay zeka, otomasyon ve satış sistemleri üzerine çalışır.",
        category: "Teknoloji",
        tags: ["yapay zeka nedir", "yapay zeka nasıl çalışır", "makine öğrenmesi", "derin öğrenme", "yapay zeka örnekleri", "yapay zeka geleceği"],
        read_time: 6,
        cover_image: coverImage,
        cover_image_alt: "Yapay zeka ve insan beyni görseli",
        meta_title: "Yapay Zeka Nedir? Basit ve Anlaşılır Anlatım (2025 Güncel Rehber)",
        meta_description: "Yapay zeka nedir, nasıl çalışır, nerelerde kullanılır? Yapay zekanın örnekleri, avantajları ve geleceği hakkında basit, herkesin anlayabileceği bir rehber.",
        meta_keywords: ["yapay zeka", "yapay zeka nedir", "makine öğrenmesi", "deep learning", "AI Türkiye", "yapay zeka örnekleri"],
        status: "published",
        images: [
          {
            position: "uygulama-alanlari",
            image_url: image1,
            image_meta_description: "Sağlık, endüstri ve günlük yaşamda yapay zekanın rolünü anlatan yazısız illüstrasyon.",
          },
          {
            position: "avantaj-dezavantaj",
            image_url: image2,
            image_meta_description: "Yapay zekanın avantajları ve dezavantajları arasındaki dengeyi sembolize eden terazi görseli.",
          },
          {
            position: "gelecek",
            image_url: image3,
            image_meta_description: "İnsan ve robotun el sıkıştığı, gelecekteki iş birliğini temsil eden modern illüstrasyon.",
          },
        ],
      });

      toast({
        title: "Blogpost erstellt!",
        description: `Post ID: ${result.post_id}`,
      });

      console.log("Result:", result);
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Fehler",
        description: "Blogpost konnte nicht erstellt werden.",
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Blogpost erstellen</h1>
        <p className="text-muted-foreground mb-8">
          Klicke auf den Button, um den Blogpost "Yapay Zeka Nedir" mit allen Bildern zu erstellen.
        </p>
        <Button 
          onClick={handleCreatePost} 
          disabled={isCreating}
          size="lg"
        >
          {isCreating ? "Erstelle Blogpost..." : "Blogpost erstellen"}
        </Button>
      </div>
    </div>
  );
}

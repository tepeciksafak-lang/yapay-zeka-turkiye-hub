export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  // Blog entries will be added here
  {
    id: "welcome-to-our-blog",
    title: "Yapay Zeka ile İş Dünyasında Dönüşüm",
    excerpt: "İş süreçlerinizi otomatikleştirerek verimlilik artırmanın yeni yollarını keşfedin.",
    content: `
# Yapay Zeka ile İş Dünyasında Dönüşüm

Günümüzde yapay zeka teknolojileri, iş dünyasında köklü değişimler yaratıyor. Şirketler artık rutin işleri otomatikleştirerek, çalışanlarının daha stratejik alanlara odaklanmasını sağlıyor.

## Ana Başlıklar

### 1. Otomasyon Süreçleri
- E-posta pazarlama otomasyonu
- Müşteri hizmetleri chatbot'ları
- Veri analizi ve raporlama

### 2. Verimlilik Artışı
Yapay zeka destekli araçlar sayesinde şirketler %40'a varan verimlilik artışı sağlayabiliyor.

### 3. Gelecek Planları
AI entegrasyonu şirketlerin rekabet avantajı elde etmesinde kritik rol oynuyor.

Bu dönüşüm sürecinde doğru partneri seçmek çok önemli. Uzman ekibimizle birlikte yapay zeka yolculuğunuza başlayın.
    `,
    author: "AI Uzmanı",
    date: "2024-01-15",
    category: "Yapay Zeka",
    tags: ["AI", "Otomasyon", "İş Dünyası"],
    readTime: 5,
    image: "/placeholder.svg"
  }
];
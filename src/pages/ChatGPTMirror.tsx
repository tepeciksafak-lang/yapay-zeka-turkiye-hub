import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Shield, Download, Trash2, Sparkles, Brain, Flame, Timer } from "lucide-react";
import { FileDropzone } from "@/components/chatgpt-mirror/FileDropzone";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const problems = [
  {
    emoji: "🔍",
    title: "Mikro Yönetim",
    text: "Sistemden otonom olmasını beklerken, kullanacağı virgülün yerine kadar karışmanız.",
    icon: Brain,
  },
  {
    emoji: "🤬",
    title: "Düşük Tolerans",
    text: "Hata anında sorunu komutta (prompt) aramak yerine anında yapay zekaya sinirlenmeniz.",
    icon: Flame,
  },
  {
    emoji: "⏳",
    title: "Optimizasyon Felci",
    text: "Bir süreci mükemmelleştirmek için o kadar çok zaman harcayıp, asıl işi yavaşlatmanız.",
    icon: Timer,
  },
];

const steps = [
  {
    icon: Download,
    title: "Verinizi İndirin",
    text: "ChatGPT'den conversations.json dosyanızı hesap ayarlarından indirin.",
  },
  {
    icon: Shield,
    title: "Buraya Yükleyin",
    text: "Veriniz asla sunucularımıza gitmez, sadece tarayıcınızda işlenir.",
  },
  {
    icon: Trash2,
    title: "Gürültüyü Siliyoruz",
    text: "Tüm AI cevaplarını otomatik olarak temizliyoruz.",
  },
  {
    icon: Sparkles,
    title: "Saf Metniniz Hazır",
    text: "Saf verinizi NotebookLM'e yükleyip psikolojik analizinizi alabilirsiniz.",
  },
];

const ChatGPTMirror = () => {
  const scrollToUpload = () => {
    document.getElementById("upload-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Neuro-Forensics: ChatGPT Ayna Aracı</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen" style={{ background: "#0a0a0f", color: "#e5e5e5" }}>
        {/* ─── HERO ─── */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
          {/* Glow */}
          <div
            className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-[140px] opacity-30"
            style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }}
          />

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0}
            className="relative z-10 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: "#f5f5f5" }}
          >
            Yapay Zeka Aynasında Kendinize Bakmaya{" "}
            <span style={{ color: "#a855f7" }}>Cesaretiniz Var Mı?</span>
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
            className="relative z-10 mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: "#a1a1aa" }}
          >
            ChatGPT geçmişinizi analiz ediyoruz. İş alışkanlıklarınızı değil, en karanlık
            psikolojik defolarınızı ve kör noktalarınızı ortaya çıkarıyoruz.{" "}
            <strong style={{ color: "#c4b5fd" }}>Veriler yalan söylemez.</strong>
          </motion.p>

          <motion.button
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
            onClick={scrollToUpload}
            className="relative z-10 mt-10 rounded-xl px-8 py-3.5 text-base font-semibold transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(168,85,247,0.3)",
            }}
          >
            Yüzleşmeye Hazırım
          </motion.button>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={3}
            className="relative z-10 mt-5 flex items-center gap-2 text-xs"
            style={{ color: "#71717a" }}
          >
            <Shield className="h-3.5 w-3.5" />
            Tüm işlemler tarayıcınızda (lokal) gerçekleşir. Verileriniz %100 güvendedir ve hiçbir sunucuya yüklenmez.
          </motion.p>
        </section>

        {/* ─── PROBLEM CARDS ─── */}
        <section className="px-6 py-24" style={{ background: "#08080d" }}>
          <div className="mx-auto max-w-5xl">
            <motion.h2
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="mb-14 text-center text-3xl font-bold sm:text-4xl"
              style={{ color: "#f5f5f5" }}
            >
              Kendinizi Tanıyor musunuz?
            </motion.h2>

            <div className="grid gap-6 md:grid-cols-3">
              {problems.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  className="group rounded-2xl border p-7 transition-all duration-300 hover:border-purple-500/50"
                  style={{ background: "#111118", borderColor: "#1e1e2a" }}
                >
                  <span className="text-3xl">{p.emoji}</span>
                  <h3 className="mt-4 text-lg font-semibold" style={{ color: "#e5e5e5" }}>
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                    {p.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="mb-14 text-center text-3xl font-bold sm:text-4xl"
              style={{ color: "#f5f5f5" }}
            >
              Nasıl Çalışır?
            </motion.h2>

            <div className="grid gap-8 sm:grid-cols-2">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  className="flex gap-4"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "#a855f720" }}
                  >
                    <s.icon className="h-6 w-6" style={{ color: "#a855f7" }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#e5e5e5" }}>
                      {i + 1}. {s.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                      {s.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── UPLOAD / PROCESSOR ─── */}
        <section id="upload-section" className="px-6 py-24" style={{ background: "#08080d" }}>
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-3xl font-bold sm:text-4xl"
              style={{ color: "#f5f5f5" }}
            >
              Geçmişinizi Temizleyin
            </motion.h2>
            <motion.p
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="mt-3 mb-10 text-sm"
              style={{ color: "#71717a" }}
            >
              conversations.json dosyanızı buraya sürükleyin.
            </motion.p>

            <FileDropzone />
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="border-t px-6 py-8 text-center text-xs" style={{ borderColor: "#1e1e2a", color: "#52525b" }}>
          Neuro-Forensics · Tüm işlemler yerel olarak gerçekleşir · Hiçbir veri sunucuya gönderilmez
        </footer>
      </div>
    </>
  );
};

export default ChatGPTMirror;

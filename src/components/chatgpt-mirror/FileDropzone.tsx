import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Loader2, CheckCircle2, AlertTriangle, Copy, Download, FileText } from "lucide-react";
import { parseConversationsJson } from "@/utils/parseConversationsJson";

type Status = "idle" | "processing" | "success" | "error";

export const FileDropzone = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback((file: File) => {
    if (!file.name.endsWith(".json")) {
      setStatus("error");
      setErrorMsg("Lütfen .json uzantılı bir dosya yükleyin.");
      return;
    }

    setStatus("processing");
    setResult("");
    setErrorMsg("");

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      // Defer parsing so loading UI renders first
      setTimeout(() => {
        try {
          const parsed = parseConversationsJson(text);
          setResult(parsed);
          setStatus("success");
        } catch (err: any) {
          setErrorMsg(err.message || "Bilinmeyen bir hata oluştu.");
          setStatus("error");
        }
      }, 0);
    };
    reader.onerror = () => {
      setErrorMsg("Dosya okunamadı. Lütfen tekrar deneyin.");
      setStatus("error");
    };
    reader.readAsText(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chatgpt-kullanici-mesajlari.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setStatus("idle");
    setResult("");
    setErrorMsg("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            className={`cursor-pointer rounded-2xl border-2 border-dashed p-16 text-center transition-all duration-300 ${
              dragOver
                ? "border-purple-400 bg-purple-500/10"
                : "border-gray-700 hover:border-purple-500/60 bg-[#111118]"
            }`}
          >
            <Upload className="mx-auto mb-4 h-12 w-12 text-purple-400" />
            <p className="text-lg font-medium text-gray-200">
              conversations.json dosyanızı buraya sürükleyin
            </p>
            <p className="mt-2 text-sm text-gray-500">veya tıklayarak seçin</p>
            <input
              ref={inputRef}
              type="file"
              accept=".json"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) processFile(file);
              }}
            />
          </motion.div>
        )}

        {status === "processing" && (
          <motion.div
            key="processing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-gray-700 bg-[#111118] p-16"
          >
            <Loader2 className="h-12 w-12 animate-spin text-purple-400" />
            <p className="text-lg text-gray-300">İşleniyor...</p>
            <p className="text-sm text-gray-500">Büyük dosyalar biraz zaman alabilir.</p>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-red-500/40 bg-red-950/20 p-12"
          >
            <AlertTriangle className="h-10 w-10 text-red-400" />
            <p className="text-red-300 text-center">{errorMsg}</p>
            <button
              onClick={reset}
              className="mt-2 rounded-lg bg-gray-800 px-6 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
            >
              Tekrar Dene
            </button>
          </motion.div>
        )}

        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-medium">Tamamlandı — yalnızca sizin mesajlarınız aşağıda.</span>
            </div>

            <textarea
              readOnly
              value={result}
              rows={14}
              className="w-full rounded-xl border border-gray-700 bg-[#0d0d14] p-4 text-sm text-gray-300 font-mono focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-y"
            />

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-500 transition-colors"
              >
                <Copy className="h-4 w-4" />
                {copied ? "Kopyalandı!" : "Kopyala"}
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 rounded-lg border border-gray-600 bg-gray-800 px-5 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                Dosya Olarak İndir
              </button>
              <button
                onClick={reset}
                className="flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-2.5 text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                <FileText className="h-4 w-4" />
                Yeni Dosya Yükle
              </button>
            </div>

            {/* NotebookLM prompt */}
            <div className="rounded-xl border border-purple-500/20 bg-purple-950/20 p-5 space-y-3">
              <p className="text-sm font-medium text-purple-300">
                📋 Sonraki Adım: NotebookLM Analizi
              </p>
              <p className="text-sm text-gray-400">
                Aşağıdaki kopyaladığınız metni NotebookLM'e verin ve şu soruyu sorun:
              </p>
              <blockquote className="border-l-2 border-purple-500/50 pl-4 text-sm italic text-gray-300">
                "Bu veriler, yıllar içinde yazdığım mesajlardan oluşuyor. İş alışkanlıklarım, zayıf yönlerim,
                kontrol takıntılarım veya sabır seviyem hakkında bana acımasız ve dürüst bir psikolojik profil çıkar."
              </blockquote>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

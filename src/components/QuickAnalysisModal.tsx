import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, Send, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Ad Soyad gereklidir").max(100, "Ad Soyad çok uzun"),
  email: z.string().trim().email("Geçerli bir e-posta adresi giriniz").max(255, "E-posta çok uzun"),
  company: z.string().trim().min(1, "Şirket/Kurum gereklidir").max(100, "Şirket adı çok uzun"),
  message: z.string().trim().max(1000, "Mesaj çok uzun")
});

interface QuickAnalysisModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuickAnalysisModal = ({ open, onOpenChange }: QuickAnalysisModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = formSchema.parse(formData);
      
      // Send webhook to n8n
      const webhookUrl = "https://safakt.app.n8n.cloud/webhook/a3164d70-a436-4267-8339-5b1436b501d8";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...validatedData,
          timestamp: new Date().toISOString(),
          source: "website_contact_form",
          page_url: window.location.href
        }),
      });

      setIsSubmitted(true);
      
      // Analytics event
      if (typeof window !== 'undefined') {
        const { analytics } = await import('../utils/analytics');
        analytics.trackFormSubmit('quick_analysis', true);
      }

      toast({
        title: "Başvurunuz alındı!",
        description: "En kısa sürede sizinle iletişime geçeceğiz."
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error("Webhook error:", error);
        toast({
          title: "Form gönderildi",
          description: "İsteğiniz işleme alındı. En kısa sürede sizinle iletişime geçeceğiz.",
        });
        setIsSubmitted(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const resetAndClose = () => {
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitted(false);
    setErrors({});
    onOpenChange(false);
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={resetAndClose}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Başvurunuz Alındı!</h3>
              <p className="text-sm text-muted-foreground mt-2">
                En kısa sürede sizinle iletişime geçeceğiz.
              </p>
            </div>
            <Button onClick={resetAndClose} className="w-full">
              Tamam
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader className="relative">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-0 top-0 p-2 hover:bg-accent rounded-sm"
          >
            <X className="h-4 w-4" />
          </button>
          <DialogTitle className="text-xl font-semibold text-center text-foreground">
            30 Dakika Hızlı Analiz
          </DialogTitle>
          <p className="text-sm text-muted-foreground text-center mt-2">
            İş süreçlerinizi analiz edelim, size özel otomasyon önerilerimizi paylaşalım.
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Ad Soyad *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Adınız ve soyadınız"
              className={`bg-background border-border ${errors.name ? 'border-destructive' : ''}`}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">E-posta *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ornek@sirket.com"
              className={`bg-background border-border ${errors.email ? 'border-destructive' : ''}`}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground">Şirket/Kurum *</Label>
            <Input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Şirket adınız"
              className={`bg-background border-border ${errors.company ? 'border-destructive' : ''}`}
            />
            {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Hangi alanda otomasyon istiyorsunuz?</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Satış, pazarlama, müşteri hizmetleri, veri analizi vs..."
              rows={3}
              className={`bg-background border-border ${errors.message ? 'border-destructive' : ''}`}
            />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>
          
          <div className="pt-4 space-y-3">
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90" 
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? (
                "Gönderiliyor..."
              ) : (
                <>
                  Ücretsiz Analiz Al
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Bilgileriniz güvenle saklanır. Spam göndermiyoruz.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
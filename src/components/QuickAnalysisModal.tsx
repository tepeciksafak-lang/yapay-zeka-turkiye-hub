import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual implementation when Supabase is connected
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would normally send to your backend/Supabase
      console.log("Form submitted:", formData);
      
      setIsSubmitted(true);
      
      // Analytics event
      if (typeof window !== 'undefined') {
        const { analytics } = await import('../utils/analytics');
        analytics.trackFormSubmit('quick_analysis', true);
      }

      toast({
        title: "Başvurunuz alındı!",
        description: "48 saat içinde size özel analiz raporunu e-posta ile gönderilecek."
      });

    } catch (error) {
      toast({
        title: "Bir hata oluştu",
        description: "Lütfen daha sonra tekrar deneyin.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetAndClose = () => {
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitted(false);
    onOpenChange(false);
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={resetAndClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Başvurunuz Alındı!</h3>
              <p className="text-sm text-muted-foreground mt-2">
                48 saat içinde size özel analiz raporunu e-posta ile göndereceğiz.
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            30 Dakika Hızlı Analiz
          </DialogTitle>
          <p className="text-sm text-muted-foreground text-center mt-2">
            İş süreçlerinizi analiz edelim, size özel otomasyon önerilerimizi paylaşalım.
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ad Soyad *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Adınız ve soyadınız"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-posta *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ornek@sirket.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Şirket/Kurum *</Label>
            <Input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Şirket adınız"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Hangi alanda otomasyon istiyorsunuz?</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Satış, pazarlama, müşteri hizmetleri, veri analizi vs..."
              rows={3}
            />
          </div>
          
          <div className="pt-4 space-y-3">
            <Button 
              type="submit" 
              className="w-full" 
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
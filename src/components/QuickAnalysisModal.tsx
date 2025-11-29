import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t, currentLanguage } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Build query parameters for N8N webhook
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        message: formData.message || '',
        timestamp: new Date().toISOString(),
        source: 'quick_analysis_modal',
        language: currentLanguage
      });

      const webhookUrl = 'https://safakt.app.n8n.cloud/webhook/041dae70-b4dc-4fbb-89e5-3b78274c5ff5';

      // Debug log (without PII)
      console.log('🚀 N8N webhook GET request fired', {
        url: webhookUrl,
        fields: ['name', 'email', 'company', 'message', 'timestamp', 'source'],
        messageLength: (formData.message || '').length,
        hasCompany: !!formData.company
      });

      // Send GET request to N8N webhook
      await fetch(`${webhookUrl}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-cache'
      });

      console.log('✅ N8N webhook request sent successfully');
      
      setIsSubmitted(true);
      
      // Analytics event
      if (typeof window !== 'undefined') {
        const { analytics } = await import('../utils/analytics');
        analytics.trackFormSubmit('quick_analysis', true);
      }

      toast({
        title: t('quickanalysis.modal.success.title'),
        description: t('quickanalysis.modal.success.description')
      });

    } catch (error) {
      console.error('❌ N8N webhook error:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        type: error?.constructor?.name
      });

      // Analytics event for failed submission
      if (typeof window !== 'undefined') {
        const { analytics } = await import('../utils/analytics');
        analytics.trackFormSubmit('quick_analysis', false);
      }

      toast({
        title: t('quickanalysis.modal.error.title'),
        description: t('quickanalysis.modal.error.description'),
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
              <h3 className="text-lg font-semibold text-foreground">{t('quickanalysis.modal.success.title')}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {t('quickanalysis.modal.success.description')}
              </p>
            </div>
            <Button onClick={resetAndClose} className="w-full">
              {t('quickanalysis.modal.success.button')}
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
            {t('quickanalysis.modal.title')}
          </DialogTitle>
          <p className="text-sm text-muted-foreground text-center mt-2">
            {t('quickanalysis.modal.description')}
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('quickanalysis.modal.name.label')}</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t('quickanalysis.modal.name.placeholder')}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">{t('quickanalysis.modal.email.label')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t('quickanalysis.modal.email.placeholder')}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">{t('quickanalysis.modal.company.label')}</Label>
            <Input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleInputChange}
              placeholder={t('quickanalysis.modal.company.placeholder')}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">{t('quickanalysis.modal.message.label')}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t('quickanalysis.modal.message.placeholder')}
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
                t('quickanalysis.modal.submitting')
              ) : (
                <>
                  {t('quickanalysis.modal.submit')}
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              {t('quickanalysis.modal.privacy')}
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
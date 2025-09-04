'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useI18n } from '@/locales/client'
import { MotionButton } from '@/components/MotionButton'

interface QuickAnalysisModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuickAnalysisModal({ open, onOpenChange }: QuickAnalysisModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const t = useI18n()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form and close modal
    setFormData({ name: '', email: '', company: '', message: '' })
    setIsSubmitting(false)
    onOpenChange(false)
    
    // Show success message (you can replace with proper toast)
    alert('Teşekkürler! En kısa sürede size geri döneceğiz.')
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            Ücretsiz Hızlı Analiz
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Ad Soyad *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Adınız ve soyadınız"
                required
                className="glass focus-visible"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">E-posta *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="ornek@sirket.com"
                required
                className="glass focus-visible"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Şirket</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Şirket adınız"
                className="glass focus-visible"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Hangi süreçleri otomatikleştirmek istiyorsunuz?</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Satış, pazarlama, müşteri hizmetleri vb. hangi alanda yardıma ihtiyacınız var?"
                rows={4}
                className="glass focus-visible resize-none"
              />
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 glass"
              disabled={isSubmitting}
            >
              İptal
            </Button>
            <MotionButton
              type="submit"
              disabled={isSubmitting}
              className="flex-1 hover-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0"
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Analiz İste'}
            </MotionButton>
          </div>
        </form>
        
        <p className="text-xs text-muted-foreground text-center">
          Form gönderdiğinizde, 24 saat içinde size özel bir analiz raporu hazırlayıp 
          e-posta ile göndereceğiz.
        </p>
      </DialogContent>
    </Dialog>
  )
}
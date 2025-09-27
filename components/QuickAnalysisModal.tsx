'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MotionButton } from '@/components/MotionButton'
import { useLanguage } from '@/contexts/LanguageContext'

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
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form and close modal
    setFormData({ name: '', email: '', company: '', message: '' })
    setIsSubmitting(false)
    onOpenChange(false)
    
    // Show success message
    alert(t('modal.success'))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            {t('modal.title')}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('modal.name')} *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder={t('modal.name.placeholder')}
                required
                className="glass focus-visible"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">{t('modal.email')} *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder={t('modal.email.placeholder')}
                required
                className="glass focus-visible"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">{t('modal.company')}</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder={t('modal.company.placeholder')}
                className="glass focus-visible"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">{t('modal.message')}</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder={t('modal.message.placeholder')}
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
              {t('modal.cancel')}
            </Button>
            <MotionButton
              type="submit"
              disabled={isSubmitting}
              className="flex-1 hover-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0"
            >
              {isSubmitting ? t('modal.submitting') : t('modal.submit')}
            </MotionButton>
          </div>
        </form>
        
        <p className="text-xs text-muted-foreground text-center">
          {t('modal.description')}
        </p>
      </DialogContent>
    </Dialog>
  )
}
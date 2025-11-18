// Google Analytics Utility with Multi-Domain Support
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export interface AnalyticsConfig {
  primaryId: string;
  secondaryIds?: string[];
  debug?: boolean;
}

// Multi-Domain Analytics Configuration
export const ANALYTICS_CONFIG = {
  de: 'G-XXXXXXXXXX', // TODO: Replace with actual GA4 ID for ki-automatisieren.de
  tr: 'G-XYNQMB280W'  // Existing GA4 ID for yapayzekapratik.com
} as const;

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

class Analytics {
  private config: AnalyticsConfig;
  private initialized: boolean = false;

  constructor() {
    this.config = {
      primaryId: this.getCurrentTrackingId(),
      secondaryIds: [],
      debug: false
    };
  }

  // Get tracking ID based on current language
  private getCurrentTrackingId(): string {
    const currentPath = window.location.pathname;
    const currentLang = currentPath.split('/')[1] as 'de' | 'tr';
    return ANALYTICS_CONFIG[currentLang] || ANALYTICS_CONFIG.tr;
  }

  // Initialize analytics with configuration
  initialize(config?: Partial<AnalyticsConfig>) {
    if (this.initialized) return;

    // Always use current tracking ID
    const trackingId = this.getCurrentTrackingId();
    
    if (config) {
      this.config = { ...this.config, primaryId: trackingId, ...config };
    } else {
      this.config.primaryId = trackingId;
    }

    // Check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
      this.initialized = true;
      
      if (this.config.debug) {
        console.log('Analytics initialized with config:', this.config);
      }

      // Configure additional tracking IDs if provided
      this.config.secondaryIds?.forEach(id => {
        window.gtag('config', id);
      });
    }
  }

  // Track page views
  trackPageView(path: string, title?: string) {
    if (!this.initialized || typeof window === 'undefined') return;

    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: window.location.href,
      page_path: path
    });

    if (this.config.debug) {
      console.log('Page view tracked:', { path, title });
    }
  }

  // Track custom events
  trackEvent(event: AnalyticsEvent) {
    if (!this.initialized || typeof window === 'undefined') return;

    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters
    });

    if (this.config.debug) {
      console.log('Event tracked:', event);
    }
  }

  // Convenience methods for common events
  trackButtonClick(buttonName: string, location?: string) {
    this.trackEvent({
      action: 'click',
      category: 'engagement',
      label: buttonName,
      custom_parameters: { button_location: location }
    });
  }

  trackFormSubmit(formName: string, success: boolean = true) {
    this.trackEvent({
      action: success ? 'form_submit' : 'form_error',
      category: 'engagement',
      label: formName,
      value: success ? 1 : 0
    });
  }

  trackDownload(fileName: string, fileType?: string) {
    this.trackEvent({
      action: 'file_download',
      category: 'engagement',
      label: fileName,
      custom_parameters: { file_type: fileType }
    });
  }

  // Add additional tracking IDs (for multi-domain support)
  addTrackingId(trackingId: string) {
    if (!this.initialized || typeof window === 'undefined') return;

    window.gtag('config', trackingId);
    this.config.secondaryIds = [...(this.config.secondaryIds || []), trackingId];

    if (this.config.debug) {
      console.log('Additional tracking ID added:', trackingId);
    }
  }
}

// Create singleton instance
export const analytics = new Analytics();

// Initialize on import (will only work if gtag is available)
analytics.initialize();
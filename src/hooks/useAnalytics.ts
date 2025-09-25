import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics, AnalyticsEvent } from '../utils/analytics';

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views on route changes
  useEffect(() => {
    const path = location.pathname;
    const title = document.title;
    
    // Small delay to ensure the page title is updated
    const timer = setTimeout(() => {
      analytics.trackPageView(path, title);
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  // Convenience hooks for common tracking events
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    analytics.trackEvent(event);
  }, []);

  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    analytics.trackButtonClick(buttonName, location);
  }, []);

  const trackFormSubmit = useCallback((formName: string, success: boolean = true) => {
    analytics.trackFormSubmit(formName, success);
  }, []);

  const trackDownload = useCallback((fileName: string, fileType?: string) => {
    analytics.trackDownload(fileName, fileType);
  }, []);

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmit,
    trackDownload,
    analytics
  };
};
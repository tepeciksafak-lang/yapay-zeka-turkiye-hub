import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Performance monitoring
  tracesSampleRate: 1.0,
  
  // Capture 100% of the transactions for performance monitoring
  // We recommend adjusting this value in production
  replaysOnErrorSampleRate: 1.0,
  
  // Capture 10% of the transactions for performance monitoring when no errors occur
  replaysSessionSampleRate: 0.1,
  
  // You can remove this option if you're not planning to use the Sentry Session Replay feature
  integrations: [
    new Sentry.Replay({
      // Additional Replay configuration
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  
  beforeSend(event) {
    // Filter out development errors
    if (process.env.NODE_ENV === 'development') {
      return null
    }
    return event
  },
})
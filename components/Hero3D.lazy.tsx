'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Hero3DComponent = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl animate-pulse flex items-center justify-center">
      <div className="text-muted-foreground">Loading 3D Scene...</div>
    </div>
  )
})

export function Hero3DLazy() {
  return (
    <Suspense fallback={
      <div className="w-full h-[400px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl animate-pulse flex items-center justify-center">
        <div className="text-muted-foreground">Loading 3D Scene...</div>
      </div>
    }>
      <Hero3DComponent />
    </Suspense>
  )
}
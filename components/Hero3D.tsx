'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float, useGLTF, Preload } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Group } from 'three'
import { useReducedMotion } from '@/hooks/useReducedMotion'

// Enable Draco compression
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

function AIModel() {
  const meshRef = useRef<Group>(null)
  const prefersReducedMotion = useReducedMotion()
  
  // For now, using a simple geometric shape as GLB placeholder
  // Replace with actual GLB: const { scene } = useGLTF('/models/ai-cube.glb')
  
  useFrame((state) => {
    if (meshRef.current && !prefersReducedMotion) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.y += 0.005
    }
  })

  useEffect(() => {
    return () => {
      // Cleanup function for memory management
      if (meshRef.current) {
        meshRef.current.traverse((child) => {
          if (child instanceof Mesh) {
            child.geometry?.dispose()
            if (Array.isArray(child.material)) {
              child.material.forEach(material => material?.dispose())
            } else {
              child.material?.dispose()
            }
          }
        })
      }
    }
  }, [])

  return (
    <Float speed={prefersReducedMotion ? 0 : 2} rotationIntensity={prefersReducedMotion ? 0 : 1} floatIntensity={prefersReducedMotion ? 0 : 2}>
      <group ref={meshRef} position={[0, 0, 0]}>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial 
            color="#00E5FF" 
            emissive="#00E5FF"
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </group>
    </Float>
  )
}

function Scene() {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={prefersReducedMotion ? 0.5 : 1} color="#00E5FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#A855F7" />
      <AIModel />
      <Environment preset="city" />
      <Preload all />
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Scene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}

// Preload the GLB file (when available)
// useGLTF.preload('/models/ai-cube.glb')
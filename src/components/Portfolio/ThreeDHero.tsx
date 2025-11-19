import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Animated 3D metallic sphere
function MetallicSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#d4d4d8"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
      <pointLight position={[5, 5, 5]} intensity={1} color="#64ffda" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#bb86fc" />
    </Float>
  );
}

// Floating metallic rings
function MetallicRings() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.3}>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[3, 0.05, 16, 100]} />
          <meshStandardMaterial color="#a8a8b0" metalness={1} roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={0.4}>
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[3.5, 0.04, 16, 100]} />
          <meshStandardMaterial color="#64ffda" metalness={0.8} roughness={0.3} emissive="#64ffda" emissiveIntensity={0.2} />
        </mesh>
      </Float>
    </>
  );
}

interface ThreeDHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function ThreeDHero({ title, subtitle, description }: ThreeDHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-gunmetal to-background">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
          <MetallicSphere />
          <MetallicRings />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-neon-cyan text-sm font-semibold tracking-widest uppercase mb-2">
              {subtitle}
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text animate-glow">{title}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#projects">
              <button className="btn-metallic group">
                View Projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </button>
            </a>
            <a href="#contact">
              <button className="btn-glass px-8 py-3 rounded-lg font-semibold">
                Get In Touch
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Spacer for 3D content on larger screens */}
        <div className="hidden lg:block" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground animate-float">
          <span className="text-xs uppercase tracking-wider">Scroll Down</span>
          <div className="w-px h-12 bg-gradient-to-b from-chrome to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

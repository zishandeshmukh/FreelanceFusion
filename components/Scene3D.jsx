'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

function GlowCube({ position, size = 1, speed = 1, color }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.004 * speed;
      meshRef.current.rotation.y += 0.006 * speed;
    }
  });

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.85}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function GlowSphere({ position, size = 0.5, color }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.25;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.6}
          distort={0.25}
          speed={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return pos;
  }, []);

  const pointsRef = useRef();

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0008;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00E5A0"
        size={0.025}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function SceneContent() {
  return (
    <>
      {/* Main cube — teal accent */}
      <GlowCube position={[0, 0, 0]} size={2} speed={0.7} color="#00E5A0" />

      {/* Smaller accent cubes */}
      <GlowCube position={[2.5, 1.8, -1]} size={0.6} speed={1.1} color="#00B4D8" />
      <GlowCube position={[-2.3, -1.5, 0.5]} size={0.45} speed={1.3} color="#00E5A0" />
      <GlowCube position={[1.8, -2.2, 1]} size={0.5} speed={1} color="#00B4D8" />

      {/* Floating spheres */}
      <GlowSphere position={[-2.8, 2, -0.8]} size={0.35} color="#00E5A0" />
      <GlowSphere position={[3, -0.5, 0.6]} size={0.25} color="#00B4D8" />

      {/* Particles */}
      <Particles />

      {/* Lighting — cool teal + subtle fill */}
      <pointLight position={[5, 5, 5]} color="#00E5A0" intensity={1.5} />
      <pointLight position={[-5, -3, 3]} color="#00B4D8" intensity={1} />
      <ambientLight color="#ffffff" intensity={0.15} />
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ alpha: true, antialias: true }}
    >
      <SceneContent />
    </Canvas>
  );
}

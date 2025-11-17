'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Model() {
  const group = useRef<THREE.Group>(null);
  const cloudsGroup = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
    
    // Animate clouds - slow drift
    if (cloudsGroup.current) {
      cloudsGroup.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.5;
      cloudsGroup.current.position.z = Math.cos(state.clock.getElapsedTime() * 0.15) * 0.3;
    }
  });

  return (
    <group ref={group} position={[0, -1, 0]}>
      {/* Levitating Land Platform - Top Surface */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[12, 0.6, 8]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.7} />
      </mesh>
      
      {/* Levitating Land - Bottom (Dirt/Earth layer) */}
      <mesh position={[0, -0.5, 0]} castShadow>
        <boxGeometry args={[11.5, 0.4, 7.5]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.9} />
      </mesh>
      
      {/* Levitating Land - Deeper layer */}
      <mesh position={[0, -0.9, 0]} castShadow>
        <boxGeometry args={[10.5, 0.3, 6.5]} />
        <meshStandardMaterial color="#2a1a0a" roughness={1} />
      </mesh>
      
      {/* Glowing edge effect - Green */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[12.2, 0.05, 8.2]} />
        <meshStandardMaterial 
          color="#00FF41" 
          emissive="#00FF41" 
          emissiveIntensity={0.8}
          transparent={true}
          opacity={0.6}
        />
      </mesh>
      
      {/* Road */}
      <mesh position={[0, 0.35, 3.5]} receiveShadow>
        <boxGeometry args={[12, 0.08, 1.8]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.9} />
      </mesh>
      
      {/* Road Center Line */}
      <mesh position={[0, 0.39, 3.5]}>
        <boxGeometry args={[0.12, 0.02, 1.8]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.8} />
      </mesh>
      
      {/* Main Modern Villa - Center */}
      {/* Ground Floor */}
      <mesh position={[0, 0.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 1.2, 2]} />
        <meshStandardMaterial color="#F5F5F5" roughness={0.3} />
      </mesh>
      
      {/* First Floor - Main Volume */}
      <mesh position={[0, 1.9, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.9, 1.8]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
      </mesh>
      
      {/* Cantilevered Section - Left */}
      <mesh position={[-0.9, 2.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 0.6, 1.5]} />
        <meshStandardMaterial color="#E8E8E8" roughness={0.3} />
      </mesh>
      
      {/* Accent Panel - Orange/Wood */}
      <mesh position={[0.5, 1.9, 1.01]} castShadow>
        <boxGeometry args={[0.8, 0.8, 0.05]} />
        <meshStandardMaterial color="#FF8C42" roughness={0.6} />
      </mesh>
      
      {/* Roof Terrace */}
      <mesh position={[0.3, 2.85, -0.2]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 0.08, 1.2]} />
        <meshStandardMaterial color="#D0D0D0" roughness={0.4} />
      </mesh>
      
      {/* Rooftop Garden Edge */}
      <mesh position={[0.3, 2.92, -0.2]}>
        <boxGeometry args={[1.42, 0.03, 1.22]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.4} />
      </mesh>
      
      {/* Entrance Steps */}
      <mesh position={[0, 0.35, 1.2]} castShadow>
        <boxGeometry args={[1, 0.15, 0.4]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>
      <mesh position={[0, 0.5, 1.4]} castShadow>
        <boxGeometry args={[1, 0.15, 0.4]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>
      
      {/* Large Glass Panels - Ground Floor */}
      <mesh position={[-0.6, 0.8, 1.01]} castShadow>
        <boxGeometry args={[0.7, 1, 0.03]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.1} metalness={0.9} transparent opacity={0.3} />
      </mesh>
      <mesh position={[0.6, 0.8, 1.01]} castShadow>
        <boxGeometry args={[0.7, 1, 0.03]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.1} metalness={0.9} transparent opacity={0.3} />
      </mesh>
      
      {/* Balcony Railing */}
      <mesh position={[0.3, 2.95, 0.4]} castShadow>
        <boxGeometry args={[1.4, 0.08, 0.03]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.8} />
      </mesh>
      
      {/* Left Building - Modern Residential */}
      {/* Base */}
      <mesh position={[-3, 0.9, -1]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>
      {/* Upper Volume */}
      <mesh position={[-3, 2.1, -1]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial color="#F5F5F5" roughness={0.2} />
      </mesh>
      {/* Accent Stripe */}
      <mesh position={[-3, 1.6, -0.3]} castShadow>
        <boxGeometry args={[1.41, 0.2, 0.05]} />
        <meshStandardMaterial color="#FF8C42" roughness={0.5} />
      </mesh>
      {/* Balcony */}
      <mesh position={[-3.5, 2.1, -1]} castShadow>
        <boxGeometry args={[0.4, 0.05, 0.8]} />
        <meshStandardMaterial color="#D0D0D0" />
      </mesh>
      {/* Roof */}
      <mesh position={[-3, 2.75, -1]} castShadow>
        <boxGeometry args={[1.3, 0.1, 1.3]} />
        <meshStandardMaterial color="#C0C0C0" />
      </mesh>
      
      {/* Right Building - Contemporary Office */}
      {/* Main Volume */}
      <mesh position={[3.5, 1.5, 0.5]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 2.5, 1.5]} />
        <meshStandardMaterial color="#F0F0F0" roughness={0.2} metalness={0.2} />
      </mesh>
      {/* Top Section */}
      <mesh position={[3.5, 2.9, 0.5]} castShadow receiveShadow>
        <boxGeometry args={[1.3, 0.8, 1.3]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
      </mesh>
      {/* Vertical Accent Lines */}
      <mesh position={[4.26, 1.5, 0.5]} castShadow>
        <boxGeometry args={[0.05, 2.5, 0.2]} />
        <meshStandardMaterial color="#FF8C42" roughness={0.6} />
      </mesh>
      <mesh position={[4.26, 1.5, 0.9]} castShadow>
        <boxGeometry args={[0.05, 2.5, 0.2]} />
        <meshStandardMaterial color="#FF8C42" roughness={0.6} />
      </mesh>
      {/* Penthouse Terrace */}
      <mesh position={[3.5, 3.35, 0.5]} castShadow>
        <boxGeometry args={[1.5, 0.1, 1.5]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Small Building Back Left */}
      <mesh position={[-4.5, 1.1, -2.5]} castShadow receiveShadow>
        <boxGeometry args={[1, 1.6, 1]} />
        <meshStandardMaterial color="#E0E0E0" />
      </mesh>
      
      {/* Small Building Back Right */}
      <mesh position={[4.5, 0.9, -2]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 1.2, 0.9]} />
        <meshStandardMaterial color="#D8D8D8" />
      </mesh>
      
      {/* Main Villa - Detail Windows */}
      {/* First Floor Windows - Modern Square */}
      <mesh position={[-0.85, 1.9, 0.91]} castShadow>
        <boxGeometry args={[0.35, 0.45, 0.03]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.7} transparent opacity={0.8} />
      </mesh>
      <mesh position={[-0.4, 1.9, 0.91]} castShadow>
        <boxGeometry args={[0.35, 0.45, 0.03]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.7} transparent opacity={0.8} />
      </mesh>
      
      {/* Cantilevered Section Window */}
      <mesh position={[-0.9, 2.5, 0.76]} castShadow>
        <boxGeometry args={[0.6, 0.4, 0.03]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.6} transparent opacity={0.7} />
      </mesh>
      
      {/* Left Building Windows - Grid Pattern */}
      {[...Array(3)].map((_, i) => (
        <mesh key={`winL1-${i}`} position={[-3, 1.2, -0.3]} castShadow>
          <boxGeometry args={[0.3, 0.35, 0.03]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} transparent opacity={0.7} />
        </mesh>
      ))}
      <mesh position={[-2.6, 2.1, -0.3]} castShadow>
        <boxGeometry args={[0.4, 0.5, 0.03]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} transparent opacity={0.7} />
      </mesh>
      
      {/* Right Building - Modern Strip Windows */}
      {[...Array(4)].map((_, i) => (
        <mesh key={`winR-${i}`} position={[3.5, 1 + i * 0.6, 1.26]} castShadow>
          <boxGeometry args={[0.8, 0.3, 0.03]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.6} transparent opacity={0.8} />
        </mesh>
      ))}
      
      {/* Penthouse Window */}
      <mesh position={[3.5, 2.9, 1.16]} castShadow>
        <boxGeometry args={[0.7, 0.5, 0.03]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.7} transparent opacity={0.8} />
      </mesh>
      
      {/* Landscaping - Modern Trees */}
      {/* Tree 1 - Trunk */}
      <mesh position={[-5, 0.5, 1]} castShadow>
        <boxGeometry args={[0.15, 0.5, 0.15]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.9} />
      </mesh>
      {/* Tree 1 - Foliage */}
      <mesh position={[-5, 0.85, 1]} castShadow>
        <boxGeometry args={[0.5, 0.6, 0.5]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.4} roughness={0.8} />
      </mesh>
      
      {/* Tree 2 */}
      <mesh position={[5, 0.45, 0.5]} castShadow>
        <boxGeometry args={[0.12, 0.4, 0.12]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.9} />
      </mesh>
      <mesh position={[5, 0.75, 0.5]} castShadow>
        <boxGeometry args={[0.45, 0.5, 0.45]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.4} roughness={0.8} />
      </mesh>
      
      {/* Shrubs/Bushes */}
      <mesh position={[1.5, 0.45, 1.2]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.3]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.2} roughness={0.9} />
      </mesh>
      <mesh position={[-1.8, 0.45, 1.2]} castShadow>
        <boxGeometry args={[0.35, 0.25, 0.25]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.2} roughness={0.9} />
      </mesh>
      
      {/* Pathway Lights */}
      <mesh position={[-1.2, 0.55, 2]} castShadow>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} />
      </mesh>
      <mesh position={[-1.2, 0.8, 2]}>
        <boxGeometry args={[0.12, 0.08, 0.12]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.9} />
      </mesh>
      
      <mesh position={[1.2, 0.55, 2]} castShadow>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} />
      </mesh>
      <mesh position={[1.2, 0.8, 2]}>
        <boxGeometry args={[0.12, 0.08, 0.12]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.9} />
      </mesh>
      
      {/* Garden Plots - Border Areas */}
      {/* Front Left Plot */}
      <mesh position={[-4.5, 0.32, 2.5]} castShadow>
        <boxGeometry args={[1.5, 0.05, 1]} />
        <meshStandardMaterial color="#1a3a1a" roughness={0.9} />
      </mesh>
      {/* Flowers - spheres on cylinders */}
      <mesh position={[-4.5, 0.45, 2.5]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.2, 8]} />
        <meshStandardMaterial color="#2a4a2a" />
      </mesh>
      <mesh position={[-4.5, 0.58, 2.5]} castShadow>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-4.8, 0.42, 2.3]} castShadow>
        <cylinderGeometry args={[0.025, 0.025, 0.15, 8]} />
        <meshStandardMaterial color="#2a4a2a" />
      </mesh>
      <mesh position={[-4.8, 0.52, 2.3]} castShadow>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-4.2, 0.4, 2.6]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.12, 8]} />
        <meshStandardMaterial color="#2a4a2a" />
      </mesh>
      <mesh position={[-4.2, 0.48, 2.6]} castShadow>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Front Right Plot */}
      <mesh position={[4.5, 0.32, 2.5]} castShadow>
        <boxGeometry args={[1.5, 0.05, 1]} />
        <meshStandardMaterial color="#1a3a1a" roughness={0.9} />
      </mesh>
      <mesh position={[4.5, 0.45, 2.5]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.2, 8]} />
        <meshStandardMaterial color="#2a4a2a" />
      </mesh>
      <mesh position={[4.5, 0.58, 2.5]} castShadow>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[4.2, 0.42, 2.7]} castShadow>
        <cylinderGeometry args={[0.025, 0.025, 0.15, 8]} />
        <meshStandardMaterial color="#2a4a2a" />
      </mesh>
      <mesh position={[4.2, 0.52, 2.7]} castShadow>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Back Left Plot */}
      <mesh position={[-5, 0.32, -2.5]} castShadow>
        <boxGeometry args={[1, 0.05, 1.2]} />
        <meshStandardMaterial color="#1a3a1a" roughness={0.9} />
      </mesh>
      <mesh position={[-5.2, 0.44, -2.5]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.18, 8]} />
        <meshStandardMaterial color="#2a4a2a" />
      </mesh>
      <mesh position={[-5.2, 0.56, -2.5]} castShadow>
        <sphereGeometry args={[0.09, 8, 8]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Back Right Plot */}
      <mesh position={[5, 0.32, -2.5]} castShadow>
        <boxGeometry args={[1, 0.05, 1.2]} />
        <meshStandardMaterial color="#1a3a1a" roughness={0.9} />
      </mesh>
      <mesh position={[5.2, 0.44, -2.3]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.18, 8]} />
        <meshStandardMaterial color="#2a4a2a" />
      </mesh>
      <mesh position={[5.2, 0.56, -2.3]} castShadow>
        <sphereGeometry args={[0.09, 8, 8]} />
        <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Clouds - Animated Group (closer together, more centered) */}
      <group ref={cloudsGroup}>
        {/* Cloud 1 - Left */}
        <mesh position={[-2, 4.5, 2]}>
          <sphereGeometry args={[0.5, 12, 12]} />
          <meshStandardMaterial color="#E8E8E8" transparent opacity={0.7} roughness={1} />
        </mesh>
        <mesh position={[-1.6, 4.5, 2]}>
          <sphereGeometry args={[0.4, 12, 12]} />
          <meshStandardMaterial color="#F0F0F0" transparent opacity={0.6} roughness={1} />
        </mesh>
        <mesh position={[-2.3, 4.6, 2]}>
          <sphereGeometry args={[0.35, 12, 12]} />
          <meshStandardMaterial color="#E8E8E8" transparent opacity={0.65} roughness={1} />
        </mesh>
        <mesh position={[-1.8, 4.7, 2.2]}>
          <sphereGeometry args={[0.3, 12, 12]} />
          <meshStandardMaterial color="#F5F5F5" transparent opacity={0.6} roughness={1} />
        </mesh>
        
        {/* Cloud 2 - Right */}
        <mesh position={[2, 5, 1.5]}>
          <sphereGeometry args={[0.55, 12, 12]} />
          <meshStandardMaterial color="#E8E8E8" transparent opacity={0.7} roughness={1} />
        </mesh>
        <mesh position={[2.5, 5.1, 1.5]}>
          <sphereGeometry args={[0.45, 12, 12]} />
          <meshStandardMaterial color="#F0F0F0" transparent opacity={0.65} roughness={1} />
        </mesh>
        <mesh position={[2.2, 5.2, 1.8]}>
          <sphereGeometry args={[0.4, 12, 12]} />
          <meshStandardMaterial color="#E8E8E8" transparent opacity={0.6} roughness={1} />
        </mesh>
        <mesh position={[1.7, 5, 1.7]}>
          <sphereGeometry args={[0.35, 12, 12]} />
          <meshStandardMaterial color="#F5F5F5" transparent opacity={0.6} roughness={1} />
        </mesh>
        
        {/* Cloud 3 - Center Back */}
        <mesh position={[0, 4.8, 0]}>
          <sphereGeometry args={[0.4, 12, 12]} />
          <meshStandardMaterial color="#E8E8E8" transparent opacity={0.6} roughness={1} />
        </mesh>
        <mesh position={[0.4, 4.8, 0]}>
          <sphereGeometry args={[0.35, 12, 12]} />
          <meshStandardMaterial color="#F0F0F0" transparent opacity={0.55} roughness={1} />
        </mesh>
        <mesh position={[-0.2, 4.9, 0.2]}>
          <sphereGeometry args={[0.3, 12, 12]} />
          <meshStandardMaterial color="#E8E8E8" transparent opacity={0.55} roughness={1} />
        </mesh>
        
        {/* Cloud 4 - Center High */}
        <mesh position={[0, 5.5, 1]}>
          <sphereGeometry args={[0.5, 12, 12]} />
          <meshStandardMaterial color="#E8E8E8" transparent opacity={0.7} roughness={1} />
        </mesh>
        <mesh position={[0.5, 5.6, 1]}>
          <sphereGeometry args={[0.45, 12, 12]} />
          <meshStandardMaterial color="#F0F0F0" transparent opacity={0.65} roughness={1} />
        </mesh>
        <mesh position={[0.2, 5.7, 1.3]}>
          <sphereGeometry args={[0.4, 12, 12]} />
          <meshStandardMaterial color="#F5F5F5" transparent opacity={0.6} roughness={1} />
        </mesh>
        <mesh position={[-0.3, 5.5, 1.1]}>
          <sphereGeometry args={[0.35, 12, 12]} />
          <meshStandardMaterial color="#E8E8E8" transparent opacity={0.65} roughness={1} />
        </mesh>
        
        {/* Cloud 5 - Left Front */}
        <mesh position={[-1, 4.5, 3]}>
          <sphereGeometry args={[0.45, 12, 12]} />
          <meshStandardMaterial color="#E8E8E8" transparent opacity={0.65} roughness={1} />
        </mesh>
        <mesh position={[-0.6, 4.5, 3]}>
          <sphereGeometry args={[0.4, 12, 12]} />
          <meshStandardMaterial color="#F0F0F0" transparent opacity={0.6} roughness={1} />
        </mesh>
        <mesh position={[-0.8, 4.6, 3.3]}>
          <sphereGeometry args={[0.35, 12, 12]} />
          <meshStandardMaterial color="#E8E8E8" transparent opacity={0.6} roughness={1} />
        </mesh>
      </group>
    </group>
  );
}

export default function HouseModel() {
  return (
    <div className="w-full h-[30vw] bg-transparent">
      <Canvas
        shadows
        camera={{ position: [2, 5, 9], fov: 70 }}
        gl={{ alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 12, 8]} 
          intensity={1.2} 
          color="#FFFFFF" 
          castShadow 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-8, 6, -4]} intensity={0.6} color="#FFFFFF" />
        <pointLight position={[8, 5, 4]} intensity={0.5} color="#FFD700" />
        <spotLight
          position={[0, 15, 5]}
          angle={0.4}
          penumbra={1}
          intensity={0.7}
          color="#00FF41"
          castShadow
        />
        <Model />
        <OrbitControls 
          enableZoom={true}
          zoomSpeed={1.2}
          minDistance={5}
          maxDistance={20}
          autoRotate 
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
          enablePan={true}
        />
      </Canvas>
    </div>
  );
}

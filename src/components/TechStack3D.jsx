import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

// Komponen 3D Macropad Individual
function Macropad({ position, techText, title, activeColor, keysColors, index }) {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [textScale, setTextScale] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);

  // Animasi hover & floating idle menggunakan useFrame
  useFrame((state) => {
    if (!groupRef.current) return;

    // 1. Idle Floating Animation (Sine Wave)
    const time = state.clock.getElapsedTime();
    const idleY = Math.sin(time * 2 + index * 1.5) * 0.08;

    // 2. Target Y Position (bergerak naik saat di-hover)
    const targetY = hovered ? 0.6 : 0;
    
    // Lerping posisi Y secara smooth
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      position[1] + targetY + idleY,
      0.1
    );

    // Lerping rotasi agar merespons hover
    const targetRotX = hovered ? 0.2 : 0.1; // sedikit mendongak saat di-hover
    const targetRotY = hovered ? 0.4 : -0.2; // sedikit memutar saat di-hover
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.1);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.1);

    // 3. Lerping skala & opacity teks holografis melayang
    const targetScale = hovered ? 1 : 0;
    const targetOpacity = hovered ? 1 : 0;
    setTextScale((prev) => THREE.MathUtils.lerp(prev, targetScale, 0.15));
    setTextOpacity((prev) => THREE.MathUtils.lerp(prev, targetOpacity, 0.15));
  });

  // Susunan koordinat untuk 4 keycaps (2x2 grid) di atas macropad
  const keys = [
    { pos: [-0.4, 0.22, -0.3] },
    { pos: [0.4, 0.22, -0.3] },
    { pos: [-0.4, 0.22, 0.3] },
    { pos: [0.4, 0.22, 0.3] }
  ];

  return (
    <group
      ref={groupRef}
      position={[position[0], position[1], position[2]]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        setHovered(false);
        document.body.style.cursor = 'default';
      }}
    >
      {/* 1. TEXT HOLOGRAFIS (Floating Text) */}
      <group position={[0, 1.4, 0]} scale={textScale}>
        {/* Latar belakang glow melayang halus */}
        <mesh position={[0, 0, -0.05]}>
          <planeGeometry args={[2.5, 1.0]} />
          <meshBasicMaterial 
            color={activeColor} 
            transparent 
            opacity={textOpacity * 0.15} 
            depthWrite={false}
          />
        </mesh>
        
        <Text
          fontSize={0.16}
          color="#18181b" // Teks gelap agar kontras
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6r8E79FGo5Q1k.woff"
          maxWidth={2.2}
          textAlign="center"
        >
          {techText}
        </Text>
      </group>

      {/* 2. BASE BOARD MACROPAD */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.3, 1.4]} />
        <meshStandardMaterial 
          color={hovered ? '#ffffff' : '#e5e5e5'} 
          roughness={0.2}
          metalness={0.8}
          emissive={hovered ? activeColor : '#000000'}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>

      {/* 3. KEYCAPS (4 Tombol di atasnya) */}
      {keys.map((key, kIdx) => (
        <mesh 
          key={kIdx} 
          position={key.pos} 
          castShadow 
          receiveShadow
        >
          <boxGeometry args={[0.45, 0.2, 0.45]} />
          <meshStandardMaterial 
            color={hovered ? activeColor : keysColors[kIdx % keysColors.length]} 
            roughness={0.4}
            metalness={0.2}
            emissive={hovered ? activeColor : '#000000'}
            emissiveIntensity={hovered ? 0.5 : 0}
          />
        </mesh>
      ))}

      {/* 4. UNDERGLOW LED EFFECT */}
      <pointLight 
        position={[0, -0.2, 0]} 
        color={activeColor} 
        intensity={hovered ? 3.5 : 0.8} 
        distance={2.5}
      />
    </group>
  );
}

// Komponen Utama Section Tech Stack
export default function TechStack3D() {
  const macropadsData = [
    {
      title: 'Frontend',
      techText: "Frontend:\nReact, Tailwind CSS,\nFramer Motion",
      position: [-2.6, 0, 0],
      activeColor: '#06b6d4', // Cyan
      keysColors: ['#0891b2', '#155e75', '#22d3ee', '#1e293b']
    },
    {
      title: 'Backend',
      techText: "Backend:\nLaravel, Node.js,\nPHP & Express",
      position: [0, 0, 0],
      activeColor: '#a855f7', // Purple
      keysColors: ['#7c3aed', '#5b21b6', '#c084fc', '#1e293b']
    },
    {
      title: 'Database & Ops',
      techText: "Database & Ops:\nSupabase, MySQL,\nDocker, Git",
      position: [2.6, 0, 0],
      activeColor: '#10b981', // Emerald Green
      keysColors: ['#059669', '#064e3b', '#34d399', '#1e293b']
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-neutral-800 relative overflow-hidden flex flex-col items-center">
      {/* Visual background blurred blob for space-age vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-xs">
            <span>Interactive 3D Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Kekuatan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Teknologi</span> Saya
          </h2>
          <p className="text-neutral-500 text-sm md:text-base font-light">
            Dekatkan kursor Anda ke atas setiap **3D Macropad** di bawah ini untuk memproyeksikan tumpukan teknologi secara holografis.
          </p>
        </div>

        {/* 3D CANVAS AREA */}
        <div className="w-full h-[400px] md:h-[480px] bg-white/40 border border-neutral-200/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-xs hover:border-purple-200/50 transition-colors relative">
          <Canvas
            shadows
            camera={{ position: [0, 2.5, 4.5], fov: 45 }}
          >
            {/* Ambient Light - Soft global light */}
            <ambientLight intensity={0.4} />

            {/* Main Directional Light - Casting crisp but soft shadows */}
            <directionalLight
              castShadow
              position={[2.5, 8, 5]}
              intensity={1.2}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={20}
              shadow-camera-left={-6}
              shadow-camera-right={6}
              shadow-camera-top={6}
              shadow-camera-bottom={-6}
              shadow-bias={-0.001}
            />

            {/* Fill Light for subtle dramatic reflection */}
            <directionalLight 
              position={[-4, 2, -2]} 
              intensity={0.6} 
              color="#a855f7" 
            />

            {/* Rendering the 3 Macropads */}
            <Center>
              {macropadsData.map((mac, idx) => (
                <Macropad
                  key={idx}
                  index={idx}
                  position={mac.position}
                  title={mac.title}
                  techText={mac.techText}
                  activeColor={mac.activeColor}
                  keysColors={mac.keysColors}
                />
              ))}
            </Center>

            {/* Ground Plane to receive shadows */}
            <mesh 
              rotation={[-Math.PI / 2, 0, 0]} 
              position={[0, -0.6, 0]} 
              receiveShadow
            >
              <planeGeometry args={[30, 30]} />
              <shadowMaterial opacity={0.06} />
            </mesh>
          </Canvas>

          {/* Floating Instructions Layer */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none flex items-center space-x-2 bg-neutral-900/5 text-neutral-600 text-xs px-3.5 py-2 rounded-full backdrop-blur-xs border border-neutral-200/40">
            <svg className="w-3.5 h-3.5 animate-bounce text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
            <span>Gunakan Mouse / Sentuhan untuk Interaksi 3D</span>
          </div>
        </div>
      </div>
    </section>
  );
}

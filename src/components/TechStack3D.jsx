import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Center } from '@react-three/drei';
import * as THREE from 'three';

// 1. Komponen Twinkling Stars untuk merekonstruksi latar luar angkasa
function Starfield() {
  const starsRef = useRef();
  const starsCount = 35;
  const starsData = useRef(
    Array.from({ length: starsCount }).map(() => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8 + 1,
        (Math.random() - 0.5) * 8 - 4
      ],
      speed: 0.6 + Math.random() * 1.2,
      phase: Math.random() * Math.PI
    }))
  );

  useFrame((state) => {
    if (!starsRef.current) return;
    const time = state.clock.getElapsedTime();
    
    starsRef.current.children.forEach((star, idx) => {
      const data = starsData.current[idx];
      const opacity = 0.2 + Math.sin(time * data.speed + data.phase) * 0.4;
      star.material.opacity = Math.max(0.1, Math.min(0.8, opacity));
    });
  });

  return (
    <group ref={starsRef}>
      {starsData.current.map((star, idx) => (
        <mesh key={idx} position={star.position}>
          <sphereGeometry args={[0.015, 6, 6]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

// 2. Komponen Keycap Cherry-MX Tapered Style (Monochrome & Emerald Green Accent)
function Keycap({ label, color, position, desc, isHovered, onHover, onUnhover, isRaised, textColor }) {
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) return;
    
    // Y-offset penekanan tombol
    const defaultY = isRaised ? 0.24 : 0.15;
    const targetY = isHovered ? defaultY - 0.08 : defaultY;
    
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.2);
  });

  // Warna pendaran tombol saat di-hover: Selalu Emerald Green untuk pop-up neon!
  const hoverEmissive = '#10b981';

  return (
    <group 
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(desc, label);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        onUnhover();
        document.body.style.cursor = 'default';
      }}
    >
      {/* Switch Stem */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[0.26, 0.15, 0.26]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.7} />
      </mesh>

      {/* Keycap Body: Tapered Cylinder */}
      <mesh 
        ref={meshRef} 
        castShadow 
        receiveShadow
        position={[0, 0.15, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <cylinderGeometry args={[0.18, 0.24, 0.26, 4]} />
        <meshStandardMaterial 
          color={isHovered ? '#10b981' : color} // Berubah jadi hijau emerald saat di-hover!
          roughness={0.2} 
          metalness={0.1}
          emissive={isHovered ? hoverEmissive : '#000000'}
          emissiveIntensity={isHovered ? 0.8 : 0}
        />
        
        {/* Teks Label Brand */}
        <Text
          position={[0, 0.135, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
          fontSize={0.08}
          color={isHovered ? '#ffffff' : textColor || '#ffffff'}
          fontWeight="bold"
          anchorX="center"
          anchorY="middle"
          strokeColor={isHovered ? '#000000' : '#111111'}
          strokeWidth={0.003}
        >
          {label}
        </Text>
      </mesh>
    </group>
  );
}

// 3. Komponen Utama Keyboard Assembly (Monochrome / Dolch Theme dengan Aksen Hijau Emerald)
function KeyboardAssembly() {
  const keyboardRef = useRef();
  const [activeDesc, setActiveDesc] = useState('DEKATKAN KURSOR UNTUK MENCOBA');
  const [activeKey, setActiveKey] = useState('');

  // 18 tombol didesain dalam tema Premium Hitam & Putih (Dolch/Monochrome) dengan aksen Hijau Emerald
  const keycapsData = [
    // BARIS 0 (Baris Atas)
    { label: 'JS', color: '#10b981', textColor: '#ffffff', col: 0, row: 0, desc: 'JavaScript (ES6+): Bahasa Utama Interaktivitas Web', isRaised: true }, // Artisan ESC Keycaps: Emerald Green!
    { label: 'Next', color: '#171717', textColor: '#ffffff', col: 1, row: 0, desc: 'Next.js: Framework React untuk Skala Produksi Enterprise' },
    { label: 'TS', color: '#ffffff', textColor: '#000000', col: 2, row: 0, desc: 'TypeScript: Pemrograman JavaScript dengan Tipe Data Aman' },
    { label: 'HTML', color: '#ffffff', textColor: '#000000', col: 3, row: 0, desc: 'HTML5: Pondasi Struktur Halaman Web yang Semantik' },
    { label: 'CSS', color: '#ffffff', textColor: '#000000', col: 4, row: 0, desc: 'CSS3: Gaya Desain Modern, Flexbox, Grid, & Efek Kustom' },
    { label: 'React', color: '#ffffff', textColor: '#000000', col: 5, row: 0, desc: 'React: Pustaka Pendekatan Komponen Deklaratif untuk UI' },

    // BARIS 1 (Baris Tengah)
    { label: 'GH', color: '#171717', textColor: '#ffffff', col: 0, row: 1, desc: 'GitHub: Platform hosting Repositori Git & Manajemen Tim' },
    { label: 'LV', color: '#ffffff', textColor: '#000000', col: 1, row: 1, desc: 'Laravel: Framework PHP Modern dengan Sintaks Elegan & Kuat' },
    { label: 'Git', color: '#171717', textColor: '#ffffff', col: 2, row: 1, desc: 'Git: standard Kolaborasi Kontrol Versi Kode' },
    { label: 'TW', color: '#ffffff', textColor: '#000000', col: 3, row: 1, desc: 'Tailwind CSS: Framework Utility-First untuk Desain Responsif Cepat' },
    { label: 'Node', color: '#ffffff', textColor: '#000000', col: 4, row: 1, desc: 'Node.js: Runtime JavaScript Asinkron untuk Sisi Server' },
    { label: 'Vue', color: '#ffffff', textColor: '#000000', col: 5, row: 1, desc: 'Vue.js: Alternatif Framework Progresif yang Fleksibel & Ringan' },

    // BARIS 2 (Baris Bawah)
    { label: 'Dkr', color: '#171717', textColor: '#ffffff', col: 0, row: 2, desc: 'Docker: Isolasi Aplikasi dalam Kontainer Portabel' },
    { label: 'Supa', color: '#ffffff', textColor: '#000000', col: 1, row: 2, desc: 'Supabase: SQL Database Relasional & Backend Real-Time Instan' },
    { label: 'SQL', color: '#ffffff', textColor: '#000000', col: 2, row: 2, desc: 'MySQL: Penyimpanan Data Relasional Skala Menengah & Besar' },
    { label: 'WP', color: '#ffffff', textColor: '#000000', col: 3, row: 2, desc: 'WordPress: CMS Paling Populer untuk Solusi Konten Cepat' },
    { label: 'PHP', color: '#ffffff', textColor: '#000000', col: 4, row: 2, desc: 'PHP: Bahasa Server Utama untuk Logika Aplikasi Web' },
    { label: '▲', color: '#171717', textColor: '#ffffff', col: 5, row: 2, desc: 'Vercel: Cloud Platform untuk Instant Serverless & CDN hosting' }
  ];

  // Efek Floating Orbit Isometric Kemiringan
  useFrame((state) => {
    if (!keyboardRef.current) return;
    const time = state.clock.getElapsedTime();

    keyboardRef.current.rotation.x = -0.42 + Math.sin(time * 0.4) * 0.015;
    keyboardRef.current.rotation.y = 0.58 + Math.sin(time * 0.3) * 0.02;
    keyboardRef.current.position.y = -0.22 + Math.sin(time * 0.5) * 0.05;
  });

  return (
    <group ref={keyboardRef} position={[0, -0.22, 0]}>
      
      {/* 1. SCREEN PROYEKSI HOLOGRAFIS EMERALD GREEN */}
      <group position={[0, 1.6, -1.3]} rotation={[0.2, -0.2, 0]}>
        <mesh>
          <planeGeometry args={[4.6, 0.7]} />
          <meshBasicMaterial 
            color="#10b981" 
            transparent 
            opacity={0.06} 
          />
        </mesh>
        
        {/* Glow Wireframe */}
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[4.62, 0.72]} />
          <meshBasicMaterial 
            color="#10b981" 
            wireframe 
            transparent 
            opacity={0.25}
          />
        </mesh>

        <Text
          fontSize={0.14}
          color="#10b981" // Hologram Teks Hijau Zamrud Menyala
          fontWeight="bold"
          anchorX="center"
          anchorY="middle"
          maxWidth={4.4}
          textAlign="center"
        >
          {activeDesc}
        </Text>
      </group>

      {/* 2. CASE KEYBOARD SOLID PURE BLACK (High Contrast Minimalist) */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[4.3, 0.24, 2.3]} />
        <meshStandardMaterial 
          color="#0d0d0d" 
          roughness={0.8} 
          metalness={0.5}
        />
      </mesh>

      {/* Plat Atas Hitam */}
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[4.14, 0.08, 2.14]} />
        <meshStandardMaterial 
          color="#141414" 
          roughness={0.7} 
          metalness={0.6}
        />
      </mesh>

      {/* Kaki Karet Hitam Belakang */}
      <mesh position={[0, -0.15, -0.8]}>
        <boxGeometry args={[3.8, 0.15, 0.2]} />
        <meshStandardMaterial color="#020202" roughness={0.9} />
      </mesh>

      {/* 3. KEYCAPS GRID ASSEMBLY */}
      {keycapsData.map((key, idx) => {
        const spacingX = 0.62;
        const spacingZ = 0.62;
        
        const posX = (key.col - 2.5) * spacingX;
        const posZ = (key.row - 1) * spacingZ;

        return (
          <Keycap
            key={idx}
            label={key.label}
            color={key.color}
            textColor={key.textColor}
            position={[posX, 0.06, posZ]}
            desc={key.desc}
            isRaised={key.isRaised}
            isHovered={activeKey === key.label}
            onHover={(desc, label) => {
              setActiveDesc(desc);
              setActiveKey(label);
            }}
            onUnhover={() => {
              setActiveDesc('DEKATKAN KURSOR UNTUK MENCOBA');
              setActiveKey('');
            }}
          />
        );
      })}

      {/* 4. UNDERGLOW LED KEYBOARD (Glowing Emerald Green Neon) */}
      <pointLight 
        position={[0, -0.3, 0]} 
        color="#10b981" 
        intensity={3.8} 
        distance={4.8}
      />
    </group>
  );
}

// Komponen Utama Section Tech Stack (High Contrast Black & White + Emerald Green Accent)
export default function TechStack3D() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] text-white relative overflow-hidden flex flex-col items-center">
      {/* Outer space cosmic glow radial background in Emerald Green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-semibold shadow-xs">
            <span>Interactive 3D Mechanical Keyboard</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Kekuatan <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">Teknologi</span> Saya
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light">
            Sentuh atau dekatkan kursor Anda ke atas setiap **tombol mekanikal (keycap)** di bawah ini untuk melihat detail teknologi secara interaktif.
          </p>
        </div>

        {/* 3D CANVAS AREA (Sleek Space-like Keyboard Scene in B&W + Green Theme) */}
        <div className="w-full h-[450px] md:h-[540px] bg-[#0c0c0e] border border-neutral-800 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_0_24px_rgba(0,0,0,0.8)] hover:border-emerald-500/20 transition-colors relative">
          <Canvas
            shadows
            camera={{ position: [0, 2.9, 4.8], fov: 40 }}
            style={{ width: '100%', height: '100%', background: '#050507' }}
          >
            {/* Latar Belakang Bintang Berkelap-Kelip (Starfield) */}
            <Starfield />

            {/* Ambient Light - Soft global space light */}
            <ambientLight intensity={0.35} />

            {/* Main Directional Light - Casting crisp but soft shadows */}
            <directionalLight
              castShadow
              position={[3.0, 9, 3.5]}
              intensity={1.4}
              shadow-bias={-0.001}
            />

            {/* Fill Light in Emerald Green for dynamic neon reflection */}
            <directionalLight 
              position={[-4, 2, -2]} 
              intensity={0.6} 
              color="#10b981" 
            />

            {/* Assembly model keyboard di tengah canvas */}
            <Center>
              <KeyboardAssembly />
            </Center>

            {/* Ground Plane to receive shadows */}
            <mesh 
              rotation={[-Math.PI / 2, 0, 0]} 
              position={[0, -1.0, 0]} 
              receiveShadow
            >
              <planeGeometry args={[30, 30]} />
              <shadowMaterial opacity={0.3} />
            </mesh>
          </Canvas>

          {/* Floating Instructions Layer */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none flex items-center space-x-2 bg-neutral-900/40 text-neutral-300 text-xs px-3.5 py-2 rounded-full backdrop-blur-xs border border-white/5">
            <svg className="w-3.5 h-3.5 animate-bounce text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
            <span>Gerakkan kursor untuk menekan & melihat info tombol</span>
          </div>
        </div>
      </div>
    </section>
  );
}

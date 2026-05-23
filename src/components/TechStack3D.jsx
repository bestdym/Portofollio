import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Center } from '@react-three/drei';
import * as THREE from 'three';

// Komponen Keycap Individual yang dapat ditekan (pressable) dan merespons hover
function Keycap({ label, color, position, desc, isHovered, onHover, onUnhover }) {
  const meshRef = useRef();
  const [pressed, setPressed] = useState(false);

  // Menganimasikan penekanan tombol (keypress) saat di-hover / diklik
  useFrame(() => {
    if (!meshRef.current) return;

    // Jika di-hover, posisi Y turun sedikit (efek ditekan)
    const targetY = isHovered ? 0.08 : 0.15;
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.2);
  });

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
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
    >
      {/* Batang Switch / Dudukan Keycap */}
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[0.3, 0.15, 0.3]} />
        <meshStandardMaterial color="#262626" roughness={0.8} />
      </mesh>

      {/* Kepala Keycap (Tapered Cherry MX Style) */}
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        position={[0, 0.15, 0]}
      >
        <boxGeometry args={[0.48, 0.2, 0.48]} />
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.1}
          emissive={isHovered ? color : '#000000'}
          emissiveIntensity={isHovered ? 0.5 : 0}
        />

        {/* Teks Label di atas Tombol Keycap */}
        <Text
          position={[0, 0.11, 0]}
          rotation={[-Math.PI / 2, 0, 0]} // Rata di atas tombol
          fontSize={0.09}
          color="#ffffff"
          fontWeight="bold"
          anchorX="center"
          anchorY="middle"
          strokeColor="#000000"
          strokeWidth={0.005}
        >
          {label}
        </Text>
      </mesh>
    </group>
  );
}

// Komponen Utama Keyboard 3D Tech Stack Assembly
function KeyboardAssembly() {
  const keyboardRef = useRef();
  const [activeDesc, setActiveDesc] = useState('DEKATKAN KURSOR UNTUK MENCOBA');
  const [activeKey, setActiveKey] = useState('');

  // Data layout keycaps (Grid 5 Kolom x 3 Baris) selaras dengan Tech Stack Anda
  const keycapsData = [
    // Baris 0 (Top - Frontend Core)
    { label: 'HTML', color: '#e34f26', col: 0, row: 0, desc: 'HTML5: Struktur & Markah Web Modern' },
    { label: 'CSS', color: '#1572b6', col: 1, row: 0, desc: 'CSS3: Tata Letak Modern & Animasi Visual' },
    { label: 'JS', color: '#f7df1e', col: 2, row: 0, desc: 'JavaScript (ES6+): Pemrograman & Logika Interaktif' },
    { label: 'TS', color: '#3178c6', col: 3, row: 0, desc: 'TypeScript: Pengetikan Kuat untuk Aplikasi Skala Besar' },
    { label: 'React', color: '#00d8ff', col: 4, row: 0, desc: 'React: Pustaka Deklaratif untuk UI Komponen Modern' },

    // Baris 1 (Middle - Styling & Backend)
    { label: 'TW', color: '#38bdf8', col: 0, row: 1, desc: 'Tailwind CSS: Desain Cepat dengan Pendekatan Utility-First' },
    { label: 'FM', color: '#ff007f', col: 1, row: 1, desc: 'Framer Motion: Animasi Komponen React yang Mulus & Fluid' },
    { label: 'PHP', color: '#777bb4', col: 2, row: 1, desc: 'PHP: Bahasa Pemrograman Server-Side Utama' },
    { label: 'LV', color: '#ff2d20', col: 3, row: 1, desc: 'Laravel: Framework PHP Elegan & Berfitur Lengkap' },
    { label: 'Node', color: '#43853d', col: 4, row: 1, desc: 'Node.js: Runtime Javascript Berkinerja Tinggi di Sisi Server' },

    // Baris 2 (Bottom - Database, Ops, & Tools)
    { label: 'Supa', color: '#3ecf8e', col: 0, row: 2, desc: 'Supabase: PostgreSQL & Backend-as-a-Service Real-Time' },
    { label: 'MySQL', color: '#00758f', col: 1, row: 2, desc: 'MySQL: Sistem Manajemen Database Relasional Terpopuler' },
    { label: 'Docker', color: '#0db7ed', col: 2, row: 2, desc: 'Docker: standardisasi Kontainerisasi untuk Deployment' },
    { label: 'Git', color: '#f05032', col: 3, row: 2, desc: 'Git: Kolaborasi & Sistem Kontrol Versi Kode' },
    { label: 'Vite', color: '#bd34fe', col: 4, row: 2, desc: 'Vite: Build Tool Cepat untuk Pengembangan Web Modern' }
  ];

  // Efek Floating Idle untuk Seluruh Keyboard
  useFrame((state) => {
    if (!keyboardRef.current) return;
    const time = state.clock.getElapsedTime();

    // Rotasi melayang lembut (Isometric Isometric tilt angle)
    keyboardRef.current.rotation.x = -0.4 + Math.sin(time * 0.4) * 0.02;
    keyboardRef.current.rotation.y = 0.55 + Math.sin(time * 0.3) * 0.03;

    // Naik turun melayang lembut
    keyboardRef.current.position.y = -0.3 + Math.sin(time * 0.5) * 0.05;
  });

  return (
    <group ref={keyboardRef} position={[0, -0.3, 0]}>
      {/* 1. SCREEN PROYEKSI HOLOGRAFIS BEKANG KEYBOARD */}
      <group position={[0, 1.5, -1.2]} rotation={[0.2, -0.2, 0]}>
        {/* Latar Belakang Hologram yang Bercahaya */}
        <mesh>
          <planeGeometry args={[4.2, 0.7]} />
          <meshBasicMaterial
            color={activeKey ? '#c084fc' : '#818cf8'}
            transparent
            opacity={0.08}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Frame Glow Border Tipis */}
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[4.22, 0.72]} />
          <meshBasicMaterial
            color={activeKey ? '#a855f7' : '#6366f1'}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Teks Proyeksi Deskripsi Teknologi */}
        <Text
          fontSize={0.14}
          color={activeKey ? '#a855f7' : '#4f46e5'}
          fontWeight="bold"
          anchorX="center"
          anchorY="middle"
          maxWidth={4.0}
          textAlign="center"
        >
          {activeDesc}
        </Text>
      </group>

      {/* 2. BASE BOARD KEYBOARD / CASE (Sasis Kokoh Warna Gelap) */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[3.8, 0.22, 2.5]} />
        <meshStandardMaterial
          color="#171717"
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Plat Frame Atas (Untuk menahan switch) */}
      <mesh castShadow position={[0, 0.08, 0]}>
        <boxGeometry args={[3.64, 0.08, 2.34]} />
        <meshStandardMaterial
          color="#262626"
          roughness={0.5}
          metalness={0.9}
        />
      </mesh>

      {/* Kaki Karet Belakang (Membuat keyboard mendongak ke depan) */}
      <mesh position={[0, -0.15, -0.9]}>
        <boxGeometry args={[3.4, 0.15, 0.2]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
      </mesh>

      {/* 3. KEYCAPS GRID ASSEMBLY */}
      {keycapsData.map((key, idx) => {
        // Menghitung koordinat posisi X dan Z berdasarkan baris dan kolom grid
        const spacingX = 0.65;
        const spacingZ = 0.65;

        // Memusatkan posisi grid di tengah-tengah keyboard sasis
        const posX = (key.col - 2) * spacingX;
        const posZ = (key.row - 1) * spacingZ;

        return (
          <Keycap
            key={idx}
            label={key.label}
            color={key.color}
            position={[posX, 0.06, posZ]}
            desc={key.desc}
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

      {/* 4. UNDERGLOW LED KEYBOARD (Glow warna-warni di sekeliling bawah sasis) */}
      <pointLight
        position={[0, -0.3, 0]}
        color={activeKey ? '#a855f7' : '#6366f1'}
        intensity={3.0}
        distance={4}
      />
    </group>
  );
}

// Komponen Utama Section Tech Stack
export default function TechStack3D() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-neutral-800 relative overflow-hidden flex flex-col items-center">
      {/* Visual background blurred blob for space-age vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-xs">
            <span>Interactive 3D Mechanical Keyboard</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Kekuatan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Teknologi</span> Saya
          </h2>
          <p className="text-neutral-500 text-sm md:text-base font-light">
            Sentuh atau dekatkan kursor Anda ke setiap **tombol mekanikal (keycap)** di bawah ini untuk melihat detail teknologi secara interaktif.
          </p>
        </div>

        {/* 3D CANVAS AREA (Beautiful Isometric Mechanical Keyboard) */}
        <div className="w-full h-[440px] md:h-[520px] bg-white/40 border border-neutral-200/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-xs hover:border-purple-200/50 transition-colors relative">
          <Canvas
            shadows
            camera={{ position: [0, 2.8, 5.0], fov: 42 }}
            style={{ width: '100%', height: '100%' }}
          >
            {/* Ambient Light - Soft global light */}
            <ambientLight intensity={0.5} />

            {/* Main Directional Light - Casting crisp but soft shadows */}
            <directionalLight
              castShadow
              position={[3.0, 9, 4]}
              intensity={1.3}
              shadow-bias={-0.001}
            />

            {/* Fill Light for subtle dramatic reflection */}
            <directionalLight
              position={[-4, 2, -2]}
              intensity={0.7}
              color="#a855f7"
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
              <shadowMaterial opacity={0.06} />
            </mesh>
          </Canvas>

          {/* Floating Instructions Layer */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none flex items-center space-x-2 bg-neutral-900/5 text-neutral-600 text-xs px-3.5 py-2 rounded-full backdrop-blur-xs border border-neutral-200/40">
            <svg className="w-3.5 h-3.5 animate-bounce text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
            <span>Gerakkan kursor untuk menekan & melihat info tombol</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, ShieldCheck, Cpu, Layers } from 'lucide-react';

const projects = [
  {
    title: '3D Human Anatomy Web',
    category: 'Interactive 3D Web App',
    description: 'Aplikasi edukasi anatomi tubuh manusia interaktif menggunakan rendering 3D real-time berkinerja tinggi. Pengguna dapat memutar, memperbesar, dan membedah organ tubuh secara langsung di browser.',
    highlight: 'Sorotan: Elemen Interaktif 3D & WebGL Shaders',
    tags: ['Three.js', 'React Three Fiber', 'GLSL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    gridClass: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-neutral-900/50 via-neutral-900/20 to-emerald-950/15'
  },
  {
    title: 'Bunga Bali E-commerce',
    category: 'E-commerce Platform',
    description: 'Platform perdagangan elektronik bunga premium khas Bali dengan sistem inventaris terintegrasi, pembayaran otomatis, dan pembaruan real-time.',
    highlight: 'Sorotan: Ekosistem Modern, Serverless, & Keamanan Transaksi',
    tags: ['React', 'Supabase', 'Stripe', 'Tailwind CSS', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
    gridClass: 'md:col-span-1 md:row-span-2 bg-gradient-to-br from-neutral-900/40 via-neutral-900/20 to-teal-950/15'
  },
  {
    title: 'Denah Coding',
    category: 'Startup Tech Platform',
    description: 'Platform edukasi dan kolaborasi pemrograman untuk memetakan jalur karier developer melalui kurikulum interaktif dan bimbingan mentor.',
    highlight: 'Sorotan: Arsitektur Modular & Jalur Belajar Interaktif',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    gridClass: 'md:col-span-1 md:row-span-1 bg-neutral-900/30'
  },
  {
    title: 'Web Pariwisata Yogyakarta',
    category: 'Travel & Tourism Hub',
    description: 'Portal eksplorasi destinasi wisata, budaya, dan kuliner Yogyakarta yang dilengkapi dengan peta interaktif dan rekomendasi berbasis AI.',
    highlight: 'Sorotan: Peta Interaktif & Rekomendasi Berbasis Lokasi',
    tags: ['React', 'Leaflet Map', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    githubUrl: '#',
    gridClass: 'md:col-span-2 md:row-span-1 bg-gradient-to-br from-neutral-900/40 via-neutral-900/20 to-emerald-950/10'
  }
];

const achievements = [
  {
    title: 'Sertifikasi MikroTik MTCNA',
    issuer: 'MikroTik Academy',
    year: '2024',
    description: 'Sertifikasi internasional dalam bidang jaringan komputer, meliputi manajemen lalu lintas data, routing dasar, keamanan nirkabel, dan konfigurasi firewall.',
    icon: ShieldCheck,
    colorClass: 'text-emerald-400 bg-emerald-950/30 border-emerald-500/20'
  },
  {
    title: 'Peserta Web Design Competition SDG 8',
    issuer: 'National Student Competition',
    year: '2024',
    description: 'Merancang dan membangun purwarupa web interaktif bertema "Pekerjaan Layak dan Pertumbuhan Ekonomi" dengan fokus pada aksesibilitas penuh dan performa tinggi.',
    icon: Award,
    colorClass: 'text-teal-400 bg-teal-950/30 border-teal-500/20'
  }
];

export default function PortfolioAchievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] text-neutral-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-semibold shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Showcase & Awards</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Karya Pilihan & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Pencapaian</span>
          </h2>
          <p className="text-neutral-400 max-w-xl text-sm md:text-md font-light">
            Kombinasi karya digital fungsional dengan pengakuan sertifikasi akademis dan profesional.
          </p>
        </div>

        {/* BENTO GRID PORTFOLIO (Sleek Dark Theme) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[280px] mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`group relative rounded-3xl border border-neutral-800/80 backdrop-blur-md p-7 md:p-8 flex flex-col justify-between transition-all duration-500 ease-out hover:scale-[1.02] hover:bg-neutral-900/60 hover:border-emerald-500/30 hover:shadow-xl shadow-xs overflow-hidden ${proj.gridClass}`}
            >
              {/* Background decorative shine on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Upper Section */}
              <div className="space-y-3 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                    {proj.category}
                  </span>
                  
                  {/* Action buttons appearing on hover (Emerald Glow) */}
                  <div className="flex items-center space-x-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350 ease-out">
                    <a 
                      href={proj.githubUrl} 
                      className="h-8.5 w-8.5 rounded-full bg-neutral-950 border border-neutral-800 shadow-sm flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                      title="View Code"
                      aria-label="GitHub"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                    <a 
                      href={proj.liveUrl} 
                      className="h-8.5 w-8.5 rounded-full bg-emerald-500 text-white shadow-sm flex items-center justify-center hover:bg-emerald-600 transition-colors"
                      title="View Live"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs md:text-sm text-neutral-350 leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {proj.description}
                </p>
              </div>

              {/* Lower Section (Highlights & Tags) */}
              <div className="space-y-4 pt-4 border-t border-neutral-800/80 z-10">
                {/* Special Highlight banner */}
                <div className="flex items-center space-x-2 text-xs font-medium text-neutral-200 bg-neutral-950/80 px-3 py-1.5 rounded-lg w-fit border border-neutral-800/40">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>{proj.highlight}</span>
                </div>

                {/* Tag list in dark styling */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] md:text-xs bg-neutral-950 text-neutral-400 px-2.5 py-1 rounded-lg border border-neutral-800/40 group-hover:bg-emerald-950/20 group-hover:text-emerald-300 group-hover:border-emerald-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SECTION SEPARATOR */}
        <div className="w-full h-[1px] bg-neutral-800/80 my-16" />

        {/* ACHIEVEMENT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title Area */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>Sertifikasi & Lomba</span>
            </div>
            <h3 className="text-3xl font-bold text-white leading-tight">
              Kredibilitas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                yang Teruji
              </span>
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Meningkatkan kompetensi teknis melalui proses sertifikasi internasional dan berkompetisi di tingkat mahasiswa nasional.
            </p>
          </div>

          {/* Right Achievement List Area (High Contrast Dark Cards) */}
          <motion.div 
            className="lg:col-span-8 space-y-5 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {achievements.map((ach, aIdx) => {
              const IconComponent = ach.icon;
              return (
                <motion.div
                  key={aIdx}
                  variants={cardVariants}
                  className="group flex flex-col md:flex-row items-start gap-5 p-6 md:p-7 bg-neutral-900/20 border border-neutral-800/80 rounded-3xl backdrop-blur-md shadow-2xs hover:shadow-sm hover:border-emerald-500/30 hover:bg-neutral-900/40 transition-all duration-300"
                >
                  {/* Glowing Icon Container */}
                  <div className={`h-14 w-14 shrink-0 rounded-2xl border flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110 ${ach.colorClass}`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1.5">
                      <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {ach.title}
                      </h4>
                      <span className="text-xs font-semibold text-neutral-300 bg-neutral-800 px-2.5 py-1 rounded-full w-fit">
                        {ach.year}
                      </span>
                    </div>

                    <div className="text-xs md:text-sm font-medium text-emerald-400">
                      {ach.issuer}
                    </div>

                    <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
                      {ach.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

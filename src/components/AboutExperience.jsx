import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, ChevronRight, Sparkles } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Wesclic',
    period: 'Des 2024 - Sekarang',
    type: 'Full-time',
    description: [
      'Memimpin pengembangan ekosistem aplikasi web enterprise menggunakan React.js dan Node.js.',
      'Merancang arsitektur backend yang skalabel dan aman dengan integrasi database modern.',
      'Berkolaborasi erat dengan desainer UI/UX untuk menciptakan antarmuka yang sangat interaktif dan responsif.'
    ],
    skills: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'REST API']
  },
  {
    role: 'Web Developer Intern',
    company: 'Wesclic (Internship)',
    period: 'Agu 2024 - Nov 2024',
    type: 'Magang',
    description: [
      'Membantu migrasi platform web legacy ke teknologi modern berbasis React dan Tailwind CSS.',
      'Menerapkan desain pixel-perfect serta mengoptimalkan performa render halaman.',
      'Melakukan integrasi API pihak ketiga dan melakukan debugging sistem untuk meningkatkan stabilitas.'
    ],
    skills: ['React', 'Tailwind CSS', 'JavaScript', 'Git', 'API Integration']
  }
];

export default function AboutExperience() {
  // Variabel animasi Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-neutral-800 overflow-hidden min-height-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Decorative subtle background elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-200/20 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-200/20 rounded-full filter blur-3xl pointer-events-none" />

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Kolom Kiri: About Me (Spans 5 cols on desktop) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col space-y-6"
            variants={itemVariants}
          >
            <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-semibold w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>About & Experience</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              Membangun Ide <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Menjadi Realitas Digital
              </span>
            </h2>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
              Mahasiswa Informatika di{' '}
              <span className="font-semibold text-neutral-900 border-b-2 border-purple-400/40">
                Universitas Mercu Buana Yogyakarta
              </span>{' '}
              yang bersemangat membangun ekosistem web efisien, dari arsitektur backend yang skalabel hingga pengalaman visual yang interaktif.
            </p>

            <div className="pt-4 border-t border-neutral-200/60">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-neutral-200/60 shadow-sm text-purple-600">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">Pendidikan</h4>
                  <p className="text-xs text-neutral-500">S1 Teknik Informatika — UMBY</p>
                </div>
              </div>
            </div>

            {/* Tambahan visual aesthetic: Quick highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/60 border border-neutral-200/40 backdrop-blur-xs shadow-xs hover:border-purple-200 transition-colors">
                <span className="text-2xl font-bold text-neutral-950">2+</span>
                <p className="text-xs text-neutral-500 mt-1">Tahun Pengalaman Web</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/60 border border-neutral-200/40 backdrop-blur-xs shadow-xs hover:border-indigo-200 transition-colors">
                <span className="text-2xl font-bold text-neutral-950">10+</span>
                <p className="text-xs text-neutral-500 mt-1">Projek Selesai</p>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Experience (Spans 7 cols on desktop) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-8"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-2 w-2 rounded-full bg-purple-600" />
              <h3 className="text-xl font-bold text-neutral-900 tracking-wide uppercase">
                Perjalanan Karier
              </h3>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative pl-2 md:pl-4">
              {/* Garis vertikal timeline */}
              <div className="absolute left-[17px] md:left-[21px] top-2 bottom-2 w-[1.5px] bg-neutral-200/80" />

              {/* Loop data experience */}
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="group relative pl-10 md:pl-12 pb-12 last:pb-0"
                  variants={itemVariants}
                >
                  {/* Dot timeline yang menyala saat hover */}
                  <div className="absolute left-[10px] md:left-[14px] top-1.5 w-[15px] h-[15px] rounded-full border-[3px] border-[#FAF9F6] bg-neutral-300 ring-2 ring-neutral-200 group-hover:ring-purple-400 group-hover:bg-purple-600 group-hover:scale-125 transition-all duration-300 ease-out shadow-[0_0_0_rgba(147,51,234,0)] group-hover:shadow-[0_0_12px_rgba(147,51,234,0.8)] cursor-pointer z-10" />

                  {/* Card Konten */}
                  <div className="flex flex-col space-y-3 bg-white/70 p-6 md:p-7 rounded-2xl border border-neutral-200/50 backdrop-blur-md shadow-xs group-hover:border-purple-200/70 group-hover:bg-white transition-all duration-300 group-hover:shadow-md">
                    {/* Header: Role, Type, & Period */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-neutral-950 group-hover:text-purple-700 transition-colors">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-semibold text-purple-600">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-neutral-500 bg-neutral-100 border border-neutral-200/40 px-2.5 py-1 rounded-full w-fit">
                        <Calendar className="w-3.5 h-3.5 mr-1 text-purple-500" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Deskripsi list */}
                    <ul className="space-y-2.5 mt-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start text-sm text-neutral-600 leading-relaxed">
                          <ChevronRight className="w-4 h-4 mr-2 text-purple-500 shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {exp.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-lg border border-neutral-200/30 group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:border-purple-100/50 transition-colors font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

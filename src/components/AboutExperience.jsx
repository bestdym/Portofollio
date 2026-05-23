import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, ChevronRight, Sparkles } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Wesclic',
    period: 'Des 2024 - Sekarang',
    type: 'Full-time',
    description: [
      'Memimpin pengembangan ekosistem aplikasi web enterprise menggunakan React.js dan Node.js.',
      'Merancang arsitektur database dan RESTful API yang aman serta efisien.',
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
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#ffffff] text-neutral-800 overflow-hidden min-height-screen flex items-center relative">
      {/* Delicate white/light grey visual space */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-neutral-100/50 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neutral-100/50 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Kolom Kiri: About Me (Light Minimalist B&W) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col space-y-6"
            variants={itemVariants}
          >
            <div className="inline-flex items-center space-x-2 bg-neutral-100 border border-neutral-200 text-neutral-800 px-3 py-1.5 rounded-full text-xs font-semibold w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              <span>About & Experience</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 leading-tight font-sans">
              Membangun Ide <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-800 to-neutral-500">
                Menjadi Realitas Digital
              </span>
            </h2>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
              Mahasiswa Informatika di{' '}
              <span className="font-semibold text-neutral-950 border-b-2 border-neutral-350 pb-0.5">
                Universitas Mercu Buana Yogyakarta
              </span>{' '}
              yang bersemangat membangun ekosistem web efisien, dari arsitektur backend yang skalabel hingga pengalaman visual yang interaktif.
            </p>

            <div className="pt-4 border-t border-neutral-200">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-800">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-950">Pendidikan</h4>
                  <p className="text-xs text-neutral-500">S1 Teknik Informatika — UMBY</p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-neutral-50/50 border border-neutral-200 backdrop-blur-xs shadow-xs hover:border-neutral-400 transition-colors">
                <span className="text-2xl font-bold text-neutral-950">2+</span>
                <p className="text-xs text-neutral-500 mt-1">Tahun Pengalaman Web</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-50/50 border border-neutral-200 backdrop-blur-xs shadow-xs hover:border-neutral-400 transition-colors">
                <span className="text-2xl font-bold text-neutral-950">10+</span>
                <p className="text-xs text-neutral-500 mt-1">Projek Selesai</p>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Experience (Timeline Vertikal Minimalis) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-8"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-2 w-2 rounded-full bg-neutral-900" />
              <h3 className="text-xl font-bold text-neutral-950 tracking-wide uppercase">
                Perjalanan Karier
              </h3>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative pl-2 md:pl-4">
              {/* Garis vertikal timeline */}
              <div className="absolute left-[17px] md:left-[21px] top-2 bottom-2 w-[1.5px] bg-neutral-200" />

              {/* Loop data experience */}
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="group relative pl-10 md:pl-12 pb-12 last:pb-0"
                  variants={itemVariants}
                >
                  {/* Dot timeline Hitam-Putih Taktil */}
                  <div className="absolute left-[10px] md:left-[14px] top-1.5 w-[15px] h-[15px] rounded-full border-[3px] border-[#ffffff] bg-neutral-300 ring-2 ring-neutral-200 group-hover:ring-black group-hover:bg-white group-hover:scale-125 transition-all duration-300 ease-out shadow-[0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_0_12px_rgba(0,0,0,0.12)] cursor-pointer z-10" />

                  {/* Card Konten - Light Minimalist Card */}
                  <div className="flex flex-col space-y-3 bg-neutral-50/40 p-6 md:p-7 rounded-2xl border border-neutral-200 backdrop-blur-md shadow-xs group-hover:border-neutral-350 group-hover:bg-white transition-all duration-300 group-hover:shadow-sm">
                    {/* Header: Role, Type, & Period */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-neutral-950 group-hover:text-black transition-colors font-sans">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-semibold text-neutral-600">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-neutral-600 bg-neutral-100 border border-neutral-200 px-2.5 py-1 rounded-full w-fit">
                        <Calendar className="w-3.5 h-3.5 mr-1 text-neutral-700" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Deskripsi list */}
                    <ul className="space-y-2.5 mt-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start text-sm text-neutral-600 leading-relaxed">
                          <ChevronRight className="w-4 h-4 mr-2 text-neutral-800 shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack pills in neutral-light theme */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {exp.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-lg border border-neutral-200/50 group-hover:bg-neutral-200/50 group-hover:text-black group-hover:border-neutral-350 transition-all font-medium"
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

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function ContactSection() {
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

  const itemVariants = {
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
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#ffffff] text-neutral-800 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background neutral light grey blur effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neutral-100/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-neutral-100 border border-neutral-200 text-neutral-850 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs mx-auto"
          >
            <MessageSquare className="w-3.5 h-3.5 text-neutral-900" />
            <span>Hubungi Saya</span>
          </motion.div>

          {/* Headline with black to grey gradient (exactly like the photo!) */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-tight max-w-3xl mx-auto font-sans"
          >
            Let's build something <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-850 to-neutral-500">
              amazing together.
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-neutral-500 max-w-xl mx-auto text-sm md:text-base font-light"
          >
            Saya selalu terbuka untuk kolaborasi proyek menarik, tawaran kerja sama penuh waktu, maupun sekadar berdiskusi seputar arsitektur web modern.
          </motion.p>

          {/* BUTTONS CONTAINER (Light B&W theme) */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-4"
          >
            {/* 1. SEND AN EMAIL (MAILTO) - Large primary card in high-contrast solid black */}
            <a
              href="mailto:dimas.nurdiansyah@example.com"
              className="relative group block rounded-3xl p-[1px] bg-gradient-to-r from-black via-neutral-800 to-neutral-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-neutral-900/10 cursor-pointer overflow-hidden md:col-span-2"
            >
              {/* Internal card content */}
              <div className="relative bg-neutral-950 text-white rounded-[23px] p-6 md:p-8 flex items-center justify-between transition-colors duration-300 group-hover:bg-black">
                <div className="flex items-center space-x-4 text-left">
                  <div className="h-12 w-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Kirim Email Sekarang</span>
                    <span className="text-lg md:text-xl font-bold tracking-tight block">dimas.nurdiansyah@example.com</span>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </a>

            {/* 2. LINKEDIN - Elegant white/grey card */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-neutral-50/50 hover:bg-white border border-neutral-200 p-6 rounded-3xl flex items-center justify-between hover:border-neutral-355 hover:scale-[1.02] hover:shadow-md hover:shadow-neutral-900/5 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-4 text-left">
                <div className="h-11 w-11 rounded-2xl bg-neutral-100 border border-neutral-200/60 flex items-center justify-center text-neutral-900 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block">LinkedIn</span>
                  <span className="text-sm font-bold text-neutral-850 block">Hubungkan Profil</span>
                </div>
              </div>
              <div className="h-8 w-8 rounded-full bg-neutral-150 text-neutral-500 group-hover:bg-neutral-950 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* 3. GITHUB - Elegant white/grey card */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-neutral-50/50 hover:bg-white border border-neutral-200 p-6 rounded-3xl flex items-center justify-between hover:border-neutral-355 hover:scale-[1.02] hover:shadow-md hover:shadow-neutral-900/5 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-4 text-left">
                <div className="h-11 w-11 rounded-2xl bg-neutral-100 border border-neutral-200/60 flex items-center justify-center text-neutral-900 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block">GitHub</span>
                  <span className="text-sm font-bold text-neutral-850 block">Kunjungi Repositori</span>
                </div>
              </div>
              <div className="h-8 w-8 rounded-full bg-neutral-150 text-neutral-500 group-hover:bg-neutral-950 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

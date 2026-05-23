import React, { useState } from 'react';
import AboutExperience from './components/AboutExperience';
import PortfolioAchievements from './components/PortfolioAchievements';
import TechStack3D from './components/TechStack3D';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail, Compass } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-neutral-800 selection:bg-purple-200 selection:text-purple-900 font-sans relative">
      {/* ELEGAN NAVBAR */}
      <motion.nav 
        className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-neutral-200/40 px-6 py-4 md:px-12 lg:px-24 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href="#" className="flex items-center space-x-2 text-xl font-bold tracking-tight text-neutral-900 group">
          <Compass className="w-5 h-5 text-purple-600 group-hover:rotate-45 transition-transform duration-300" />
          <span>Bestdym<span className="text-purple-600">.</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium text-neutral-600 hover:text-purple-600 transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium text-neutral-600 hover:text-purple-600 transition-colors">About & Experience</a>
          <a href="#tech" className="text-sm font-medium text-neutral-600 hover:text-purple-600 transition-colors">Tech Stack</a>
          <a href="#portfolio" className="text-sm font-medium text-neutral-600 hover:text-purple-600 transition-colors">Portfolio</a>
          <a href="#contact" className="text-sm font-medium text-neutral-600 hover:text-purple-600 transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="#contact" 
            className="inline-flex items-center space-x-1.5 text-xs font-semibold bg-neutral-950 text-white hover:bg-purple-700 px-4.5 py-2 rounded-full transition-all duration-300 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-neutral-850 hover:text-purple-600 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 top-[65px] z-40 bg-[#FAF9F6] px-6 py-8 flex flex-col space-y-6 md:hidden border-t border-neutral-200/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a 
              href="#" 
              onClick={toggleMobileMenu} 
              className="text-lg font-medium text-neutral-800 hover:text-purple-600"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={toggleMobileMenu} 
              className="text-lg font-medium text-neutral-800 hover:text-purple-600"
            >
              About & Experience
            </a>
            <a 
              href="#contact" 
              onClick={toggleMobileMenu} 
              className="text-lg font-medium text-neutral-800 hover:text-purple-600"
            >
              Contact
            </a>
            <a 
              href="#contact"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center space-x-2 text-sm font-semibold bg-neutral-950 text-white py-3.5 rounded-full"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative py-24 md:py-36 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Floating gradient visual decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-300/10 rounded-full filter blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl mx-auto flex flex-col items-center space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-neutral-100 border border-neutral-200/50 px-3 py-1 rounded-full text-xs font-medium text-neutral-600">
            <span>Available for new opportunities</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-950 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Bestdym</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 font-light max-w-2xl leading-relaxed">
            Membangun ekosistem web modern dengan keindahan visual dan arsitektur backend yang kokoh.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a 
              href="#about" 
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-sm font-semibold bg-neutral-950 text-white hover:bg-purple-700 px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Explore My Work</span>
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-sm font-semibold bg-white border border-neutral-300 hover:border-purple-600 hover:text-purple-600 px-7 py-3.5 rounded-full transition-all duration-300"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 pt-6 text-neutral-500">
            <a href="https://github.com" target="_blank" className="hover:text-purple-600 transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-purple-600 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="mailto:contact@example.com" className="hover:text-purple-600 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT & EXPERIENCE SECTION */}
      <div id="about">
        <AboutExperience />
      </div>

      {/* TECH STACK SECTION */}
      <div id="tech">
        <TechStack3D />
      </div>

      {/* PORTFOLIO & ACHIEVEMENTS SECTION */}
      <div id="portfolio">
        <PortfolioAchievements />
      </div>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200/50 py-12 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-center text-neutral-500 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2 text-neutral-900 font-bold">
            <Compass className="w-4 h-4 text-purple-600" />
            <span>Bestdym<span className="text-purple-600">.</span></span>
          </div>
          <p>© {new Date().getFullYear()} Bestdym. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

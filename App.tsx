import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import MatrixBackground from './components/MatrixBackground';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-void-900 text-slate-200 min-h-screen relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold-prime origin-left z-50"
        style={{ scaleX }}
      />
      <CustomCursor />
      <MatrixBackground />
      
      <Navbar />
      
      <main>
        <Hero />
        <Portfolio />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
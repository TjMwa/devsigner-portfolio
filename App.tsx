import React from 'react';
import CustomCursor from './components/CustomCursor';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-900 text-slate-200 min-h-screen relative">
      <CustomCursor />
      <MatrixBackground opacity={0.3} />
      
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
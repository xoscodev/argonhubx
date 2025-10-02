import React from 'react';
import { Features } from './components/Features';
import { GridBackground } from './components/GridBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SecuritySection } from './components/SecuritySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { GetStartedSection } from './components/GetStartedSection';
import { Footer } from './components/Footer';
import { CursorTrail } from './components/CursorTrail';

function App() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <CursorTrail />
      <GridBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <SecuritySection />
          <TestimonialsSection />
          <FAQSection />
          <GetStartedSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

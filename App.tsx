import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-beige-50 min-h-screen font-sans selection:bg-stone-200 selection:text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
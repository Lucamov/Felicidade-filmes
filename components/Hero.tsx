import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappNumber = "62995672344";
  const whatsappMessage = "Olá, gostaria de saber mais sobre os filmes da Felicidade Filmes.";

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Casamento cinematográfico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-wide animate-fade-in-up">
          Filmes que transformam <br />
          <span className="italic font-light">o seu dia em eternidade.</span>
        </h1>
        <p className="text-white/90 text-sm md:text-base tracking-[0.2em] uppercase mb-12 font-light">
          Produtora cinematográfica especializada em casamentos
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all duration-300"
        >
          Conversar no WhatsApp
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={24} strokeWidth={1} />
      </div>
    </section>
  );
};
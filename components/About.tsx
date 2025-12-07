import React from 'react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-stone-100">
            <img
              src="https://picsum.photos/800/1000?grayscale"
              alt="Filmmaker em ação"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </FadeIn>

        <FadeIn delay="0.2s">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-stone-900">
              Mais que videomakers, <br />
              somos contadores de histórias.
            </h2>
            <div className="w-12 h-0.5 bg-stone-900"></div>
            <p className="text-stone-600 leading-loose font-light">
              Somos uma produtora especializada em filmes de casamento criados com emoção real, narrativa sensível e edição moderna.
            </p>
            <p className="text-stone-600 leading-loose font-light">
              Fugimos do tradicional e engessado. Buscamos a espontaneidade, o sorriso de canto de boca, a lágrima que cai discreta. Nosso olhar é documental: interferimos o mínimo possível para capturar a verdade do seu dia.
            </p>
            <p className="text-stone-600 leading-loose font-light">
              Acreditamos na elegância da simplicidade e na força dos detalhes. Cada filme é único, editado artesanalmente para refletir a personalidade do casal.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
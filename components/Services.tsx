import React from 'react';
import { FadeIn } from './FadeIn';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { title: "Filme de Casamento Completo", description: "A narrativa completa do seu grande dia, do making of à festa, com edição cinematográfica." },
  { title: "Same Day Edit", description: "A emoção do dia editada e exibida no próprio casamento para surpreender seus convidados." },
  { title: "Trailer / Teaser", description: "Um resumo dinâmico e impactante dos melhores momentos para compartilhar nas redes sociais." },
  { title: "Save The Date", description: "Um filme curto e criativo para anunciar a data do casamento de forma inesquecível." },
  { title: "Pré-Wedding", description: "Ensaio cinematográfico leve e descontraído antes do casamento." },
  { title: "Pós-Wedding", description: "Sessão de filme com os noivos após o casamento, em locações incríveis." },
  { title: "Cobertura de Ensaio", description: "Registro documental e sensível do ensaio fotográfico pré-casamento." },
  { title: "Mini Documentário", description: "Entrevistas e imagens de arquivo contando a história de como vocês se conheceram." },
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-beige-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Nossos Serviços</h2>
          <p className="text-stone-500 font-light max-w-2xl mx-auto">
            Soluções completas para eternizar cada capítulo da sua história.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={`${index * 0.1}s`}>
              <div className="bg-white p-8 h-full border border-stone-100 hover:border-stone-300 transition-colors duration-300 flex flex-col items-center text-center group">
                <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-full bg-beige-100 text-stone-800 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                  <span className="font-serif italic">{index + 1}</span>
                </div>
                <h3 className="font-serif text-xl text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
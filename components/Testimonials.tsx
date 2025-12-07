import React from 'react';
import { Quote } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    name: "Gabriela & Matheus",
    text: "Não temos palavras para descrever. Vocês conseguiram captar a essência do nosso amor de uma forma tão delicada. Choramos toda vez que assistimos.",
    location: "Goiânia, GO"
  },
  {
    name: "Fernanda & Thiago",
    text: "A melhor escolha do nosso casamento. A equipe foi super discreta, nem percebemos que estavam gravando, e o resultado foi um filme de cinema!",
    location: "Pirenópolis, GO"
  },
  {
    name: "Juliana & André",
    text: "Sensibilidade pura. O vídeo não é apenas um registro, é uma obra de arte. Obrigado por eternizarem nosso dia com tanto carinho.",
    location: "Brasília, DF"
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-beige-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-serif text-stone-900 mb-16">Histórias Reais</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <FadeIn key={index} delay={`${index * 0.1}s`}>
              <div className="bg-white p-8 md:p-10 shadow-sm border border-stone-100 h-full flex flex-col items-center text-center">
                <Quote className="text-stone-300 mb-6" size={32} />
                <p className="text-stone-600 italic font-light mb-6 leading-relaxed">
                  "{item.text}"
                </p>
                <div className="mt-auto">
                  <h4 className="font-serif text-lg text-stone-900">{item.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">{item.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
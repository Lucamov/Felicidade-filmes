import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Como funciona o processo de contratação?",
    answer: "Nosso processo é simples e pessoal. Primeiro, conversamos para entender o perfil do casal e os detalhes do evento. Após a escolha do pacote, assinamos o contrato digital e reservamos a data mediante um sinal de entrada."
  },
  {
    question: "Vocês viajam para outros estados?",
    answer: "Sim! Amamos contar histórias em qualquer lugar do mundo. Para casamentos fora de nossa base (Goiânia), acrescentamos os custos de deslocamento e hospedagem ao orçamento."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Nosso prazo médio é de 60 a 90 dias úteis após o casamento. Prezamos por uma edição artesanal e cuidadosa, por isso dedicamos tempo a cada filme."
  },
  {
    question: "Como é feita a escolha das músicas?",
    answer: "A trilha sonora é a alma do filme. Nós fazemos uma curadoria baseada no gosto musical de vocês e na 'vibe' do casamento. Usamos músicas licenciadas para garantir que o vídeo não seja bloqueado nas redes sociais."
  },
  {
    question: "Há possibilidade de revisões no vídeo?",
    answer: "Sim, queremos que vocês amem o resultado final. O contrato prevê uma rodada de revisões para ajustes pontuais que não alterem a estrutura narrativa principal."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl font-serif text-stone-900 mb-12">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-stone-200">
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-serif text-stone-800 pr-8">{item.question}</span>
                <span className="text-stone-400">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-stone-600 font-light leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { FadeIn } from './FadeIn';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 md:py-32 bg-beige-50 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-8">Nosso Propósito</h2>
          <div className="font-serif text-2xl md:text-3xl leading-relaxed text-stone-800 space-y-8">
            <p>
              “Existem dias que passam rápido demais. Momentos que escorrem entre risadas, abraços e olhares que só acontecem uma vez na vida. A Felicidade Filmes nasceu do desejo de segurar o tempo pelas mãos — mesmo que por alguns minutos — e transformar instantes em eternidade.
            </p>
            <p>
              Acreditamos que um casamento não é apenas um evento.
              <br />
              É a história viva de duas pessoas, de famílias que se unem e futuros que se encontram.
              <br />
              Por isso, nosso propósito não é apenas filmar — é sentir junto, registrar o que não é dito e eternizar o que o coração não quer esquecer.
            </p>
            <p className="italic text-stone-600">
              Criamos filmes com linguagem cinematográfica, ritmo moderno, estética delicada e emoção verdadeira.
              <br />
              A Felicidade Filmes existe para transformar amor em memória.”
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
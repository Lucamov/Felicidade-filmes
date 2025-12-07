import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappNumber = "62995672344";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer id="contato" className="bg-stone-900 text-beige-50">
      {/* Final CTA */}
      <div className="py-24 px-6 text-center border-b border-stone-800">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Prontos para transformar o seu dia em eternidade?
          </h2>
          <div className="pt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-beige-50 text-stone-900 px-10 py-4 text-sm tracking-widest uppercase hover:bg-stone-200 transition-colors duration-300"
            >
              Falar com nossa equipe
            </a>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-xl font-serif mb-6">Felicidade Filmes</h3>
          <p className="text-stone-400 font-light text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Produtora cinematográfica especializada em casamentos. Transformamos instantes em memórias eternas.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6">Contato</h3>
          <ul className="space-y-4 text-stone-400 font-light text-sm">
             <li className="flex items-center justify-center md:justify-start gap-3">
              <MessageCircle size={16} />
              <a href={whatsappLink} className="hover:text-white transition-colors">(62) 99567-2344</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Mail size={16} />
              <a href="mailto:contato@felicidadefilmes.com" className="hover:text-white transition-colors">contato@felicidadefilmes.com</a>
            </li>
             <li className="flex items-center justify-center md:justify-start gap-3">
              <Instagram size={16} />
              <a href="#" className="hover:text-white transition-colors">@felicidadefilmes</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6">Localização</h3>
          <p className="text-stone-400 font-light text-sm">
            Goiânia, Goiás<br />
            Disponível para todo o Brasil.
          </p>
        </div>
      </div>

      <div className="py-6 border-t border-stone-800 text-center">
        <p className="text-stone-600 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Felicidade Filmes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
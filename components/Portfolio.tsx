import React from 'react';
import { Play } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { PortfolioItem } from '../types';

const videos: PortfolioItem[] = [
  { id: 1, title: "Ana & Lucas", category: "Casamento no Campo", imageUrl: "https://picsum.photos/800/500?grayscale&random=1" },
  { id: 2, title: "Mariana & Pedro", category: "Destination Wedding", imageUrl: "https://picsum.photos/800/500?grayscale&random=2" },
  { id: 3, title: "Beatriz & Rafael", category: "Elopement", imageUrl: "https://picsum.photos/800/500?grayscale&random=3" },
  { id: 4, title: "Carla & João", category: "Clássico", imageUrl: "https://picsum.photos/800/500?grayscale&random=4" },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-stone-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-beige-50">Portfólio Selecionado</h2>
          <p className="text-stone-400 font-light tracking-wide uppercase text-sm">
            Assista aos nossos filmes e sinta a experiência Felicidade Filmes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <FadeIn key={video.id}>
              <div className="group relative aspect-video overflow-hidden cursor-pointer bg-stone-800">
                <img
                  src={video.imageUrl}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Play fill="white" className="text-white ml-1" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-serif text-white">{video.title}</h3>
                  <p className="text-sm text-stone-300 uppercase tracking-widest">{video.category}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm border-b border-stone-500 pb-1 text-stone-400 hover:text-white hover:border-white transition-colors">
              Ver mais no Instagram
           </a>
        </div>
      </div>
    </section>
  );
};
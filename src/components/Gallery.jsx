import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 3, src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 4, src: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 5, src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Postales del mundo
          </h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Inspirate con algunos de los lugares increíbles que podés conocer con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${img.colSpan} ${img.rowSpan}`}
            >
              <img 
                src={img.src} 
                alt="Galería Talita Tur" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/talitatur84" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
          >
            Ver más en nuestro Instagram
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

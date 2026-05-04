import React from 'react';
import { motion } from 'framer-motion';

import barilocheImg from '../assets/bariloche.jpg';
import mendozaImg from '../assets/mendoza.jpg';
import iguazuImg from '../assets/cataratas del iguazu.jpg';
import ushuaiaImg from '../assets/usuhaia.jpg';
import saltaImg from '../assets/salta.jpg';
import buziosImg from '../assets/buzios.jpg';

const destinations = [
  {
    id: 1,
    name: 'Bariloche',
    description: 'Montañas, lagos y el mejor chocolate. Ideal para desconectar.',
    image: barilocheImg,
    price: 'Consultar',
  },
  {
    id: 2,
    name: 'Mendoza',
    description: 'Ruta del vino, montañas y gastronomía de primer nivel.',
    image: mendozaImg,
    price: 'Consultar',
  },
  {
    id: 3,
    name: 'Cataratas del Iguazú',
    description: 'Una de las 7 maravillas del mundo natural. Pura energía.',
    image: iguazuImg,
    price: 'Consultar',
  },
  {
    id: 4,
    name: 'Ushuaia',
    description: 'El fin del mundo te espera con paisajes de película.',
    image: ushuaiaImg,
    price: 'Consultar',
  },
  {
    id: 5,
    name: 'Salta',
    description: 'Cerros de colores, peñas y la mejor calidez norteña.',
    image: saltaImg,
    price: 'Consultar',
  },
  {
    id: 6,
    name: 'Buzios, Brasil',
    description: 'Playas paradisíacas y aguas cristalinas a un vuelo de distancia.',
    image: buziosImg,
    price: 'Consultar',
  }
];

const Destinations = () => {
  return (
    <section id="destinos" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Destinos más elegidos
          </h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Prepará las valijas. Elegimos los mejores lugares para que tu única preocupación sea disfrutar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-primary-dark">{dest.name}</h3>
                </div>
                <p className="text-gray-text mb-6">
                  {dest.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-text/70 bg-gray-100 px-3 py-1 rounded-full">
                    {dest.price}
                  </span>
                  <a 
                    href="#contacto"
                    className="text-primary font-medium hover:text-primary-dark flex items-center gap-1 group/btn"
                  >
                    Ver detalles
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Coffee, Sunrise, Utensils } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Aventura',
    description: 'Trekking, rafting y expediciones para los que buscan adrenalina pura.',
    icon: Compass,
    color: 'text-primary',
    bg: 'bg-primary-light',
  },
  {
    id: 2,
    title: 'Relax',
    description: 'Hoteles con spa, playas tranquilas y desconexión total de la rutina.',
    icon: Sunrise,
    color: 'text-accent',
    bg: 'bg-green-50', // Tailwind's light green
  },
  {
    id: 3,
    title: 'Cultura',
    description: 'Recorridos históricos, museos y contacto directo con las costumbres locales.',
    icon: Coffee,
    color: 'text-primary-dark',
    bg: 'bg-blue-50',
  },
  {
    id: 4,
    title: 'Gastronomía',
    description: 'Rutas del vino, degustaciones y los mejores platos típicos de cada región.',
    icon: Utensils,
    color: 'text-accent',
    bg: 'bg-green-50',
  }
];

const Experiences = () => {
  return (
    <section id="experiencias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Experiencias a tu medida
            </h2>
            <p className="text-lg text-gray-text mb-8">
              Entendemos que no todos viajan por la misma razón. Por eso armamos propuestas enfocadas en lo que de verdad tenés ganas de hacer.
            </p>
            <a 
              href="#contacto"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-full transition-colors"
            >
              Armá tu viaje a medida
            </a>
          </div>

          {/* Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${exp.bg} p-8 rounded-3xl hover:shadow-md transition-shadow`}
              >
                <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm ${exp.color}`}>
                  <exp.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{exp.title}</h3>
                <p className="text-gray-text">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experiences;

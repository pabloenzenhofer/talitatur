import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Map, Clock } from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: 'Atención personalizada',
    description: 'Te escuchamos y armamos cada detalle pensando en lo que te gusta.',
    icon: HeartHandshake,
  },
  {
    id: 2,
    title: 'Seguridad en tu viaje',
    description: 'Trabajamos con operadores de confianza para que viajes tranquilo.',
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: 'Conocimiento local',
    description: 'Conocemos los destinos desde adentro, te pasamos los mejores tips.',
    icon: Map,
  },
  {
    id: 4,
    title: 'Soporte 24/7',
    description: 'Estamos con vos desde que subís al avión hasta que volvés a casa.',
    icon: Clock,
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-16">
          ¿Por qué elegir Talita Tur?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 text-primary">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-text text-center">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

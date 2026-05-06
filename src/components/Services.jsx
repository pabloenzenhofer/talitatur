import React from 'react';
import { motion } from 'framer-motion';
import { Map, PlaneTakeoff, Package, Headset } from 'lucide-react';

const servicesList = [
  {
    id: 1,
    title: 'Viajes internacionales, nacionales y regionales',
    description: 'Descubrí el mundo o destinos cercanos con opciones adaptadas a tu presupuesto.',
    icon: Map,
  },
  {
    id: 2,
    title: 'Hoteles y vuelos',
    description: 'Encontramos el alojamiento ideal y conseguimos las mejores tarifas aéreas.',
    icon: PlaneTakeoff,
  },
  {
    id: 3,
    title: 'Paquetes a medida',
    description: 'Armamos tu viaje personalizado, de principio a fin, según tus fechas y preferencias.',
    icon: Package,
  },
  {
    id: 4,
    title: 'Asesoramiento 24/7 y videollamadas',
    description: 'Te acompañamos en todo momento. Conocenos y resolvé tus dudas con total confianza.',
    icon: Headset,
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
          Nuestros servicios
        </h2>
        <p className="text-lg text-gray-text max-w-2xl mx-auto mb-16">
          En Talitatur te ofrecemos todo lo que necesitás para organizar tu viaje de forma simple, segura y al mejor precio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-light/50 rounded-full flex items-center justify-center mb-6 text-primary">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-text text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Map, Building, PlaneTakeoff, Package, Clock, Video } from 'lucide-react';

const servicesList = [
  {
    id: 1,
    title: 'Paquetes internacionales',
    description: 'Viajá por el mundo con opciones adaptadas a tu presupuesto.',
    icon: Plane,
  },
  {
    id: 2,
    title: 'Viajes nacionales y regionales',
    description: 'Descubrí destinos cercanos con propuestas flexibles y accesibles.',
    icon: Map,
  },
  {
    id: 3,
    title: 'Hoteles al mejor precio',
    description: 'Encontramos el alojamiento ideal según tu estilo de viaje.',
    icon: Building,
  },
  {
    id: 4,
    title: 'Vuelos económicos',
    description: 'Te ayudamos a conseguir las mejores tarifas y combinaciones.',
    icon: PlaneTakeoff,
  },
  {
    id: 5,
    title: 'Paquetes a medida',
    description: 'Armamos tu viaje personalizado, según tus fechas y preferencias.',
    icon: Package,
  },
  {
    id: 6,
    title: 'Asesoramiento 24/7',
    description: 'Te acompañamos en todo momento, antes y durante tu viaje.',
    icon: Clock,
  },
  {
    id: 7,
    title: 'Atención por videollamada',
    description: 'Conocenos y resolvé tus dudas con total confianza.',
    icon: Video,
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

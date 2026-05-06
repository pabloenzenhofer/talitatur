import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Headset, ShieldCheck } from 'lucide-react';
import marielImg from '../assets/foto_mariel.png';

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Quiénes Somos */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Quiénes somos
            </h2>
            <div className="space-y-6 text-gray-text text-lg">
              <p>
                En <strong>Talitatur</strong> hacemos que viajar sea simple, accesible y 100% diseñado para vos. Somos una agencia que combina la agilidad de la planificación moderna con la cercanía y calidez del trato humano.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                    <Plane size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark">Viajes a tu medida</h4>
                    <p className="text-base">Paquetes internacionales, nacionales y regionales con los mejores precios del mercado.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                    <Headset size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark">Asesoramiento 24/7</h4>
                    <p className="text-base">Atención personalizada en cada paso: vuelos, hoteles y resolución de inquietudes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark">Transparencia total</h4>
                    <p className="text-base">Videollamadas para planificar juntos y viajar con 100% de confianza y seguridad.</p>
                  </div>
                </div>
              </div>

              <p className="font-medium text-primary-dark pt-4 border-t border-gray-200">
                Más que venderte un viaje, te acompañamos para que tu única preocupación sea disfrutar.
              </p>
            </div>
          </motion.div>

          {/* Sobre Mí */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 bg-gray-light p-8 md:p-10 rounded-3xl"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
              <img 
                src={marielImg} 
                alt="Mariel Tomé" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white flex-shrink-0"
              />
              <div className="flex flex-col justify-center sm:mt-4 md:mt-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
                  Sobre mí
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-text text-lg">
              <p>
                Soy <strong>Mariel Tomé</strong>, Licenciada en Turismo y Hotelería y el corazón detrás de Talitatur.
              </p>
              <p>
                Creé este espacio movida por una gran pasión: transformar tus sueños de viaje en experiencias reales e inolvidables.
              </p>
              <p>
                Mi propósito es acompañarte en cada paso, brindándote todo mi conocimiento para que viajes con la tranquilidad de estar en buenas manos. Quiero que tu única preocupación sea disfrutar al máximo y volver con las mejores historias para contar.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

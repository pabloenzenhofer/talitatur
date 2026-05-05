import React from 'react';
import { motion } from 'framer-motion';

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
            <div className="space-y-4 text-gray-text text-lg">
              <p>
                En <strong>Talitatur</strong> somos una agencia de viajes virtual dedicada a hacer que viajar sea más simple, accesible y personalizado. Nos especializamos en viajes internacionales, nacionales y regionales, adaptándonos a las necesidades de cada cliente.
              </p>
              <p>
                Nuestro compromiso es ofrecer los mejores precios del mercado sin sacrificar calidad. Te asesoramos de forma personalizada las 24 horas, ayudándote a encontrar vuelos, hoteles económicos y a diseñar paquetes a tu medida.
              </p>
              <p>
                Sabemos que confiar en una agencia online puede generar dudas, por eso en Talitatur priorizamos la transparencia y el trato cercano. Ofrecemos la posibilidad de realizar videollamadas para que puedas conocernos y resolver cualquier inquietud con total confianza.
              </p>
              <p className="font-medium text-primary-dark">
                Más que vender viajes, buscamos acompañarte en cada paso para que disfrutes una experiencia segura, clara y sin complicaciones.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              Sobre mí
            </h2>
            <div className="space-y-4 text-gray-text text-lg">
              <p>
                Soy <strong>Mariel Tomé</strong>, Licenciada en Turismo y Hotelería y creadora de Talitatur.
              </p>
              <p>
                Me especializo en ayudarte a planificar viajes internacionales, nacionales y regionales al mejor precio, con un enfoque totalmente personalizado. Mi objetivo es que cada cliente pueda viajar de forma simple, segura y adaptada a sus necesidades.
              </p>
              <p>
                A través de Talitatur, brindo asesoramiento 24/7, ayudándote a encontrar vuelos, hoteles y paquetes a medida, siempre buscando las mejores opciones del mercado.
              </p>
              <p>
                Nació Talitatur con la necesidad y la pasión de brindarles todo el conocimiento que estudié en la carrera y porque me gusta ayudar al cliente a que tenga su mejor experiencia en el viaje y se quede con el mejor recuerdo que tenga para contar.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

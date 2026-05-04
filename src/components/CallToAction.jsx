import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          ¿Listo para armar las valijas?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary-light mb-10 max-w-2xl mx-auto"
        >
          Escribinos hoy y empecemos a darle forma al viaje que siempre soñaste. Presupuestos sin cargo.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="#contacto" 
            className="inline-block bg-white text-primary-dark hover:bg-gray-light px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl active:scale-95"
          >
            Empezá a planificar hoy
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;

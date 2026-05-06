import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import logoImg from '../assets/imagen talita tur.png';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer id="contacto" className="bg-primary-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6 bg-white/10 p-2 rounded-xl w-fit">
              <img src={logoImg} alt="Talita Tur Logo" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/70 mb-6">
              Agencia de viajes dedicada a crear experiencias inolvidables, adaptadas a tu estilo y presupuesto.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/marieltome26" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                <InstagramIcon />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navegación</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-white/70 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#destinos" className="text-white/70 hover:text-white transition-colors">Destinos</a></li>
              <li><a href="#experiencias" className="text-white/70 hover:text-white transition-colors">Experiencias</a></li>
              <li><a href="#contacto" className="text-white/70 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light mt-1 flex-shrink-0" />
                <span className="text-white/70">La RIOJA 459 8VO A – Paraná Entre Ríos</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-light flex-shrink-0" />
                <span className="text-white/70">3433001251</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-light flex-shrink-0" />
                <span className="text-white/70">talitatur85@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Suscribite para recibir las mejores ofertas y tips de viaje.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                required
              />
              <button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Suscribirme
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Talita Tur. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

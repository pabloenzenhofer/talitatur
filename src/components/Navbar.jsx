import React, { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Destinos', href: '#destinos' },
    { name: 'Experiencias', href: '#experiencias' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Plane className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl tracking-tight text-primary-dark">
              Talita Tur
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-text hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contacto"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
            >
              Planificá tu viaje
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-text hover:text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-text hover:text-primary hover:bg-primary-light/50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-primary text-white px-4 py-3 rounded-full font-medium shadow-md"
              >
                Planificá tu viaje
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

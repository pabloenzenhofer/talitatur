import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="font-sans antialiased text-gray-text overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Experiences />
        <WhyChooseUs />
        <Gallery />
        <CallToAction />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import './App.css';
import './background.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import ToBeDefined from './components/ToBeDefined';
import Languages from './components/Languages';
import Services from './components/Services';
import Pricings from './components/Pricings';
import Testimonials from './components/Testimonials';
import Calendly from './components/Calendly';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const numElements = 30;
    const container = document.createElement('div');
    container.className = 'floating-elements-container';
    document.body.appendChild(container);

    for (let i = 0; i < numElements; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      container.appendChild(element);
    }

    const elements = document.querySelectorAll('.floating-element');
    elements.forEach(element => {
      const size = Math.random() * 10 + 5;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.top = `${Math.random() * 100}vh`;
      element.style.left = `${Math.random() * 100}vw`;
      element.style.animationDuration = `${Math.random() * 5 + 2}s`;
      element.style.animationDelay = `${Math.random() * 5}s`;
    });
  }, []);

  return (
    // <div className="!font-sans bg-[#09090B]">
    <div className="App">
      <div className="animated-background"></div>
      <Header />
      <main>
        <div id="jumbotron">
          <Jumbotron />
        </div>
        <ToBeDefined />
        <Languages />
        <div id="services">
          <Services />
        </div>
        <div id="tarifs">
          <Pricings />
        </div>
        <div id="temoignages">
          <Testimonials />
        </div>
        <div id="calendly">
          <Calendly />
        </div>
        <div id="faq">
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

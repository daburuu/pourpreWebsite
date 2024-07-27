import logo from './logo.svg';
import './App.css';
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
  return (
    <div className="!font-sans bg-[#09090B]">
      <Header></Header>
      <main>
        <Jumbotron></Jumbotron>
        <ToBeDefined></ToBeDefined>
        <Languages></Languages>
        <div id="services">
          <Services></Services>
        </div>
        <div id="tarifs">
          <Pricings></Pricings>
        </div>
        <div id="temoignages">
          <Testimonials></Testimonials>
        </div>
        <div id="calendly">
          <Calendly></Calendly>
        </div>
        <div id="faq">
          <Faq></Faq>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import ToBeDefined from './components/ToBeDefined';
import Languages from './components/Languages';
import Services from './components/Services';

function App() {
  return (
    <div className="!font-sans bg-gray-950">
      <Header></Header>
      <main>
        <Jumbotron></Jumbotron>
        <ToBeDefined></ToBeDefined>
        <Languages></Languages>
        <div id="services">
          <Services></Services>
        </div>
      </main>
    </div>
  );
}

export default App;

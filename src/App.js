import "./App.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from "./composant/About";
import Contact from "./composant/Contact";
import Temoignage from "./composant/Temoignage";
import Realisation from "./composant/Realisation";
import Home from "./composant/Home";

function App() {
  useEffect(() => {
    const element = document.querySelector("main");

    const handleWheel = (event) => {
      event.preventDefault();
      element.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      });
    };

    element.addEventListener('wheel', handleWheel);

    // Clean up function to remove the event listener
    return () => {
      element.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="App">
      <main>
        <Home />
        <About />
        <Realisation />
        <Temoignage />
        <Contact />
       
        
      </main>
    </div>
  );
}

export default App;
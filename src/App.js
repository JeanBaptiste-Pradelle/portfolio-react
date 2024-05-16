import './App.css';
import Home from './composant/home';
import About from './composant/About';
import Contact from './composant/Contact';
import Temoignage from './composant/Temoignage';
import Realisation from './composant/Realisation';


const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});


function App() {
  return (
    <body>
    <div className="App">
      <main>
       <Home/>
      <About />
      <Contact />
      <Temoignage />
      <Realisation />
     
      </main>
    </div>
    </body>
  );
}

export default App;

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./composant/Home"
import About from "./composant/About";
import Contact from "./composant/Contact";
import Temoignage from "./composant/Temoignage";
import Realisation from "./composant/Realisation";


const element =document.querySelector("main")
element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
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
        </main>{" "}
      </div>{" "}
    </body>
  );
}

export default App;

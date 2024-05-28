import "./App.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./composant/About";
import Contact from "./composant/Contact";
import Temoignage from "./composant/Temoignage";
import Realisation from "./composant/Realisation";
import Home from "./composant/Home";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");

      // ScrollTrigger for horizontal scrolling
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=300%",
        },
      });

      // ScrollTrigger for Realisation section
      ScrollTrigger.create({
        trigger: ".realisation",
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: true,
        scrub: true,
      });

      // Function to scroll to specific panels using ScrollToPlugin
      const scrollToPanel = (index) => {
        gsap.to(window, {
          scrollTo: { y: slider.current, autoKill: false, offsetX: index * window.innerWidth },
          duration: 1,
          ease: "power2.inOut",
        });
      };

      // Event listeners for navbar links
      document.querySelector(".nav-link-home").addEventListener("click", () => scrollToPanel(0));
      document.querySelector(".nav-link-about").addEventListener("click", () => scrollToPanel(1));
      document.querySelector(".nav-link-realisation").addEventListener("click", () => scrollToPanel(2));
      document.querySelector(".nav-link-temoignage").addEventListener("click", () => scrollToPanel(3));
      document.querySelector(".nav-link-contact").addEventListener("click", () => scrollToPanel(4));
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="bg-danger">
        <nav className="barre navbar-expand-lg position-fixed top-0 end-0 m-3 fs-5 fw-bold text-black z-3">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item p-1">
                  <a className="nav-link nav-link-home" href="#Acceuil">ACCUEIL</a>
                </li>
                <li className="nav-item p-1 px-2">
                  <a className="nav-link nav-link-about" href="#aPropros">A PROPOS</a>
                </li>
                <li className="nav-item p-1 px-2">
                  <a className="nav-link nav-link-realisation" href="#real">REALISATION</a>
                </li>
                <li className="nav-item p-1 px-2">
                  <a className="nav-link nav-link-temoignage" href="#temoin">TEMOIGNAGE</a>
                </li>
                <li className="nav-item p-1 px-2">
                  <a className="nav-link nav-link-contact" href="#contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="App" ref={component} style={{ overflowX: 'hidden', fontFamily: 'sans-serif', margin: 0 }}>
        <main style={{ overflow: 'hidden' }}>
          <section ref={slider} className="d-flex w-100">
            <div id="home" className="panel d-flex justify-content-center align-items-center vh-100 vw-100 flex-shrink-0">
              <Home />
            </div>
            <div id="about" className="panel d-flex justify-content-center align-items-center vh-100 vw-100 flex-shrink-0">
              <About />
            </div>
            <div id="realisation" className="panel d-flex justify-content-center align-items-center vh-100 vw-100 flex-shrink-0 realisation">
              <Realisation />
            </div>
            <div id="temoignage" className="panel d-flex justify-content-center align-items-center vh-100 vw-100 flex-shrink-0">
              <Temoignage />
            </div>
            <div id="contact" className="panel d-flex justify-content-center align-items-center vh-100 vw-100 flex-shrink-0">
              <Contact />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
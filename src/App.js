
import "./App.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
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
    const handleResize = () => {
      if (window.innerWidth > 576) {
        let ctx = gsap.context(() => {
          let panels = gsap.utils.toArray(".panel");

          // ScrollTrigger pour defilement horizontal
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
        }, component);

        return () => ctx.revert();
      } else {
        //Supprimler le scroll horizontal quand >576px
        gsap.killTweensOf(window);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };

    handleResize(); // Check initial
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => window.removeEventListener("resize", handleResize); // Nettoyer le event listener
  }, []);

  const handleNavigation = (id) => {
    gsap.to(window, { duration: 1, scrollTo: `#${id}` });
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-dark fixed-top bg-gradient d-md-none">
          <div className="container-fluid">
            <button className="navbar-toggler btn btn-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end h-50 w-50 bg-gradient" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="Menu">Menu</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active text-black" aria-current="page" href="#" onClick={() => handleNavigation('home')} data-bs-dismiss="offcanvas">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#" onClick={() => handleNavigation('about')} data-bs-dismiss="offcanvas">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#" onClick={() => handleNavigation('realisation')} data-bs-dismiss="offcanvas">Realisation</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#" onClick={() => handleNavigation('temoignage')} data-bs-dismiss="offcanvas">Temoignage</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#" onClick={() => handleNavigation('contact')} data-bs-dismiss="offcanvas">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        className="App"
        ref={component}
        style={{ overflowX: "hidden", fontFamily: "sans-serif", margin: 0 }}
      >
        <main style={{ overflow: "hidden" }}>
          <section
            ref={slider}
            className="d-flex w-100 flex-column flex-md-row"
          >
            <div
              id="home"
              className="panel d-flex justify-content-center align-items-center vh-100 vw-100 flex-shrink-0"
            >
              <Home />
            </div>
            <div
              id="about"
              className="panel d-flex justify-content-center align-items-center vh-100 vw-100 flex-shrink-0"
            >
              <About />
            </div>
            <div
              id="realisation"
              className="panel d-flex justify-content-center align-items-center vh-100 vw-100 flex-shrink-0 realisation"
            >
              <Realisation />
            </div>
            <div
              id="temoignage"
              className="panel d-flex justify-content-center align-items-center vh-100 vw-100 flex-shrink-0"
            >
              <Temoignage />
            </div>
            <div
              id="contact"
              className="panel d-flex justify-content-center align-items-center vh-100 vw-100 flex-shrink-0"
            >
              <Contact />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

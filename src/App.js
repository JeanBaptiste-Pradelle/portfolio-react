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
    const handleResize = () => {
      if (window.innerWidth > 576) {
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
        }, component);

        return () => ctx.revert();
      } else {
        // Remove horizontal scroll animation if screen width is less than or equal to 576px
        gsap.killTweensOf(window);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
  }, []);

  return (
    <>
      <div>
        <nav className="barre navbar navbar-expand-lg position-fixed top-0 end-0 m-3 fs-5 fw-bold  z-3">
          <div className="container-fluid">
            <button
              className="navbar-toggler  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item p-1 ">
                  <a
                    id="Nav1"
                    className="nav-link nav-link-home t"
                    href="#home"
                  >
                    ACCUEIL
                  </a>
                </li>
                <li className="nav-item p-1 px-2">
                  <a className="nav-link nav-link-about " href="#about">
                    A PROPOS
                  </a>
                </li>
                <li className="nav-item p-1 px-2">
                  <a
                    className="nav-link nav-link-realisation  "
                    href="#realisation"
                  >
                    REALISATION
                  </a>
                </li>
                <li className="nav-item p-1 px-2">
                  <a
                    className="nav-link nav-link-temoignage "
                    href="#temoignage"
                  >
                    TEMOIGNAGE
                  </a>
                </li>
                <li className="nav-item p-1 px-2">
                  <a className="nav-link nav-link-contact " href="#contact">
                    CONTACT
                  </a>
                </li>
              </ul>
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

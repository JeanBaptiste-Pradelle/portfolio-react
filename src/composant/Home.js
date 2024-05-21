import React, { useEffect } from "react";
import "../css/home.css";
import gsap from "gsap";
function Home() {
  useEffect(() => {
    gsap.to(".presentation", {
		startAt: {opacity:0},
      opacity: 1,
      x: 100,
	
      duration: 5,
    });
  });

  return (
    <section id="Acceuil">
      <div className="bg-danger">
        <nav className="barre navbar-expand-lg  position-fixed top-0 end-0 m-3 fs-5 fw-bold text-black">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item p-1">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#Acceuil"
                  >
                    ACCUEIL
                  </a>
                </li>
                <li className="nav-item p-1 px-2">
                  <a className="nav-link" href="#aPropros">
                    {" "}
                    A PROPROS
                  </a>
                </li>
                <li className="nav-item p-1 px-2">
                  <a className="nav-link" href="#real">
                    {" "}
                    REALISATION
                  </a>
                </li>
                <li className="nav-item p-1 px-2">
                  <a className="nav-link " href="#temoin">
                    {" "}
                    TEMOIGNAGE{" "}
                  </a>
                </li>
                <li className="nav-item p-1 px-2">
                  <a className="nav-link" href="#contact">
                    {" "}
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className=" homeDiv d-flex flex-column justify-content-center align-content-center text-black  ">
        <span className="presentation col-10 mx-auto">
          HI I’m Jean-Baptiste a Full-Stack web developper based in
          Clermont-Ferrand, France. Blablablalblabla (on hover change background
          color)
        </span>
      </div>
    </section>
  );
}

export default Home;

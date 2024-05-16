import React from "react";
import "../css/home.css";

function Home() {
  return (
    <section>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark position-fixed top-0 start-0">
          <div className="container-fluid">
            <a className="navbar-brand display-1 text-light Dark fs-3" href="#">
              AC <i className="fa-solid fa-bolt-lightning text-danger"></i>DC
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item"></li>
                <li className="nav-item">
                  <a className="nav-link text-danger" href="#Carousel1">
                    Accueil
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-danger" href="#menbreGroupe">
                    Membres
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-danger" href="#disco">
                    Discographie
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-danger" href="#concert">
                    Agenda des concerts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-danger" href="#message">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Home;

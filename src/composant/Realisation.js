import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { EaselPlugin } from "gsap/EaselPlugin";
import "../css/Realisation.css";

gsap.registerPlugin(EaselPlugin);
function Realisation() {
  useEffect(() => {
    gsap.fromTo(
      ".realTitre",
      { x: -500, ease: "power4.out" },
      { x: 100, duration: 1.8 }
    );
  });
  return (
    <section
      id="real"
      className="realsection w-100 h-100 d-flex flex-column align-items-center justify-content-center justify-self-center"
    >
      <div className="title-container w-100 mb-5 d-flex justify-content-center justify-self-center">
        <h1 className=" realTitre mx-auto my-2 p-2 w-100 display-5 text-center text-white ">
          MES PROJETS
        </h1>
      </div>
      <div className="projet1 d-flex col-10 border border-4 border-black py-2  px-4 mx-auto my-2 ">
        <span className="fs-5 col-5 mx-auto p-2">
          {" "}
          <span className="fw-bold"> Myuka: </span>
          <br />
          Réalisation d'un site web type yuka en utilisant l'API libre
          d'openfactfood <br /> Technologie utilisé: React/Bootstrap 5.3/HTML
          5/CSS
        </span>
        <span className="fs-5 mx-auto py-2  px-4 ">
          {" "}
          <a
            href="https://jeanba63.github.io/myuka/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            Myuka
          </a>
        </span>
        <span className="fs-5 mx-auto py-2  px-4 ">
          {" "}
          Année du projet: 2024
        </span>{" "}
      </div>

      <div className="projet2 d-flex col-10 border border-4 border-black py-2  px-4 mx-auto my-2   ">
        <span className="fs-5 col-5 mx-auto py-2  px-4 ">
          {" "}
          <span className="fw-bold"> Projet 2:</span> <br /> Descriptif du
          projet <br /> Technologie utilisé
        </span>
        <span className="fs-5 mx-auto py-2  px-4 "> Photo du projet +lien</span>
        <span className="fs-5 mx-auto py-2  px-4 "> Année du projet</span>{" "}
      </div>

      <div className="projet3 d-flex col-10 border border-4 border-black py-2  px-4 mx-auto my-2   ">
        <span className="fs-5 col-5 mx-auto py-2  px-4 ">
          {" "}
          <span className="fw-bold"> Projet 3:</span> <br /> Descriptif du
          projet <br /> Technologie utilisé
        </span>
        <span className="fs-5 mx-auto py-2  px-4 "> Photo du projet +lien</span>
        <span className="fs-5 mx-auto py-2  px-4 "> Année du projet</span>{" "}
      </div>

      <div className="projet4 d-flex col-10 border border-4 border-black py-2  px-4 mx-auto my-2   ">
        <span className="fs-5 col-5 mx-auto py-2  px-4 ">
          {" "}
          <span className="fw-bold"> Projet 4:</span> <br /> Descriptif du
          projet <br /> Technologie utilisé
        </span>
        <span className="fs-5 mx-auto py-2  px-4 "> Photo du projet +lien</span>
        <span className="fs-5 mx-auto py-2  px-4 "> Année du projet</span>{" "}
      </div>
    </section>
  );
}

export default Realisation;

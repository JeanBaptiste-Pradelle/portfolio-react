import React from "react";
import "../css/Realisation.css";

function Realisation() {
  return (
    <section id="real" className="realsection w-100 h-100 d-flex flex-column align-items-center justify-content-center justify-self-center">
      <div className="title-container w-100 mb-5 d-flex justify-content-center justify-self-center">
        <h1 className="mx-auto my-2 p-2 w-100 display-5 text-center text-white ">
          MES PROJETS
        </h1>
      </div>
      <div className="projet1 d-flex col-10 bg-white p-2 mx-auto my-2  ">
        <span>
          {" "}
          Projet 1: <br /> Descriptif du projet <br /> Technologie utilisé
        </span>
        <span> Photo du projet +lien</span>
        <span> Année du projet</span>{" "}
      </div>

      <div className="projet2 d-flex col-10 bg-white  ">
        <span>
          {" "}
          Projet 2: <br /> Descriptif du projet <br /> Technologie utilisé
        </span>
        <span> Photo du projet +lien</span>
        <span> Année du projet</span>{" "}
      </div>
    </section>
  );
}

export default Realisation;

import React from "react";
import "../css/Temoignage.css";

function Temoignage() {
  return (
    <section id="temoin" className="temoinSection   h-100 d-flex flex-column align-items-center justify-content-center justify-self-center">
      <div className=" w-100 mb-5 d-flex justify-content-center justify-self-center">
        <h1 className="mx-auto my-2 p-2 w-100 display-5 text-center text-white ">
          Temoignage
        </h1>
      </div>
      <div className=" temoin d-flex flex-row col-10 ">
        <div className="col-4 text-white mx-2 my-2 p-2 border border-2 border-black">
          {" "}
          <h2>Temoignage 1</h2>
          <span className="fs-5"> Ceci est le 1er Temoignage d'une longue série</span>
        </div>

        <div className="col-4 text-white mx-2 my-2 p-2 border border-2 border-black">
          {" "}
          <h2>Temoignage 2</h2>
          <span className="fs-5"> Ceci est le 2eme Temoignage d'une longue série</span>
        </div>

        <div className="col-4 text-white mx-2 my-2 p-2 border border-2 border-black">
          {" "}
          <h2>Temoignage 3</h2>
          <span className="fs-5"> Ceci est le 3eme Temoignage d'une longue série</span>
        </div>
      </div>
    </section>
  );
}

export default Temoignage;

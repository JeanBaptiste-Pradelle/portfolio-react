import React, { useEffect } from "react";
import "../css/About.css";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

function About()
// Fonction drag and drop
{
  useEffect(() => {
    Draggable.create(".Description, .photo, .reseaux", {
      type: "x,y",
      bounds: ".sabout",
      inertia: false,
    });
  }, []);

  return (
    <section id="aPropros" className="sabout w-100 h-100 d-flex flex-column align-items-center justify-content-center">
      <div className="title-container w-100 mb-5 d-flex justify-content-center justify-self-center">
        <h1 className="mx-auto my-2 p-2 w-100 display-5 text-center text-white">
          ALL YOU NEED TO KNOW ABOUT ME
        </h1>
      </div>
      <div className="content-container d-flex justify-content-center align-items-flex-start col-11 ">
        <div className=" Description d-flex flex-column justify-content-center text-white bg-black opacity-75 p-2 m-2 flex-grow-1">
          <h2>À propos de moi</h2>

          <p>Descriptif formation + parcours</p>
        </div>
        <div className="photo d-flex flex-column justify-content-center text-white bg-black  opacity-75 p-2 m-2 flex-grow-1">
          <h2>Photo</h2>
        </div>
        <div className=" reseaux d-flex flex-column justify-content-center text-white bg-black opacity-75 p-2 m-2 flex-grow-1">
          {/* target= "_blank" pour ouvrir le lien dans un nouvelle onglet */}
          <a href="https://www.linkedin.com/in/jean-baptiste-pradelle-13b5b7275/" target="_blank" rel="noreferrer noopener" className=" text-reset text-decoration-none" >Linkedin </a>
          <a href="https://github.com/Jeanba63" target="_blank" rel="noreferrer noopener" className=" text-reset text-decoration-none" >Github</a>
        </div>
      </div>
    </section>
  );
}

export default About;

import React, { useEffect } from "react";
import "../css/About.css";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";

gsap.registerPlugin(Draggable);

function About() {
  // Fonction drag and drop
  useEffect(() => {
    if (window.innerWidth > 576) {
      Draggable.create(".Description, .photo, .reseaux", {
        type: "x,y",
        bounds: ".sabout",
        inertia: false,
      });
    }
  }, []);

  useEffect(() => {
    gsap.to(".titreAbout", {
      startAt: { opacity: 0, rotation: -180 },
      ease: "elastic.out",
      opacity: 1,
      rotation: 0,
      duration: 2,
    });
  }, []);

  return (
    <section
      id="about"
      className="sabout w-100 d-flex flex-column align-items-center justify-content-center"
    >
      <div className="title-container w-100 mb-5 d-flex justify-content-center justify-self-center">
        <h1 className="titreAbout d-flex justify-content-center my-2 p-2 w-100 display-5 text-center text-lg-white">
          A PROPOS DE MOI
        </h1>
      </div>
      <div className="content-container d-flex justify-content-center align-items-flex-start col-11 flex-wrap">
        {/* A propos */}
        <div className="Description d-flex flex-column justify-content-center text-white fs-5 p-2 mx-auto my-2 flex-grow-1 border border-2 border-black rounded-3">
          <h2>À propos de moi</h2>
          <table>
            <thead>
              <tr>
                <th scope="col" className="p-2">Compétences</th>
                <th scope="col" className="mx-auto p-2">Soft Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <p>
                    React <FaReact />
                  </p>
                </th>
                <td>Autonome</td>
              </tr>
              <tr>
                <th scope="row">
                  <p>
                    Bootstrap <FaBootstrap />
                  </p>
                </th>
                <td>Organisé</td>
              </tr>
              <tr>
                <th scope="row">
                  <p>
                    HTML 5 <FaHtml5 />
                  </p>
                </th>
                <td>Esprit d'équipe</td>
              </tr>
              <tr>
                <th scope="row">
                  <p>
                    CSS <FaCss3Alt />
                  </p>
                </th>
                <td>Travailleur</td>
              </tr>
              <tr>
                <th scope="row">
                  <p>
                    Github <FaGithub />
                  </p>
                </th>
                <td>À l'écoute</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Photo */}
        <div className="photo d-flex flex-column justify-content-center text-white  mx-3 flex-grow-1 border border-2 border-black rounded-circle  " >
          <img src={`${process.env.PUBLIC_URL}/image/photojb.jpg`} className="img-fluid w-100 h-100" alt="image de Jean-Baptiste" />
        </div>

        {/* Liens réseaux */}
        <div className="reseaux d-flex flex-column justify-content-center text-white p-2 m-2 flex-grow-1 border border-2 border-black rounded-pill">
          {/* target= "_blank" pour ouvrir le lien dans un nouvel onglet */}
          <a
            href="https://www.linkedin.com/in/jean-baptiste-pradelle-13b5b7275/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-reset text-decoration-none"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/JeanBaptiste-Pradelle"
            target="_blank"
            rel="noreferrer noopener"
            className="text-reset text-decoration-none"
          >
            Github
          </a>
          <a
            href="https://github.com/JeanBaptiste-Pradelle/CV/blob/main/CV_Pradelle.docx"
            target="_blank"
            rel="noreferrer noopener"
            className="text-reset text-decoration-none"
          >
            CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

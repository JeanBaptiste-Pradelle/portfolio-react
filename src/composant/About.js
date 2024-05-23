import React, { useEffect } from "react";
import "../css/About.css";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import {
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
gsap.registerPlugin(Draggable);

function About() {
  // Fonction drag and drop
  useEffect(() => {
    Draggable.create(".Description, .photo, .reseaux", {
      type: "x,y",
      bounds: ".sabout",
      inertia: false,
    });
  }, []);

  useEffect(() => {
    gsap.to(".titreAbout", {
      startAt: { opacity: 0, rotation: -180 },
      ease: "elastic.out",
      opacity: 1,
      rotation: 0,
      duration: 2,
    });
  });
  return (
    <section
      id="aPropros"
      className="sabout w-100 h-100 d-flex flex-column align-items-center justify-content-center"
    >
      <div className="title-container w-100 mb-5 d-flex justify-content-center justify-self-center">
        <h1 className=" titreAbout mx-auto my-2 p-2 w-100 display-5 text-center text-white">
          ALL YOU NEED TO KNOW ABOUT ME
        </h1>


      </div>
      <div className="content-container d-flex justify-content-center align-items-flex-start col-11 ">
        {/* A proros */}
        <div className=" Description d-flex flex-column justify-content-center text-white fs-5  p-2 mx-auto my-2 flex-grow-1 ">
          <h2>À propos de moi</h2>
          <table>
            <thead>
              <th scope="col"> Competences</th>
              <th scope="col"> Soft Skills</th>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  {" "}
                  <p>
                    React <FaReact />
                  </p>{" "}
                </th>
                <td> Autonome</td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <p>
                    Bootstrap <FaBootstrap />
                  </p>{" "}
                </th>
                <td> Organisé </td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <p>
                    HTML 5 <FaHtml5 />
                  </p>
                </th>
                <td>Esprit d'équipe</td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <p>
                    CSS <FaCss3Alt />
                  </p>{" "}
                </th>
                <td>Travailleur</td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <p>
                    Github <FaGithub />
                  </p>{" "}
                </th>
                <td>A l'écoute </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Photo */}
        <div className="photo d-flex flex-column justify-content-center text-white    p-2 m-2 flex-grow-1">
          <h2>Photo</h2>
        </div>

        {/* lien reseaux */}
        <div className=" reseaux d-flex flex-column justify-content-center text-white   p-2 m-2 flex-grow-1">
          {/* target= "_blank" pour ouvrir le lien dans un nouvelle onglet */}
          <a
            href="https://www.linkedin.com/in/jean-baptiste-pradelle-13b5b7275/"
            target="_blank"
            rel="noreferrer noopener"
            className=" text-reset text-decoration-none"
          >
            Linkedin{" "}
          </a>
          <a
            href="https://github.com/Jeanba63"
            target="_blank"
            rel="noreferrer noopener"
            className=" text-reset text-decoration-none"
          >
            Github
          </a>

          <a
            href="https://github.com/Jeanba63/CV_web/blame/main/Resume-JBP.docx"
            target="_blank"
            rel="noreferrer noopener"
            className=" text-reset text-decoration-none"
          >
            {" "}
            CV{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

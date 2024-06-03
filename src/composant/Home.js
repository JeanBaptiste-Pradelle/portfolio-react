import React, { useEffect } from "react";
import "../css/home.css";
import gsap from "gsap";

function Home() {
  useEffect(() => {
    gsap.to(".presentation", {
		startAt: {opacity:0},
      opacity: 1,
      x: 0,
	duration: 5,
    });
  });

  return (
    <section id="Acceuil " className="h-100 w-100">
     
      <div className=" homeDiv  h-100 d-flex flex-column justify-content-center align-content-center   ">
        <span className="presentation col-10 d-flex justify-content-center mx-auto fs-4 ">
          Enchanté!
          Mon nom est Jean-Baptiste, je suis un développeur full-stack basé à Clermont-Ferrand.
          Passionné par le développement web depuis toujours je suis à votre disposition pour réaliser tout vos projets.
        </span>
      </div>
    </section>
  );
}



export default Home;

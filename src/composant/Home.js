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
        <span className="presentation col-10 d-flex justify-content-center ">
          HI I’m Jean-Baptiste a Full-Stack web developper based in
          Clermont-Ferrand, France. Blablablalblabla (on hover change background
          color)
        </span>
      </div>
    </section>
  );
}



export default Home;

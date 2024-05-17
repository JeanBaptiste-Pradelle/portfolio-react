import React from "react";
import "../css/About.css";

function About() {
	return (
		<section className="sabout w-100 d-flex flex-column align-items-center">
			<div className="title-container w-100 mb-5">
				<h1 className="mx-auto my-2 p-2 w-100 display-5 text-center  ">
					ALL YOU NEED TO KNOW ABOUT ME
				</h1>
			</div>
			
			<div className="content-container d-flex justify-content-center align-items-flex-start w-100">
				<div className="d-flex flex-column justify-content-center text-white bg-black p-2 m-2 flex-grow-1">
					<h2>À propos de moi</h2>
					<p>Descriptif formation + parcours</p>
				</div>
				<div className="d-flex flex-column justify-content-center text-white bg-black p-2 m-2 flex-grow-1">
					<h2>Photo</h2>
				</div>
				<div className="d-flex flex-column justify-content-center text-white bg-black p-2 m-2 flex-grow-1">
					<span>LinkedIn</span>
					<span>Adresse mail</span>
				</div>
			</div>
		</section>
	);
}

export default About;
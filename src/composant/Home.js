import React from "react";
import "../css/home.css";

function Home() {
	return (
		<section>
			<div className="bg-danger">
				<nav className="barre navbar-expand-lg  position-fixed top-0 end-0 m-3 fs-6">
					<div className="container-fluid">
						
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item p-1">
									<a className="nav-link active" aria-current="page" href="#">ACCUEIL</a>
								</li>
								<li className="nav-item p-1 px-2">
									<a className="nav-link" href="#"> A PROPROS</a>
								</li>
								<li className="nav-item p-1 px-2">
									<a className="nav-link" href="#"> REALISATION</a>
								</li>
								<li className="nav-item p-1 px-2">
									<a className="nav-link " href="#"> TEMOIGNAGE </a>
								</li>
								<li className="nav-item p-1 px-2">
									<a className="nav-link" href="#"> CONTACT</a>
								</li>


							
							</ul>
							
						</div>
					</div>
				</nav>
			</div>

			<div className="d-flex flex-column justify-content-center text-black" > HI I’m Jean-Baptiste a Full-Stack web developper based in Clermont-Ferrand, France. Blablablalblabla (on hover change background color)</div>
		</section>
	);
}

export default Home;
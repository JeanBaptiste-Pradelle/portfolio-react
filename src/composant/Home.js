import React from "react";
import "../css/home.css";

function Home() {
	return (
		<section>
			<div>
				<nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 end-0 m-3">
					<div className="container-fluid">
						<a className="navbar-brand" />
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										A propros
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Réalisation
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link disabled" aria-disabled="true">
										Temoignage
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link disabled" aria-disabled="true">
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</section>
	);
}

export default Home;

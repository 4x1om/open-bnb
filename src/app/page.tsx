// page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

<head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Revalia&display=swap');
	</style>
</head>;

export default function LandingPage() {
	return (
		<div>
			<Navbar />
			
			{/* Main Section */}
			<header className="hero">
				<div className="hero-text">
					<h1>OpenBnB</h1>
					<p>Homes for shelter in times of need</p>
					<div className="hero-buttons">
						<Link href="/onboard/host">
							<button>I'm a host</button>
						</Link>
						<Link href="/onboard/evacuee">
							<button>I'm an evacuee</button>
						</Link>
					</div>
				</div>
				<div className="hero-image">
					<Image
						src="/Images/landingMainImage.png"
						alt="Hero Image"
						layout="responsive"
						width={500} // use proportional width and height values for responsiveness
						height={300}
					/>
				</div>
			</header>

			{/* Scrollable Sections */}
			<section id="section1" className="section">
				<h2>About</h2>
				<p>
					Over ___% of evacuees from disasters don't have a place to stay.
					{/* Additional placeholder text */}
				</p>
			</section>

			<section id="section2" className="section">
				<h2>Contact</h2>
				<p>Questions? You can contact us at openbnb@gmail.com</p>
				<div className = "contact-logo">
				<Image
					src='/Images/urbanRefugeLogo.png'
					alt='Urban Refuge'
					width={100}
					height={100}
					className="contact-logo"
				/>
				</div>
			</section>

			<section id="section3" className="section">
				<h2>Meet the Team</h2>
				<p>Rae Yan Denali Schlesinger Alan Xi Hassan Dawy</p>
			</section>

			<style jsx>{`
				/* Base styles for responsive layout */
				
				.hero {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 3rem 5%;
					background-color: #f0f0f0;
					flex-direction: column;
				}
				
				.hero-text {
					text-align: center;
					margin-bottom: 1rem;
				}

				.hero-text h1 {
					font-size: 5vw;
					margin: 0;
				}

				.hero-text p {
					font-size: 2.5vw;
					margin: 1rem 0;
				}

				.hero-buttons {
					display: flex;
					justify-content: center;
					gap: 1rem;
				}

				.hero-buttons button {
					padding: 0.75rem 1.5rem;
					border: none;
					background-color: #333;
					color: white;
					cursor: pointer;
					border-radius: 5px;
				}

				.hero-image {
					width: 80%;
					max-width: 500px;
				}

				.section {
					padding: 2rem 5%;
					text-align: center;
					border-top: 1px solid #ddd;
					background-color: #fff;
				}

				.section h2 {
					font-size: 3vw;
					margin-bottom: 1rem;
				}

				.contact-logo {
					display: block;         /* Ensures it behaves as a block element */
					margin: 0 auto;         /* Centers the image horizontally */
					width: 100px;           /* Sets a fixed width, adjust as needed */
					height: 100px;          /* Ensures proportional dimensions */
				}

				/* Responsive adjustments */
				@media (min-width: 768px) {
					.hero {
						flex-direction: row;
						padding: 4rem 10%;
					}

					.hero-text h1 {
						font-size: 3rem;
					}

					.hero-text p {
						font-size: 1.5rem;
					}

					.section h2 {
						font-size: 2rem;
					}
				}

				@media (min-width: 1024px) {
					.hero {
						padding: 5rem 15%;
					}

					.hero-text h1 {
						font-size: 3.5rem;
					}

					.hero-text p {
						font-size: 1.75rem;
					}
				}
			`}</style>
		</div>
	);
}
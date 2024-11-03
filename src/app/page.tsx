// page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { signInWithGoogle } from "@/userhandling.js";

{
	/* <head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Revalia&display=swap');
	</style>
</head>; */
}

export default function LandingPage() {
	return (
		<div>
			<Navbar />

			{/* Main Section */}
			<button
				onClick={() => {
					signInWithGoogle();
				}}
			>
				Sign in test
			</button>
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
						// layout="responsive"
						width={500} // use proportional width and height values for responsiveness
						height={300}
					/>
				</div>
			</header>

			{/* Scrollable Sections */}

			<section id="section0" className="section">
				<h2 style={{marginTop: 100, marginBottom: 50}}>Why OpenBnB?</h2>
				<p style={{marginLeft: 200, marginRight: 200, marginBottom: 30}}>
				In major hurricanes like Katrina, while 1.2 million people successfully evacuated, however, hundreds of thousands were 
				left stranded due to shelter shortages—issues that platforms like OpenBnB could help mitigate.</p>
				<p style={{marginLeft: 200, marginRight: 200, marginBottom: 30}}>
				Hurricane Milton led to mandatory evacuations for 6 million Floridians, prompting many to flee on last-minute flights 
				without accommodations, a problem OpenBnB could address by connecting evacuees with nearby hosts.</p>
				<p style={{marginLeft: 200, marginRight: 200, marginBottom: 30}}>
				Beyond physical displacement, evacuees face prolonged financial and emotional stress from extended stays in emergency 
				shelters; OpenBnB could alleviate these challenges by connecting evacuees with hosts, providing stable, comforting 
				accommodations during recovery.</p>
				<p style={{marginLeft: 200, marginRight: 200, marginBottom: 30}}>
				Studies show that evacuees who don’t return to their residences face higher unemployment (up to 25%) compared to those 
				who can return, highlighting the importance of stable, temporary housing for economic recovery. 
				Massachusetts experiences an average of 10-12 winter storms each year, including blizzards like Winter Storm Grayson, 
				which dumped over 14 inches of snow in 2018. This impacts travel and local essential support for those displaced by 
				such weather events.
				</p>
			</section>

			<section id="section1" className="sectionColored" >
				<h2 style={{marginTop: 100, marginBottom: 50}}>About</h2>
				<p style={{marginLeft: 200, marginRight: 200, marginBottom: 30}}>
				OpenBnB is a platform dedicated to providing secure, temporary housing solutions for people facing urgent displacement 
				due to natural disasters. When hurricanes, wildfires, or other emergencies force evacuations, finding safe, reliable 
				shelter becomes a pressing need. Traditional options, like public shelters, hotels, or family homes, are often limited 
				and quickly overwhelmed. OpenBnB steps in to bridge this gap by connecting evacuees with local hosts willing to offer 
				their space, creating a community-driven response to displacement.</p>
				<p style={{marginLeft: 200, marginRight: 200, marginBottom: 30}}>
				Our mission is to empower communities to support each other during crises, making it easier for displaced individuals 
				to find comfort and stability in times of uncertainty. OpenBnB is designed to alleviate the stress and uncertainty 
				evacuees face, providing a network of welcoming homes for those in need.</p>
				<p style={{marginLeft: 200, marginRight: 200}}>
				Whether you’re a family in an evacuation zone or someone with space to share, OpenBnB makes finding and offering 
				shelter simple and accessible. We believe in the strength of communities to come together, providing support where 
				it's needed most. By using OpenBnB, hosts and guests alike can contribute to a safer, more compassionate response to 
				disaster displacement.
				</p>
			</section>

			<section id="section2" className="section">
				<h2>Contact</h2>
				<p>Questions? You can contact us at openbnb@gmail.com</p>
			</section>

			<section id="section3" className="sectionColored">
				<h2 style={{marginBottom: 20}}>Meet the Team</h2>

			<div className="team-container">
        	<div className="team-member">
				<div className="team-image">
            <Image
                src="/Images/denali.jpg"
                alt="Denali Schlesinger"
                width={250}
                height={250}
            />
			</div>
            <p style={{marginTop: 25, fontStyle: "italic"}}>Denali Schlesinger</p>
			<p style={{marginTop: 10}}>Data Science major at Boston University</p>
        </div>

        <div className="team-member">
			<div className="team-image">
            <Image
                src="/Images/rae.jpg"
                alt="Rae Yan"
                width={250}
                height={250}
            />
			</div>
            <p style={{marginTop: 25, fontStyle: "italic"}}>Rae Yan</p>
			<p style={{marginTop: 10}}>Computer Science & Music major at Northeastern University</p>
        </div>

		<div className="team-member">
			<div className="team-image">
			<Image
				src="/Images/hassan.jpg"
				alt="Hassan Dawy"
				width={250}
				height={250}
			/>
			</div>
			<p style={{marginTop: 25, fontStyle: "italic"}}>Hassan Dawy</p>
			<p style={{marginTop: 10}}>Data Science major at Boston University</p>
		</div>

		<div className="team-member">
			<div className="team-image">
			<Image
				src="/Images/alan.jpg"
				alt="Alan Xi"
				width={250}
				height={250}
			/>
			</div>
			<p style={{marginTop: 25, fontStyle: "italic"}}>Alan Xi</p>
			<p style={{marginTop: 10}}>Computer Science & Math major at Boston University</p>
		</div>
    </div>
			</section>

			<style jsx>{`
				/* Base styles for responsive layout */
				
				.team-container {
        			display: flex;
        			justify-content: center;
        			gap: 2rem;
    			}

    			.team-member {
        			display: flex;
        			flex-direction: column;
        			align-items: center;
    			}

				.team-image {
					border: 10px solid black;
				}

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
				
				.sectionColored {
					padding: 2rem 5%;
					text-align: center;
					border-top: 1px solid #ddd;
					background-color: #f0f0f0;
				}

				.sectionColored h2 {
					font-size: 2vw;
					margin-bottom: 1rem;
				}

				.section h2 {
					font-size: 3vw;
					margin-bottom: 1rem;
				}

				.contact-logo {
					display: block; /* Ensures it behaves as a block element */
					margin: 0 auto; /* Centers the image horizontally */
					width: 100px; /* Sets a fixed width, adjust as needed */
					height: 100px; /* Ensures proportional dimensions */
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
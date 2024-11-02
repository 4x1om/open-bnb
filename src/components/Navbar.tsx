import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	const handleScroll = (event: React.MouseEvent, targetId: string) => {
		event.preventDefault();
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<nav className="navbar">
			<div className="logo">
				<a href="/" className="revalia logo-text">
					OpenBnB
				</a>
				<Image
					src="/Images/logo.png"
					alt="Logo"
					className="logo-image"
					width={30} // Adjusted width
					height={30} // Adjusted height
				/>
			</div>
			<div className="nav-buttons">
				<a href="#section1" onClick={(e) => handleScroll(e, "section1")}>About</a>
				<a href="#section2" onClick={(e) => handleScroll(e, "section2")}>Contact</a>
				<a href="#section3" onClick={(e) => handleScroll(e, "section3")}>Meet the Team</a>
				<Link href="/hostorevacuee">
					<button className="signup-button">Sign Up / Login</button>
				</Link>
			</div>

			<style jsx>{`
				.navbar {
					position: sticky;
					top: 0;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 1vh 2vw; /* Reduced padding */
					background-color: #333;
					color: white;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Reduced shadow */
					z-index: 10;
				}

				.logo {
					display: flex;
					align-items: center;
				}

				.logo-text {
					font-family: "Revalia", sans-serif;
					font-size: 3vw; /* Reduced font size */
					margin-right: 0.5vw;
					color: white;
					text-decoration: none;
				}

				.logo-image {
					width: 6vw; /* Reduced width */
					height: auto;
					max-width: 30px; /* Reduced max width */
					margin-left: 0.3vw;
				}

				.nav-buttons a,
				.signup-button {
					margin-left: 0.5vw;
					font-size: 1.2vw; /* Reduced font size */
					color: white;
					text-decoration: none;
					background: none;
					border: none;
					cursor: pointer;
				}

				.signup-button {
					border: 1px solid white;
					padding: 0.5vh 1vw; /* Reduced padding */
					border-radius: 5px;
					font-size: 1vw; /* Reduced font size */
				}

				/* Media queries */
				@media (min-width: 768px) {
					.logo-text {
						font-size: 1.5rem; /* Smaller for medium screens */
					}

					.logo-image {
						width: 30px;
						height: 30px;
					}

					.nav-buttons a,
					.signup-button {
						font-size: 0.9rem;
					}
				}

				@media (min-width: 1024px) {
					.navbar {
						padding: 1rem 2rem;
					}
					.logo-text {
						font-size: 2rem;
					}
					.signup-button {
						padding: 0.5rem 1rem;
					}
				}
			`}</style>
		</nav>
	);
}
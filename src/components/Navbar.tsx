import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	let width = screen.width;

	return (
		<nav className="navbar">
			{/* Navbar */}
			<div className="logo">
				<h1 className={"revalia"} style={{ fontSize: width / 30.26 }}>
					OpenBnB
				</h1>
				<Image
					src="/Images/logo.png"
					alt="Logo"
					width={width / 21.614}
					height={width / 21.614}
					style={{ marginLeft: width / width + "em" }}
				/>
			</div>
			<div className="nav-buttons">
				<a href="#section1">About</a>
				<a href="#section2">Contact</a>
				<Link href="/hostorevacuee">
					<button className="signup-button">Sign Up / Login</button>
				</Link>
			</div>
			<style jsx>{`
				.navbar {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 1rem 2rem;
					background-color: #888;
					color: white;
				}

				.revalia {
					font-family: "Revalia", sans-serif;
					font-weight: 400;
					font-style: normal;
				}

				.mainButton {
					font-family: "GeistVF";
					font-weight: 400;
					font-style: normal;
				}
				.navbar {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 1rem 2rem;
					background-color: #333;
					color: white;
				}
				.logo {
					display: flex;
					align-items: center;
				}
				.nav-buttons a,
				.signup-button {
					margin-left: 1rem;
					color: white;
					text-decoration: none;
					background: none;
					border: none;
					cursor: pointer;
				}
				.signup-button {
					border: 1px solid white;
					padding: 0.5rem 1rem;
					border-radius: 5px;
				}
			`}</style>
		</nav>
	);
}

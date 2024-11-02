// page.tsx
"use client";

import styles from './page.module.css';

<nav className={styles.navbar}>
  {/* Navbar content */}
</nav>

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

let width = screen.width;

<head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Revalia&display=swap');
</style>
</head>

export default function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className="logo">
          <h1 className = {styles.revalia} style={{fontSize: width / 30.26}}>OpenBnB</h1>
          <Image src="/Images/logo.png" alt="Logo" width={width / 21.614} height={width / 21.614} style={{marginLeft: width / width + 'em'}}/>
        </div>
        <div className="nav-buttons">
          <a href="#section1">About</a>
          <a href="#section2">Contact</a>
          <Link href="/hostorevacuee"><button className="signup-button">Sign Up / Login</button></Link>
        </div>
      </nav>

      {/* Main Section */}
      <header className="hero">
        <div className="hero-text">
          <h1 style={{marginLeft: width / 208.6897 + 'em'}}>OpenBnB</h1>
          <p style={{marginLeft: width / 100.687 + 'em'}}>Homes for shelter in times of need</p>
          <div className="hero-buttons">
            <Link href="/host" style={{marginLeft: width / 84.056 + 'em'}}><button>I'm a host</button></Link>
            <Link href="/evacuee" style={{marginLeft: 'em'}}><button>I'm an evacuee</button></Link>
          </div>
        </div>
        <div className="hero-image">
        <Image src="/Images/landingMainImage.png" alt="Hero Image" width={width / 2.52167} height={width / 3.7825} style={{marginRight: width / 151.3 + 'em'}} />
        </div>
      </header>

      {/* Scrollable Sections */}
      <section id="section1" className="section">
        <h2>About</h2>
        <p style={{marginLeft: width / 100.867 + 'em', marginRight: width / 100.867 + 'em'}}>Over ___% of evacuees from disasters don't have a place to stay
        Over ___% of evacuees from disasters don't have a place to stay
        Over ___% of evacuees from disasters don't have a place to stay
        Over ___% of evacuees from disasters don't have a place to stay
        Over ___% of evacuees from disasters don't have a place to stay
        Over ___% of evacuees from disasters don't have a place to stay
        Over ___% of evacuees from disasters don't have a place to stay
        Over ___% of evacuees from disasters don't have a place to stay
        Over ___% of evacuees from disasters don't have a place to stay
        Over ___% of evacuees from disasters don't have a place to stay
        Over ___% of evacuees from disasters don't have a place to stay
        </p>
      </section>

      <section id="section2" className="section">
        <h2>Contact</h2>
        <p>Questions? You can contact us at ______</p>
      </section>

      <style jsx>{`
        /* Styles */
        body {
          margin: 0;
          font-family: Arial, sans-serif;
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
        .nav-buttons a, .signup-button {
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
        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 3rem 2rem;
          background-color: #f0f0f0;
        }
        .hero-text h1 {
          font-size: 2.5rem;
          margin: 0;
        }
        .hero-text p {
          font-size: 1.2rem;
          margin: 1rem 0;
        }
        .hero-buttons button {
          margin-right: 1rem;
          padding: 0.75rem 1.5rem;
          border: none;
          background-color: #333;
          color: white;
          cursor: pointer;
          border-radius: 5px;
        }
        .section {
          padding: 2rem;
          text-align: center;
          border-top: 1px solid #ddd;
          background-color: #fff;
        }
        .section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
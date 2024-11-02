"use client"

import styles from './page.module.css';
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import React from 'react';

export default function HostOrEvacuee() {
    return (
        <div className="w-screen h-screen bg-gray-200">
            <Navbar />
            <div className="content">
                <h1 className="title">Are you a host or evacuee?</h1>
                <div className="button-container">
                    <Link href="/onboard/host">
                        <button className="main-button">I'm a host</button>
                    </Link>
                    <Link href="/onboard/evacuee">
                        <button className="main-button">I'm an evacuee</button>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                /* Styles */
                .content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    margin-top: 5vh; /* Using viewport height for top margin */
                }

                .title {
                    font-size: 6vw; /* Responsive font size */
                    margin: 3vh 0 2vh; /* Top and bottom margins */
                    color: #333;
                }

                .button-container {
                    display: flex;
                    flex-direction: column;
                    gap: 2vh;
                }

                .main-button {
                    padding: 2vh 5vw; /* Flexible padding */
                    font-size: 1.5vw; /* Responsive font size */
                    background-color: #333;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                /* Responsive adjustments */
                @media (min-width: 768px) {
                    .content {
                        margin-top: 10vh;
                    }

                    .title {
                        font-size: 3rem;
                    }

                    .main-button {
                        font-size: 1rem;
                        padding: 1rem 3rem;
                    }

                    .button-container {
                        flex-direction: row;
                        gap: 2vw;
                    }
                }

                @media (min-width: 1024px) {
                    .title {
                        font-size: 3.5rem;
                    }

                    .main-button {
                        padding: 1.25rem 3.5rem;
                    }
                }
            `}</style>
        </div>
    );
}
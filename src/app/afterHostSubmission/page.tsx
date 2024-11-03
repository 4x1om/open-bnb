"use client"

import Navbar from "@/components/Navbar";

export default function afterHostSubmission() {
    return (
        <div className="w-screen h-screen bg-gray-200">
            <Navbar></Navbar>
            <h1 style={{marginLeft: 100, marginTop: 200, fontSize: 30}}>Thank you for submitting! You'll receive an email shortly with a link to edit or delete your 
                home listing.</h1>
        </div>
    );
}
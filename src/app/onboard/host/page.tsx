"use client";
import MultiSelect from "@/components/MultiSelect";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";

import { signInWithGoogle, auth, db } from '@/userhandling.js';

import firebase from "firebase/compat/app";

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, setDoc, getDoc, arrayUnion  } from "firebase/firestore";

interface HostData {
    name: string;
    email: string;
    phone: string;
    languages: string[];
    bio: string;
    capacity: number;
    duration: string;
    address: string;
    city: string;
    state: string;
    country: string;
    // photos: File[];
}

const initialHostData: HostData = {
    name: "",
    email: "",
    phone: "",
    languages: ["English"],
    bio: "",
    capacity: -1,
    duration: "",
    address: "",
    city: "",
    state: "",
    country: "United States",
    // photos: [],
};


// Define TextBox component
function TextBox({
    name,
    value,
    placeholder,
    onChange,
}: {
    name: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <input
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            className={clsx(
                "col-span-2 border-1 border-gray-400 rounded-md px-2",
                "outline-[#495F30] focus:outline focus:outline-2 outline-offset-0"
            )}
            onChange={onChange}
        />
    );
}

export default function OnboardHost() {
    const [hostData, setHostData] = useState<HostData>(initialHostData);
    const [errors, setErrors] = useState<string[]>([]);
    const [user, setUser] = useState<any>(null); // State to store user information
    const [loading, setLoading] = useState(true); // State to manage loading

    // Effect to monitor authentication state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in
                console.log(user);
                setUser(user); // Store user information in state
                setHostData((prev) => ({
                    ...prev,
                    name: user.displayName || "", // Set name if available
                    email: user.email || "" // Set email if available
                    // photo: user.photoURL || "", // Set photo if available
                }));
            } else {
                // No user is signed in, attempt to sign in
                console.log("No user signed in.");
                signInWithGoogle();
            }
            setLoading(false); // Set loading to false after auth state is determined
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setHostData({
            ...hostData,
            [name as string]: value,
        });
    };

    const validate = () => {
        const errors = [];
        if (hostData.name === "") errors.push("Name is required");
        if (hostData.email === "") errors.push("Email is required");
        if (hostData.phone === "") errors.push("Phone is required");
        if (hostData.languages.length === 0) errors.push("At least one language is required");
        if (hostData.bio === "") errors.push("Bio is required");
        if (hostData.capacity === -1) errors.push("Capacity is required");
        if (hostData.duration === "") errors.push("Duration is required");
        if (hostData.address === "") errors.push("Address is required");
        if (hostData.city === "") errors.push("City is required");
        if (hostData.state === "") errors.push("State is required");
        if (hostData.country === "") errors.push("Country is required");
        // if (hostData.photos.length === 0) errors.push("At least one photo is required");

        setErrors(errors);
        return errors.length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            console.log(hostData);
            
            const postsCollectionRef = collection(db, "posts");
            const snapshot = await getDocs(postsCollectionRef);

            if (snapshot.empty) {
                console.log("No posts found.");
            }

            const posts = [];
            snapshot.forEach(doc => {
                posts.push({ id: doc.id, ...doc.data() }); // Combine the document ID with its data
            });

            console.log("All posts:", posts);

            console.log(hostData)
            
            setDoc(doc(db, "posts", hostData.email), hostData)

            alert("Host information submitted successfully! Thank you for your support.");


	const validate = () => {
		const errors = [];
		if (hostData.name === "") {
			errors.push("Name is required");
		}
		if (hostData.email === "") {
			if (hostData.languages.length === 0) {
			errors.push("Email is required");
		}
		if (hostData.phone === "") {
			errors.push("Phone is required");
		}
		errors.push("At least one language is required");
		}
		if (hostData.bio === "") {
			errors.push("Bio is required");
		}
		if (hostData.capacity === -1) {
			errors.push("Capacity is required");
		}
		if (hostData.duration === "") {
			errors.push("Duration is required");
		}
		if (hostData.address === "") {
			errors.push("Address is required");
		}
		if (hostData.city === "") {
			errors.push("City is required");
		}
		if (hostData.state === "") {
			errors.push("State is required");
		}
		if (hostData.country === "") {
			errors.push("Country is required");
		}
		if (hostData.photos.length === 0) {
			errors.push("At least one photo is required");
		}
		setErrors(errors);
		return errors.length === 0;
	};

        }
    };

    if (loading) {
        return <div>Loading...</div>; // Optional loading state while checking auth
    }

    return (
        <div className="w-screen h-screen">
            <Navbar />
            <div className="w-full h-full text-black">
                <form className="w-full h-full" onSubmit={handleSubmit}>
                    <div className="w-full min-h-full px-10 bg-gray-200 overflow-y-auto">
                        <div className="flex flex-row justify-center">
                            <h1 className="text-lg my-4">Host Information</h1>
                        </div>

                        <div className="grid grid-cols-5 gap-8">
                            <div className="col-span-3 grid grid-cols-3 gap-2">
                                <label>Name</label>
                                <TextBox
                                    name={"name"}
                                    value={hostData.name}
                                    onChange={onChange}
                                />
                                <label>Email</label>
                                <TextBox
                                    name={"email"}
                                    value={hostData.email}
                                    onChange={onChange}
                                />
                                <label>Phone number</label>
                                <TextBox
                                    name={"phone"}
                                    value={hostData.phone}
                                    onChange={onChange}
                                />
                                <label>Languages</label>
                                <MultiSelect />
                            </div>
                            <div className="col-span-2">
                                <label>Bio</label>
                                <br />
                                <textarea
                                    name="bio"
                                    value={hostData.bio}
                                    placeholder="Tell the evacuees a little bit about yourself!"
                                    className={clsx(
                                        "w-full border-1 border-gray-400 rounded-md px-2 h-20",
                                        "outline-[#495F30] focus:outline focus:outline-2 outline-offset-0"
                                    )}
                                    onChange={onChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-row justify-center">
                            <h1 className="text-lg my-4">House information</h1>
                        </div>

												capacity: parseInt(value),
											});
										}}
									>
										<option value="-1">Select capacity</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">9+</option>
									</select>
									<label>Duration</label>
									<TextBox
										name={"duration"}
										value={hostData.duration}
										placeholder="1 week"
										onChange={onChange}
									></TextBox>
									<label>Address</label>
									<TextBox
										name={"address"}
										value={hostData.address}
										onChange={onChange}
									></TextBox>
									<label>City</label>
									<TextBox
										name={"city"}
										value={hostData.city}
										onChange={onChange}
									></TextBox>
									<label>State</label>
									<TextBox
										name={"state"}
										value={hostData.state}
										onChange={onChange}
									></TextBox>
									<label>Country</label>
									<TextBox
										name={"country"}
										value={hostData.country}
										onChange={onChange}
									></TextBox>
								</div>
							</div>
							<div className="col-span-2">
								<label>Photos</label>
								<br></br>
								<input
									type="file"
									id="photos"
									name="photos"
									className="w-full border-1 border-gray-400 rounded-md px-2"
									onChange={(e) => {
										setHostData({
											...hostData,
											photos: Array.from(e.target.files || []),
										});
									}}
								/>
							</div>
						</div>
						{errors.length > 0 && (
							<div className="w-full my-8 flex">
								<ul>
									{errors.map((error, index) => (
										<li key={index} className="text-red-500">
											{error}
										</li>
									))}
								</ul>
							</div>
						)}
						<div className="w-full my-8 flex flex-row justify-center">
							<Link href="/afterHostSubmission">
							<button
								type="submit"
								className={clsx(
									"bg-[#7CA451] text-white text-md px-4 py-2 rounded-md"
								)}
							>
								Submit
							</button>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
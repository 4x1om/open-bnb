"use client";
import MultiSelect from "@/components/MultiSelect";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import { useState } from "react";
import Link from 'next/link';

import { signInWithGoogle, app, auth, db } from '@/userhandling.js'

import firebase from 'firebase/app';

import { setDoc, getDoc , doc} from "firebase/firestore";


interface EvacueeData {
	name: string;
	email: string;
	phone: string;
	languages: string[];
	bio: string;

	capacity: number;
	duration: string;
	// address: string;
	// city: string;
	// state: string;
	// country: string;
	// photos: File[];
}

const initialevacueeData: EvacueeData = {
	name: "",
	email: "",
	phone: "",
	languages: ["English"],
	bio: "",

	capacity: -1,
	duration: "",
	// address: "",
	// city: "",
	// state: "",
	// country: "United States",
	// photos: [],
};

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

export default function OnboardEvacuee() {
	const [EvacueeData, setEvacueeData] = useState<EvacueeData>(initialevacueeData);

	const [errors, setErrors] = useState<string[]>([]);

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setEvacueeData({
			...EvacueeData,
			[name as string]: value,
		});
	};

	const validate = () => {
		const errors = [];
		if (EvacueeData.name === "") {
			errors.push("Name is required");
		}
		if (EvacueeData.email === "") {
			if (EvacueeData.languages.length === 0) {
			errors.push("Email is required");
		}
		if (EvacueeData.phone === "") {
			errors.push("Phone is required");
		}
		errors.push("At least one language is required");
		}
		if (EvacueeData.bio === "") {
			errors.push("Bio is required");
		}
		if (EvacueeData.capacity === -1) {
			errors.push("Capacity is required");
		}
		if (EvacueeData.duration === "") {
			errors.push("Duration is required");
		}
		// if (EvacueeData.address === "") {
		// 	errors.push("Address is required");
		// }
		// if (EvacueeData.city === "") {
		// 	errors.push("City is required");
		// }
		// if (EvacueeData.state === "") {
		// 	errors.push("State is required");
		// }
		// if (EvacueeData.country === "") {
		// 	errors.push("Country is required");
		// }
		// if (EvacueeData.photos.length === 0) {
		// 	errors.push("At least one photo is required");
		// }
		setErrors(errors);
		return errors.length === 0;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validate()) {
			console.log(EvacueeData);

			const path = doc(db, "evacuees", EvacueeData.email);

			setDoc(path, EvacueeData);
		}
	};

	return (
		<div className="w-screen h-screen">
			<Navbar></Navbar>
			<div className="w-full h-full">
				<form className="w-full h-full" onSubmit={handleSubmit}>
					<div className="w-full min-h-full px-10 bg-gray-200 overflow-y-auto">
						<div className="flex flex-row justify-center">
							<h1 className="text-lg my-4">Evacuee Information</h1>
						</div>

						<div className="grid grid-cols-5 gap-8">
							<div className="col-span-3 grid grid-cols-3 gap-2">
								<label>Name</label>
								<TextBox
									name={"name"}
									value={EvacueeData.name}
									onChange={onChange}
								></TextBox>
								<label>Email</label>
								<TextBox
									name={"email"}
									value={EvacueeData.email}
									onChange={onChange}
								></TextBox>
								<label>Phone number</label>
								<TextBox
									name={"phone"}
									value={EvacueeData.phone}
									onChange={onChange}
								></TextBox>
								<label>Languages</label>
								<MultiSelect></MultiSelect>
							</div>
							<div className="col-span-2">
								<label>Bio</label>
								<br></br>
								<textarea
									name="bio"
									value={EvacueeData.bio}
									placeholder="Tell the host a little bit about yourself!"
									className={clsx(
										"w-full border-1 border-gray-400 rounded-md px-2 h-20",
										"outline-[#495F30] focus:outline focus:outline-2 outline-offset-0"
									)}
									onChange={onChange}
								/>
							</div>
						</div>

						<div className="w-full grid grid-cols-5 gap-8">
							<div className="col-span-3">
								<div className="grid grid-cols-3 gap-2">
									<label>Number of people</label>
									<select
										name="capacity"
										id="capacity"
										className="col-span-2 rounded-md"
										onChange={(e) => {
											const { value } = e.target;
											setEvacueeData({
												...EvacueeData,

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
									<label>Duration you need to stay</label>
									<TextBox
										name={"duration"}
										value={EvacueeData.duration}
										placeholder="1 week"
										onChange={onChange}
									></TextBox>
								</div>
							</div>
							{/* <div className="col-span-2">
								<label>Photos</label>
								<br></br>
								<input
									type="file"
									id="photos"
									name="photos"
									className="w-full border-1 border-gray-400 rounded-md px-2"
									onChange={(e) => {
										setEvacueeData({
											...EvacueeData,
											photos: Array.from(e.target.files || []),
										});
									}}
								/>
							</div> */}
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
							{/* <Link href="/hostsearch"> */}
							<button
								type="submit"
								className={clsx(
									"bg-[#7CA451] text-white text-md px-4 py-2 rounded-md"
								)}
							>
								Submit
							</button>
							{/* </Link> */}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
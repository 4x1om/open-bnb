"use client";
import MultiSelect from "@/components/MultiSelect";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import { useState } from "react";

interface HostData {
	name: string;
	email: string;
	phone: string;
	languages: string[];
	bio: string;
	house: {
		capacity: number;
		duration: string;
		address: string;
		city: string;
		state: string;
		country: string;
		photos: File[];
	};
}

const initialHostData: HostData = {
	name: "",
	email: "",
	phone: "",
	languages: ["English"],
	bio: "",
	house: {
		capacity: -1,
		duration: "",
		address: "",
		city: "",
		state: "",
		country: "",
		photos: [],
	},
};

function TextBox({
	name,
	value,
	onChange,
}: {
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<input
			type="text"
			name="name"
			value={value}
			className={clsx(
				"border-1 border-gray-400 rounded-md px-2",
				"outline-[#495F30] focus:outline focus:outline-2 outline-offset-0"
			)}
			onChange={onChange}
		/>
	);
}

export default function OnboardHost() {
	const [hostData, setHostData] = useState<HostData>(initialHostData);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setHostData({
			...hostData,
			[name as string]: value,
		});
	};

	return (
		<div className="w-screen h-screen bg-gray-200">
			<Navbar></Navbar>
			<div>
				<form onSubmit={() => {}}>
					<div className="w-full px-10">
						<div className="flex flex-row justify-center">
							<h1 className="text-lg my-4">Host information</h1>
						</div>

						<div className="grid grid-cols-2 gap-2">
							<label>Name</label>
							<TextBox
								name={"name"}
								value={hostData.name}
								onChange={onChange}
							></TextBox>
							<label>Email</label>
							<TextBox
								name={"email"}
								value={hostData.email}
								onChange={onChange}
							></TextBox>
							<label>Phone number</label>
							<TextBox
								name={"phone"}
								value={hostData.phone}
								onChange={onChange}
							></TextBox>
							<label>Languages</label>
							<MultiSelect></MultiSelect>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

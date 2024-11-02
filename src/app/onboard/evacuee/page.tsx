"use client";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import { useState } from "react";
import Select, { MultiValue, SingleValue, GroupBase } from "react-select";

interface EvacueeData {
	name: string;
	email: string;
	phone: string;
	languages: string[];
	bio: string;
}

const initialEvacueeData: EvacueeData = {
	name: "",
	email: "",
	phone: "",
	languages: ["English"],
	bio: "",
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

export interface ColourOption {
	readonly value: string;
	readonly label: string;
	readonly color: string;
	readonly isFixed?: boolean;
	readonly isDisabled?: boolean;
}

export default function OnboardEvacuee() {
	const [evacueeData, setEvacueeData] = useState<EvacueeData>(initialEvacueeData);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setEvacueeData({
			...evacueeData,
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
							<h1 className="text-lg my-4">Evacuee Information</h1>
						</div>

						<div className="grid grid-cols-2 gap-2">
							<label>Name</label>
							<TextBox
								name={"name"}
								value={evacueeData.name}
								onChange={onChange}
							></TextBox>
							<label>Email</label>
							<TextBox
								name={"email"}
								value={evacueeData.email}
								onChange={onChange}
							></TextBox>
							<label>Phone number</label>
							<TextBox
								name={"phone"}
								value={evacueeData.phone}
								onChange={onChange}
							></TextBox>
							<label>Languages</label>
							{/* <Select
								value={selectedLanguage}
								onChange={(value: MultiValue<string>) => {
									console.log(value);
									// setEvacueeData({
									// 	...EvacueeData,
									// 	languages: value.map((v) => v.valueOf()),
									// });
								}}
								isMulti={true}
								options={options}
							></Select> */}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
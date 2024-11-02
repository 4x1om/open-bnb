import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const options = ["English", "Spanish", "French", "German", "Italian"];

export default function MultiSelect() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState<string[]>(["English"]);

	const [inputValue, setInputValue] = useState("");

	const filteredOptions = options.filter(
		(option) =>
			option.toLowerCase().includes(inputValue.toLowerCase()) &&
			!selectedOptions.includes(option)
	);

	const multiSelectRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (e.target) {
				const target = e.target as Node;
				if (
					multiSelectRef.current &&
					!multiSelectRef.current.contains(target)
				) {
					setIsOpen(false);
				}
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div>
			<div
				onFocus={() => setIsOpen(true)}
				ref={multiSelectRef}
				className="relative"
			>
				<input
					type="text"
					id="languageInput"
					value={inputValue}
					onChange={(e) => {
						const { value } = e.target;
						setInputValue(value);
					}}
					placeholder="type a language"
				/>
				{filteredOptions.length > 0 && isOpen && (
					<ul
						className={clsx(
							"absolute top-6",
							"w-full #bg-white bg-[#D5E4C8] rounded-md border-2 border-gray-600",
							"flex flex-col gap-y-1"
						)}
					>
						{filteredOptions.map((option) => (
							<li
								key={option}
								className="px-1 border-b-2 border-gray-300 last:border-b-0"
							>
								<button
									id={option}
									className="w-full text-left"
									onClick={() => {
										setSelectedOptions((prev) => {
											if (prev.includes(option)) {
												return prev.filter((item) => item !== option);
											} else {
												return [...prev, option];
											}
										});
										setInputValue("");
										setIsOpen(false);
									}}
								>
									<label htmlFor={option}>{option}</label>
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
			{selectedOptions.length > 0 && (
				<div className="w-full flex flex-row gap-x-2">
					{selectedOptions.map((option) => (
						<div
							key={option}
							className={clsx(
								"rounded-md text-sm text-white px-1",
								"flex justify-between gap-x-2",
								"bg-[#719748]"
								//
							)}
						>
							<span>{option}</span>
							<button
								onClick={() => {
									setSelectedOptions(
										selectedOptions.filter((item) => item !== option)
									);
								}}
							>
								x
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

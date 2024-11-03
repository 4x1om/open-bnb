// DetailsPanel.tsx
import React from "react";

interface DetailsPanelProps {
	title: string;
	content: string;
	onBack: () => void; // Add this line to accept the onBack function
}

const DetailsPanel: React.FC<DetailsPanelProps> = ({
	title,
	content,
	onBack,
}) => {
	return (
		<div className="flex flex-col w-full h-screen">
			{/* Back Button */}
			<button
				onClick={onBack}
				className="bg-gray-800 text-white py-2 px-4 rounded m-4"
				style={{ alignSelf: "flex-start" }} // Align the button to the top left
			>
				&lt; Back to Map
			</button>

			{/* Header */}
			<header className="bg-gray-800 text-white py-4 px-6">
				<h1 className="text-lg font-semibold">{title}</h1>
			</header>

			{/* Main Content */}
			<div className="flex flex-1 overflow-hidden">
				{/* Details Panel */}
				<div className="flex-1 bg-white p-6 overflow-y-auto">
					<h2 className="text-xl font-bold mb-4">Details</h2>
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
};

export default DetailsPanel;

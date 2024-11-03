"use client";
import LeafletMap from "@/components/LeafletMap";
// page.tsx
import React, { useState, useEffect } from "react";
import DetailsPanel from "@/components/DetailsPanel";

export interface HostEntry {
	id: string;
	name: string;
	location: string;
	contact: string;
	details: string;
	coords: [number, number];
}

// Generates a dummy list of hosts with more diversity and multiple states
const generateDummyHosts = (): HostEntry[] => [
	{
		id: "1",
		name: "John Doe",
		location: "Boston, MA",
		contact: "johndoe@example.com",
		details: "Can accommodate 2 people. Pet-friendly and provides meals.",
		coords: [42.3601, -71.0589],
	},
	{
		id: "2",
		name: "Jane Smith",
		location: "Cambridge, MA",
		contact: "janesmith@example.com",
		details: "1 private room available. Non-smoker preferred.",
		coords: [42.3736, -71.1097],
	},
	{
		id: "3",
		name: "Michael Johnson",
		location: "Springfield, MA",
		contact: "michaelj@example.com",
		details: "Family home with space for 4. Kid-friendly environment.",
		coords: [42.1015, -72.5898],
	},
	{
		id: "4",
		name: "Emily White",
		location: "Worcester, MA",
		contact: "emilywhite@example.com",
		details: "Quiet neighborhood with a separate guest room. LGBTQ+ friendly.",
		coords: [42.2626, -71.8023],
	},
	{
		id: "5",
		name: "David Brown",
		location: "Lowell, MA",
		contact: "davidbrown@example.com",
		details: "Can host 3 guests. Close to public transportation.",
		coords: [42.6334, -71.3162],
	},
	{
		id: "6",
		name: "Sarah Davis",
		location: "New York, NY",
		contact: "sarahd@example.com",
		details: "Spacious apartment in Manhattan, can accommodate 2 guests.",
		coords: [40.7128, -74.006],
	},
	{
		id: "7",
		name: "James Wilson",
		location: "Los Angeles, CA",
		contact: "jamesw@example.com",
		details: "Modern apartment with pool, can accommodate 3 guests.",
		coords: [34.0522, -118.2437],
	},
	{
		id: "9",
		name: "Robert Garcia",
		location: "Austin, TX",
		contact: "robertg@example.com",
		details: "Modern loft in downtown, suitable for 2 guests.",
		coords: [30.2672, -97.7431],
	},
	{
		id: "10",
		name: "Karen Miller",
		location: "Chicago, IL",
		contact: "karenm@example.com",
		details: "Charming apartment near the park, can host 2 guests.",
		coords: [41.8781, -87.6298],
	},
	{
		id: "11",
		name: "Jessica Lee",
		location: "Seattle, WA",
		contact: "jessical@example.com",
		details: "Stylish studio with city view, perfect for solo travelers.",
		coords: [47.6062, -122.3321],
	},
	{
		id: "12",
		name: "Christopher Martinez",
		location: "Denver, CO",
		contact: "christopher@example.com",
		details: "Mountain cabin retreat, can host 6 guests.",
		coords: [39.7392, -104.9903],
	},
	{
		id: "13",
		name: "Angela Hernandez",
		location: "Phoenix, AZ",
		contact: "angelah@example.com",
		details: "Spacious home with garden, accommodating 4 guests.",
		coords: [33.4484, -112.074],
	},
	{
		id: "14",
		name: "Daniel Taylor",
		location: "Atlanta, GA",
		contact: "danielt@example.com",
		details: "Family-friendly home with a yard, can host 5 guests.",
		coords: [33.749, -84.388],
	},
	{
		id: "15",
		name: "Emily Clark",
		location: "Boston, MA",
		contact: "emilyc@example.com",
		details: "Stylish studio, close to public transport.",
		coords: [42.3601, -71.0589],
	},
	{
		id: "16",
		name: "William Robinson",
		location: "San Francisco, CA",
		contact: "williamr@example.com",
		details: "Great view of the Golden Gate, can accommodate 3.",
		coords: [37.7749, -122.4194],
	},
	{
		id: "17",
		name: "Jessica Johnson",
		location: "Portland, OR",
		contact: "jessicaj@example.com",
		details: "Cozy apartment in a vibrant neighborhood, suitable for 2.",
		coords: [45.5051, -122.675],
	},
	{
		id: "18",
		name: "Brian Lewis",
		location: "Dallas, TX",
		contact: "brianl@example.com",
		details: "Luxury apartment downtown, can host 4 guests.",
		coords: [32.7767, -96.797],
	},
	{
		id: "19",
		name: "Megan Walker",
		location: "Philadelphia, PA",
		contact: "meganw@example.com",
		details: "Historic home with modern amenities, suitable for 5.",
		coords: [39.9526, -75.1652],
	},
	{
		id: "20",
		name: "Matthew Hall",
		location: "Las Vegas, NV",
		contact: "matthewh@example.com",
		details: "Spacious villa with pool, can accommodate 8 guests.",
		coords: [36.1699, -115.1398],
	},
];

const stateAbbreviations: { [key: string]: string } = {
	Massachusetts: "MA",
	California: "CA",
	"New York": "NY",
	Texas: "TX",
	// Add more states as needed
};

const getMatchingStateAbbreviation = (query: string): string[] => {
	const lowerQuery = query.toLowerCase();
	const matches = Object.entries(stateAbbreviations).filter(
		([fullName, abbr]) =>
			fullName.toLowerCase().includes(lowerQuery) ||
			abbr.toLowerCase().includes(lowerQuery)
	);
	return matches.map(([, abbr]) => abbr);
};

// Sidebar component that shows a list of host cards with a filter
const Sidebar = ({
	hosts,
	onHostSelect,
	searchQuery,
	setSearchQuery,
	highlightedHost,
	setHighlightedHost,
}: {
	hosts: HostEntry[];
	onHostSelect: (host: HostEntry) => void;
	searchQuery: string;
	setSearchQuery: (searchQuery: string) => void;
	highlightedHost: HostEntry | null;
	setHighlightedHost: (host: HostEntry | null) => void;
}) => {
	// Get matching abbreviations for the search query
	const matchingAbbreviations = getMatchingStateAbbreviation(searchQuery);

	// Filter hosts if their location contains any matching abbreviation or the query as is
	let filteredHosts;
	if (highlightedHost) {
		filteredHosts = hosts.filter((host) => host.name === highlightedHost.name);
	} else {
		filteredHosts = hosts.filter(
			(host) =>
				matchingAbbreviations.some((abbr) => host.location.includes(abbr)) ||
				host.location.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}

	return (
		<div style={styles.sidebar}>
			<h2>Available Hosts</h2>
			<input
				type="text"
				placeholder="Search by location..."
				value={searchQuery}
				onChange={(e) => {
					setSearchQuery(e.target.value);
					setHighlightedHost(null);
				}}
				style={styles.searchInput}
			/>
			<div style={styles.hostList}>
				{filteredHosts.length > 0 ? (
					filteredHosts.map((host) => (
						<div
							key={host.id}
							style={{
								...styles.hostCard,
								backgroundColor:
									highlightedHost?.name === host.name ? "#ffcccc" : "#ffffff",
							}}
							onClick={() => onHostSelect(host)}
						>
							<h3>{host.name}</h3>
							<p>
								<strong>Location:</strong> {host.location}
							</p>
							<p>
								<strong>Details:</strong> {host.details}
							</p>
						</div>
					))
				) : (
					<p style={styles.noResults}>No hosts found for "{searchQuery}"</p>
				)}
			</div>
		</div>
	);
};

const Page: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [hosts, setHosts] = useState<HostEntry[]>([]);
	const [selectedHost, setSelectedHost] = useState<HostEntry | null>(null); // Changed from Host to HostEntry

	const [highlightedHost, setHighlightedHost] = useState<HostEntry | null>(
		null
	);
	function setHighlightedHostByName(name: string) {
		const host = hosts.find((host) => host.name === name) || null;
		if (host) {
			setHighlightedHost(host);
			setSearchQuery("");
		} else {
			setHighlightedHost(null);
		}
	}

	useEffect(() => {
		const data = generateDummyHosts();
		setHosts(data);
	}, []);

	const handleHostSelect = (host: HostEntry) => {
		// Changed from Host to HostEntry
		setSelectedHost(host);
	};

	const handleBackToMap = () => {
		setSelectedHost(null); // Reset the selected host to hide details panel
	};

	return (
		<div style={styles.container}>
			<div style={styles.map}>
				{selectedHost ? (
					<div style={styles.detailsPanel}>
						<DetailsPanel
							title={selectedHost.name}
							content={selectedHost.details}
							onBack={handleBackToMap} // Pass the back function to the DetailsPanel
						/>
					</div>
				) : (
					<LeafletMap
						hosts={hosts}
						setHighlightHostByName={setHighlightedHostByName}
					></LeafletMap>
				)}
			</div>

			{/* Sidebar with host list and filter */}
			<Sidebar
				hosts={hosts}
				onHostSelect={handleHostSelect}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				highlightedHost={highlightedHost}
				setHighlightedHost={setHighlightedHost}
			/>
		</div>
	);
};

const styles = {
	container: {
		display: "grid",
		gridTemplateColumns: "1fr 20%", // Map takes the rest, Sidebar takes 20% on the right
		gridTemplateRows: "100vh",
		position: "relative" as "relative",
		width: "100%",
	},
	map: {
		gridColumn: "1", // Map takes the first column
		padding: "20px",
		backgroundColor: "#e6f7ff",
		height: "100vh",
		position: "relative" as "relative",
		zIndex: 1, // Ensure the map is under the details panel when open
	},
	detailsPanel: {
		position: "absolute" as "absolute", // Make it absolute to overlap the map
		top: 0,
		left: 0,
		right: "20%", // Sidebar width
		bottom: 0,
		backgroundColor: "#fff", // Panel background
		zIndex: 2, // Ensure the details panel is above the map
		overflowY: "auto" as "auto",
		borderRight: "1px solid #ddd", // Optional: add a border to separate from the sidebar
	},
	sidebar: {
		gridColumn: "2", // Sidebar takes the second column (right)
		backgroundColor: "#f8f9fa",
		padding: "20px",
		height: "100vh",
		overflowY: "auto" as "auto",
	},
	searchInput: {
		width: "100%",
		padding: "10px",
		marginBottom: "15px",
		borderRadius: "5px",
		border: "1px solid #ccc",
	},
	hostList: {
		display: "flex",
		flexDirection: "column" as "column",
		gap: "15px",
	},
	hostCard: {
		padding: "15px",
		backgroundColor: "#ffffff",
		borderRadius: "8px",
		boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
		cursor: "pointer",
		transition: "background-color 0.3s",
	},
	noResults: {
		textAlign: "center" as "center",
		color: "#888",
	},
};

export default Page;

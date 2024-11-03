"use client"
// page.tsx
import React, { useState, useEffect } from 'react';

interface Host {
    id: string;
    name: string;
    location: string;
    contact: string;
    details: string;
}

// Generates a dummy list of hosts with more diversity and multiple states
const generateDummyHosts = (): Host[] => [
    { id: "1", name: "John Doe", location: "Boston, MA", contact: "johndoe@example.com", details: "Can accommodate 2 people. Pet-friendly and provides meals." },
    { id: "2", name: "Jane Smith", location: "Cambridge, MA", contact: "janesmith@example.com", details: "1 private room available. Non-smoker preferred." },
    { id: "3", name: "Michael Johnson", location: "Springfield, MA", contact: "michaelj@example.com", details: "Family home with space for 4. Kid-friendly environment." },
    { id: "4", name: "Emily White", location: "Worcester, MA", contact: "emilywhite@example.com", details: "Quiet neighborhood with a separate guest room. LGBTQ+ friendly." },
    { id: "5", name: "David Brown", location: "Lowell, MA", contact: "davidbrown@example.com", details: "Can host 3 guests. Close to public transportation." },
    { id: "6", name: "Sarah Davis", location: "New York, NY", contact: "sarahd@example.com", details: "Spacious apartment in Manhattan, can host 4 guests." },
    { id: "7", name: "James Wilson", location: "Los Angeles, CA", contact: "jamesw@example.com", details: "Beachfront property with room for 5, ideal for families." },
    { id: "8", name: "Linda Martinez", location: "Miami, FL", contact: "lindam@example.com", details: "Cozy home with pool, can accommodate 3 guests." },
    { id: "9", name: "Robert Garcia", location: "Austin, TX", contact: "robertg@example.com", details: "Modern loft in downtown, suitable for 2 guests." },
    { id: "10", name: "Karen Miller", location: "Chicago, IL", contact: "karenm@example.com", details: "Charming apartment near the park, can host 2 guests." },
    { id: "11", name: "Jessica Lee", location: "Seattle, WA", contact: "jessical@example.com", details: "Stylish studio with city view, perfect for solo travelers." },
    { id: "12", name: "Christopher Martinez", location: "Denver, CO", contact: "christopher@example.com", details: "Mountain cabin retreat, can host 6 guests." },
    { id: "13", name: "Angela Hernandez", location: "Phoenix, AZ", contact: "angelah@example.com", details: "Spacious home with garden, accommodating 4 guests." },
    { id: "14", name: "Daniel Taylor", location: "Atlanta, GA", contact: "danielt@example.com", details: "Family-friendly home with a yard, can host 5 guests." },
    { id: "15", name: "Emily Clark", location: "Boston, MA", contact: "emilyc@example.com", details: "Stylish studio, close to public transport." },
    { id: "16", name: "William Robinson", location: "San Francisco, CA", contact: "williamr@example.com", details: "Great view of the Golden Gate, can accommodate 3." },
    { id: "17", name: "Jessica Johnson", location: "Portland, OR", contact: "jessicaj@example.com", details: "Cozy apartment in a vibrant neighborhood, suitable for 2." },
    { id: "18", name: "Brian Lewis", location: "Dallas, TX", contact: "brianl@example.com", details: "Luxury apartment downtown, can host 4 guests." },
    { id: "19", name: "Megan Walker", location: "Philadelphia, PA", contact: "meganw@example.com", details: "Historic home with modern amenities, suitable for 5." },
    { id: "20", name: "Matthew Hall", location: "Las Vegas, NV", contact: "matthewh@example.com", details: "Spacious villa with pool, can accommodate 8 guests." }
];


// Mapping full state names to abbreviations
const stateAbbreviations: { [key: string]: string } = {
    "Massachusetts": "MA",
    "California": "CA",
    "New York": "NY",
    "Texas": "TX",
    // Add more states as needed
};

// Function to match query against both full state names and abbreviations
const getMatchingStateAbbreviation = (query: string): string[] => {
    const lowerQuery = query.toLowerCase();

    // Find matching abbreviations and full state names that contain the query as a substring
    const matches = Object.entries(stateAbbreviations).filter(([fullName, abbr]) =>
        fullName.toLowerCase().includes(lowerQuery) || abbr.toLowerCase().includes(lowerQuery)
    );

    // Return the matching abbreviations and full state names
    return matches.map(([, abbr]) => abbr);
};

// Sidebar component that shows a list of host cards with a filter
const Sidebar: React.FC<{ hosts: Host[]; onHostSelect: (host: Host) => void }> = ({ hosts, onHostSelect }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Get matching abbreviations for the search query
    const matchingAbbreviations = getMatchingStateAbbreviation(searchQuery);

    // Filter hosts if their location contains any matching abbreviation or the query as is
    const filteredHosts = hosts.filter(host =>
        matchingAbbreviations.some(abbr => host.location.includes(abbr)) ||
        host.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={styles.sidebar}>
            <h2>Available Hosts</h2>

            {/* Search input for filtering hosts by location */}
            <input
                type="text"
                placeholder="Search by location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
            />

            <div style={styles.hostList}>
                {filteredHosts.length > 0 ? (
                    filteredHosts.map((host) => (
                        <div key={host.id} style={styles.hostCard} onClick={() => onHostSelect(host)}>
                            <h3>{host.name}</h3>
                            <p><strong>Location:</strong> {host.location}</p>
                            <p><strong>Details:</strong> {host.details}</p>
                        </div>
                    ))
                ) : (
                    <p style={styles.noResults}>No hosts found for "{searchQuery}"</p>
                )}
            </div>
        </div>
    );
};

// Main component to render the map and sidebar
const Page: React.FC = () => {
    const [hosts, setHosts] = useState<Host[]>([]);

    useEffect(() => {
        const data = generateDummyHosts();
        setHosts(data);
    }, []);

    const handleHostSelect = (host: Host) => {
        console.log(`Selected host: ${host.name}`);
    };

    return (
        <div style={styles.container}>
            {/* Placeholder for Map */}
            <div style={styles.map}>
                <h1>Map Component</h1>
                <p>Map will appear here. Click a host to focus on their location.</p>
            </div>

            {/* Sidebar with host list and filter */}
            <Sidebar hosts={hosts} onHostSelect={handleHostSelect} />
        </div>
    );
};

// Basic styles for layout
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row' as 'row',
    },
    map: {
        width: '70%',
        padding: '20px',
        backgroundColor: '#e6f7ff',
        height: '100vh',
    },
    sidebar: {
        width: '30%',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderLeft: '1px solid #ddd',
        height: '100vh',
        overflowY: 'auto' as 'auto',
    },
    searchInput: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    hostList: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        gap: '15px',
    },
    hostCard: {
        padding: '15px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    noResults: {
        textAlign: 'center' as 'center',
        color: '#888',
    },
};

export default Page;

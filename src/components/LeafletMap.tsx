import { HostEntry } from "@/app/hostsearch/page";
import { Map } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";

interface LeafletMapProps {
    hosts: HostEntry[];
    selectedHost: HostEntry | null; // Include selectedHost prop
}

export default function LeafletMap({ hosts, selectedHost }: LeafletMapProps) {
    const mapRef = useRef<Map | null>(null);
    const [L, setL] = useState<any | null>(null);

    useEffect(() => {
        if (L) {
            if (!mapRef.current) {
                // Set default view to the United States
                const map = L.map("map-container").setView([37.0902, -95.7129], 4); // Center on the U.S. with zoom level 4
                const defaultIcon = L.icon({
                    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                    iconSize: [25, 41], // size of the icon
                    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
                    popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
                    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png", // shadow image
                    shadowSize: [41, 41],
                    shadowAnchor: [12, 41],
                });

                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: "© OpenStreetMap contributors",
                }).addTo(map);

                hosts.forEach((host) => {
                    const [lat, lon] = host.coords;
                    L.marker([lat, lon], {
                        icon: defaultIcon,
                    })
                        .addTo(map)
                        .bindPopup(host.name);
                });

                // If selectedHost is provided, focus on its coordinates
                if (selectedHost) {
                    const [lat, lon] = selectedHost.coords;
                    L.marker([lat, lon], {
                        icon: defaultIcon,
                    })
                        .addTo(map)
                        .bindPopup(selectedHost.name)
                        .openPopup(); // Open the popup for the selected host
                    map.setView([lat, lon], 13); // Set the view to the selected host
                }

                mapRef.current = map;
            }
        } else {
            async function loadLeaflet() {
                const L = await import("leaflet");
                setL(L);
            }
            loadLeaflet();
        }
    }, [L, hosts, selectedHost]); // Add selectedHost to the dependency array

    return <div id="map-container" className="w-full h-full"></div>;
}
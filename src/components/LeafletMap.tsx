import { HostEntry } from "@/app/hostsearch/page";
import { Map } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";

export default function LeafletMap({
	hosts,
	setHighlightHostByName,
}: {
	hosts: HostEntry[];
	setHighlightHostByName: (name: string) => void;
}) {
	const mapRef = useRef<Map | null>(null);
	const [L, setL] = useState<any | null>(null);

	useEffect(() => {
		if (L) {
			if (!mapRef.current) {
				const map = L.map("map-container").setView([51.505, -0.09], 13);
				const defaultIcon = L.icon({
					iconUrl:
						"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png", // default Leaflet marker icon
					iconSize: [25, 41], // size of the icon
					iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
					popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
					shadowUrl:
						"https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png", // shadow image
					shadowSize: [41, 41],
					shadowAnchor: [12, 41],
				});

				L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
					attribution: "© OpenStreetMap contributors",
				}).addTo(map);

				hosts.forEach((host) => {
					const [lat, lon] = host.coords;
					console.log(lat, lon);
					const marker = L.marker([lat, lon], {
						icon: defaultIcon,
					})
						.addTo(map)
						.bindPopup(host.name);
					marker.on("click", () => {
						setHighlightHostByName(host.name);
					});
				});

				map.on("click", () => {
					setHighlightHostByName("");
				});

				mapRef.current = map;
			}
		} else {
			async function loadLeaflet() {
				const L = await import("leaflet");
				setL(L);
			}
			loadLeaflet();
		}
	}, [L]);

	return <div id="map-container" className="w-full h-full"></div>;
}

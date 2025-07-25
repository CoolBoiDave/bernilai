import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Navigate } from "react-router";

const DiscoverPage = () => {
	const position = [-6.2, 106.8167]; // Jakarta coordinates

	const [location, setLocation] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(pos) => {
					setLocation({
						lat: pos.coords.latitude,
						lng: pos.coords.longitude,
					});
				},
				(err) => {
					console.error(err);
					setError("Location permission denied.");
				}
			);
		} else {
			setError("Geolocation not supported.");
		}
	}, []);

	if (location) {
		return (
			<Navigate
				to={`/discover?lat=${location.lat}&lng=${location.lng}`}
				replace
			/>
		);
	}

	return (
		<div>
			<p>{error ? error : "Getting your location..."}</p>
		</div>
	);
};

export default DiscoverPage;

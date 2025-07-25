import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Map({
	panti,
	setCurrentPanti,
	setVerified,
	setSsresults,
	setAiresults,
}) {
	const createFontAwesomeIcon = () => {
		return L.divIcon({
			html: `<div style="font-size: 24px; color: blue;"><i class="fas fa-house-chimney"></i></div>`,
			className: "", // remove default 'leaflet-div-icon' class
			iconSize: [30, 42],
			iconAnchor: [15, 42],
			popupAnchor: [0, -40],
		});
	};
	return (
		<MapContainer
			center={[-6.25, 106.6]}
			zoom={13}
			style={{
				height: "calc(100vh - 12rem)",
				width: "100%",
				position: "absolute",
				top: "12rem",
			}}
		>
			<TileLayer
				attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{panti.map((p) => (
				<Marker
					key={p.longitude}
					position={[p.latitude, p.longitude]}
					icon={createFontAwesomeIcon()}
					eventHandlers={{
						click: () => {
							setCurrentPanti(p);
							setVerified();
							setSsresults();
							setAiresults();
						},
					}}
				>
					<Tooltip
						direction='top'
						offset={[0, -40]}
						opacity={1}
						permanent={false}
					>
						<span
							style={{
								fontSize: "2rem",
								padding: "1rem 2rem",
								borderRadius: "1rem",
								transition: ".4s all",
							}}
						>
							{p.title}
						</span>
					</Tooltip>
				</Marker>
			))}
		</MapContainer>
	);
}

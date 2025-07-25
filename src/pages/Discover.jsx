import { useEffect, useState } from "react";

import Map from "../components/Map";
import PantiInfo from "../components/PantiInfo";

export default function DiscoverPage() {
	const [panti, setPanti] = useState([]);
	const [currentPanti, setCurrentPanti] = useState(0);

	const [verifying, setVerifying] = useState(false);
	const [verified, setVerified] = useState();

	const [ssresults, setSsresults] = useState([]);
	const [airesults, setAiresults] = useState();

	useEffect(() => {
		const getBasicInfo = async () => {
			const filename = localStorage.getItem("file");

			const response = await fetch(
				"https://bernilai-api.dave-wilson.com/search/basic_info",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ filename }),
				}
			);

			if (response.status === 401) {
				console.log(response);
				return;
			}

			if (!response.ok) {
				console.log(response);
				return;
			}

			const resData = await response.json();

			setPanti(resData);
		};

		if (!localStorage.getItem("file")) {
			if (!("geolocation" in navigator)) {
				setStatus("Geolocation not supported");
				return;
			}

			navigator.geolocation.getCurrentPosition(async (pos) => {
				try {
					const lat = pos.coords.latitude;
					const lon = pos.coords.longitude;

					const response = await fetch(
						"https://bernilai-api.dave-wilson.com/search/scan/scan",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ lat, lon }),
						}
					);

					const resData = await response.json();

					localStorage.setItem("file", resData.file);

					getBasicInfo();
				} catch (err) {
					console.error(err);
				}
			});
		} else {
			navigator.geolocation.getCurrentPosition(async (pos) => {
				const lat = pos.coords.latitude;
				const lon = pos.coords.longitude;
			});
			getBasicInfo();
		}
	}, []);

	async function verifyPanti(panti) {
		setVerifying(true);
		const response = await fetch(
			"https://bernilai-api.dave-wilson.com/search/validate",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					lat: panti.latitude,
					lon: panti.longitude,
					fname: panti.title,
				}),
			}
		);

		const resData = await response.json();
		setVerified(
			resData.verified
				? "This panti is verified!"
				: "This panti is not verified, please find more info about it."
		);
		setVerifying(false);
	}

	async function socialseek(panti) {
		const response = await fetch(
			"https://bernilai-api.dave-wilson.com/search/socialseek",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					lat: panti.latitude,
					lon: panti.longitude,
					fname: panti.title,
				}),
			}
		);

		const resData = await response.json();
		setSsresults([...resData.links]);
	}

	async function searchAI(panti) {
		const response = await fetch(
			"https://bernilai-api.dave-wilson.com/search/ai_osint",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					address: panti.address,
					fname: panti.title,
				}),
			}
		);

		const resData = await response.json();
		setAiresults(resData);
	}

	return (
		<>
			<Map
				panti={panti}
				setCurrentPanti={setCurrentPanti}
				setVerified={setVerified}
				setSsresults={setSsresults}
				setAiresults={setAiresults}
			/>
			<PantiInfo
				panti={currentPanti}
				verifyPanti={verifyPanti}
				verifying={verifying}
				verified={verified}
				socialseek={socialseek}
				ssresults={ssresults}
				searchAI={searchAI}
				airesults={airesults}
			/>
		</>
	);
}

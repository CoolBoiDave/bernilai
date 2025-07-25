"use client";
import React, { useState } from "react";
import styles from "./Collector2.module.css";
import ConsentForm from "../components/collector/ConsentForm";
import RetrievalOptions from "../components/collector/RetrievalOptions";
import SubmitButton from "../components/collector/SubmitButton";
import CongratulationsSection from "../components/collector/CongratulationsSection";
import { redirect, useNavigate } from "react-router";

const Collector2 = () => {
	const [consentSelection, setConsentSelection] = useState("");
	const [retrievalSelection, setRetrievalSelection] = useState("");
	const [showConsentError, setShowConsentError] = useState(false);
	const [showRetrievalError, setShowRetrievalError] = useState(false);

	const navigate = useNavigate();

	const handleConsentChange = (value) => {
		setConsentSelection(value);
		if (value) {
			setShowConsentError(false);
		}
	};

	const handleRetrievalChange = (value) => {
		setRetrievalSelection(value);
		if (value) {
			setShowRetrievalError(false);
		}
	};

	const handleSubmit = () => {
		let hasErrors = false;

		if (!consentSelection) {
			setShowConsentError(true);
			hasErrors = true;
		}

		if (!retrievalSelection) {
			setShowRetrievalError(true);
			hasErrors = true;
		}

		if (consentSelection && retrievalSelection) {
			navigate("../3");
		}
	};

	return (
		<main className={styles.collector2}>
			<img
				src='https://api.builder.io/api/v1/image/assets/TEMP/293c339e03ac3085b4899c3b50571fb19941b9d8?width=3826'
				alt='Background'
				className={styles.backgroundImage}
			/>

			<CongratulationsSection />

			<div className={styles.mainContent}>
				<ConsentForm
					onSelectionChange={handleConsentChange}
					showError={showConsentError}
				/>

				<RetrievalOptions
					onSelectionChange={handleRetrievalChange}
					showError={showRetrievalError}
				/>

				<SubmitButton onClick={handleSubmit} />
			</div>
		</main>
	);
};

export default Collector2;

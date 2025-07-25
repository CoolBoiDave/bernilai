"use client";
import React from "react";
import styles from "../../../pages/Collector3.module.css";
import { Link } from "react-router";

const BackToHomeButton = () => {
	return (
		<Link to='/'>
			<button className={styles.backToHomeButton}>
				<div className={styles.buttonBackground} />
				<span className={styles.buttonText}>Back to Home</span>
			</button>
		</Link>
	);
};

export default BackToHomeButton;

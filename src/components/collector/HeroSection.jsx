"use client";
import * as React from "react";
import styles from "../../pages/Collector.module.css";

function HeroSection() {
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroContent}>
				<p className={styles.welcomeText}>Welcome to</p>
				<h1 className={styles.mainTitle}>THE COLLECTOR</h1>
				<p className={styles.heroDescription}>
					This is the beginning of a memorable and impactful journey.
					Send items to the collector by filling in this form!
				</p>
			</div>
		</section>
	);
}

export default HeroSection;

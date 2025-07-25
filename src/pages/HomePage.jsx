import React from "react";
import styles from "../components/home/HomePage.module.css";
import Navigation from "../components/home/Navigation";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import PlatformSection from "../components/home/PlatformSection";
import FoundersSection from "../components/home/FoundersSection";

const HomePage = () => {
	return (
		<main className={styles.homepage}>
			<HeroSection />
			<AboutSection />
			<div className={styles.mapBackground}>
				<PlatformSection />
				<FoundersSection />
			</div>
		</main>
	);
};

export default HomePage;

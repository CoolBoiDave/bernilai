import React from "react";
import styles from "./HomePage.module.css";
import background1 from "../../assets/background1.png";
import bernilaiLogoWhite from "../../assets/bernilai-white.png";

const HeroSection = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroContainer}>
				<h1 className={styles.welcometo}>Welcome to</h1>
				<img
					src={bernilaiLogoWhite}
					alt='Bernilai Logo'
					className={styles.bernilaiLogoWhite1}
				/>
				<p className={styles.foroncewaslostbutfoundahome}>
					For once was lost but found a home
				</p>
			</div>
		</section>
	);
};

export default HeroSection;

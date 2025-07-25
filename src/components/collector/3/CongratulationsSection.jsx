"use client";
import React from "react";
import styles from "../../../pages/Collector3.module.css";

const CongratulationsSection = () => {
	return (
		<section className={styles.congratulationsSection}>
			<h1 className={styles.formSubmittedTitle}>FORM SUBMITTED!</h1>

			<div className={styles.animationContainer}>
				<img
					src='https://api.builder.io/api/v1/image/assets/TEMP/bae357401424dba9da9e9d189ac4b6a533841adb?width=792'
					alt='Congratulations animation'
					className={styles.congratulationsAnimation}
				/>
			</div>

			<p className={styles.thankYouMessage}>
				Thank you for sending your items to Bernilai and joining us on
				this journey to initiate meaningful changes. May the items that
				were once lost find a new home in the community!
			</p>

			<p className={styles.noteMessage}>
				<span className={styles.noteHighlight}>NOTE</span>: You will be
				contacted shortly by our officer for more details. Always check
				your notifications for further updates!
			</p>
		</section>
	);
};

export default CongratulationsSection;

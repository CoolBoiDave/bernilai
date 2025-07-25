import React from "react";
import styles from "../../pages/Collector2.module.css";

const CongratulationsSection = () => {
	return (
		<section className={styles.congratulationsSection}>
			<div className={styles.emojiAnimation}>
				<img
					src='https://api.builder.io/api/v1/image/assets/TEMP/4375bc1bbfad9342145c59bd9a29c7c064f2e613?width=680'
					alt='Celebration emoji'
					className={styles.emojiImage}
				/>
			</div>

			<h1 className={styles.congratulationsTitle}>Nicely Done!</h1>

			<p className={styles.instructionText}>
				Before you submit this form, please choose the option(s) below
				to finalize your form submission.
			</p>

			<div className={styles.congratulationsAnimation}>
				<img
					src='https://api.builder.io/api/v1/image/assets/TEMP/1e8cf8c8320380b7ddcaca1c90de2c2c4b6f29a2?width=514'
					alt='Congratulations animation'
					className={styles.congratulationsImage}
				/>
			</div>
		</section>
	);
};

export default CongratulationsSection;

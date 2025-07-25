import CongratulationsSection from "../components/collector/3/CongratulationsSection";
import BackToHomeButton from "../components/collector/3/BackToHomeButton";
import styles from "./Collector3.module.css";

const Collector3 = () => {
	return (
		<main className={styles.collector3}>
			<img
				src='https://api.builder.io/api/v1/image/assets/TEMP/1039bd935e9e33dbaf6ab794f602d968a6af4dd3?width=3940'
				alt=''
				className={styles.backgroundImage}
			/>

			<div className={styles.topAnimationPlaceholder} />

			<CongratulationsSection />

			<BackToHomeButton />

			<footer className={styles.footer}>
				<img
					src='https://api.builder.io/api/v1/image/assets/TEMP/e2877c54df8a76abfc8e98399ba81b83c5ac5a4a?width=510'
					alt='Bernilai Logo'
					className={styles.footerLogo}
				/>
			</footer>
		</main>
	);
};

export default Collector3;

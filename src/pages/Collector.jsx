import HeroSection from "../components/collector/HeroSection";
import FormSection from "../components/collector/FormSection";
import styles from "./Collector.module.css";

function Collector() {
	return (
		<main className={styles.collector}>
			<HeroSection />
			<FormSection />
		</main>
	);
}

export default Collector;

import SignupForm from "../components/SignupForm";
import styles from "./Login.module.css";

export default function SignUpPage() {
	return (
		<div className={styles.login}>
			<img
				src='https://api.builder.io/api/v1/image/assets/TEMP/3efc5b928423e868beca8f36dda7c9515007e7bd?width=2458'
				alt='Login background illustration'
				className={styles.backgroundImage}
			/>

			<SignupForm mode={"sign up"} />
		</div>
	);
}

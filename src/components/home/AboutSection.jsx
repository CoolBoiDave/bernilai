import React from "react";
import styles from "./HomePage.module.css";

const AboutSection = () => {
	return (
		<section className={styles.aboutus}>
			<div>
				<h2 className={styles.title}>ABOUT US</h2>
				<div className={styles.subtitle}>
					<h3 className={styles.underratedenvironmentalproblems}>
						Underrated environmental problems
					</h3>

					<div
						dangerouslySetInnerHTML={{
							__html: '<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon" style="width: 49px; height: 49px; flex-shrink: 0"> <g clip-path="url(#clip0_1_257)"> <path d="M49.0005 44.6853L38.6285 34.3133C45.7263 24.84 43.8004 11.4065 34.3272 4.30875C24.8539 -2.78899 11.4202 -0.863249 4.3225 8.61013C-2.77523 18.0835 -0.849393 31.517 8.62397 38.6147C16.2353 44.3174 26.6943 44.3223 34.311 38.6268L44.6829 48.9988L49.0005 44.6853ZM6.29245 21.5436C6.29245 13.1196 13.1214 6.29066 21.5453 6.29066C29.9692 6.29066 36.7982 13.1197 36.7982 21.5436C36.7982 29.9675 29.9692 36.7965 21.5453 36.7965C13.1251 36.7876 6.30135 29.9638 6.29245 21.5436ZM30.6441 19.459C30.6441 24.7305 21.4924 31.2037 21.4924 31.2037C21.4924 31.2037 12.3407 24.7304 12.3407 19.459C12.221 16.8079 14.2661 14.5583 16.9166 14.4256C19.5676 14.5573 21.6133 16.8075 21.4924 19.459C21.3727 16.8079 23.4178 14.5583 26.0683 14.4256C28.7193 14.5572 30.765 16.8075 30.6441 19.459Z" fill="#374957"></path> </g> <defs> <clipPath id="clip0_1_257"> <rect width="49" height="49" fill="white"></rect> </clipPath> </defs> </svg>',
						}}
						style={{ marginLeft: "2rem" }}
					/>
				</div>
				<div className={styles.aboutus__detail}>
					<h3 className={styles.didyouknow}>DID YOU KNOW?</h3>
					<p className={styles.paragraph}>
						Many institutions face challenges with their lost and
						found cabinets being filled with items that used to
						belong to others.
					</p>

					<div className={styles.aboutus__imgcontainer}>
						<img
							src='https://api.builder.io/api/v1/image/assets/TEMP/88a04a45b9456659936d1b0bb8c7941e283d2f18?width=1090'
							alt='Lost and found items'
							className={styles.aboutus__img}
						/>
						<img
							src='https://api.builder.io/api/v1/image/assets/TEMP/1a7263ea1e49f3146270d71c064da08be0aad920?width=1292'
							alt='Environmental impact'
							className={styles.aboutus__img}
						/>
					</div>
					<p className={styles.paragraph}>
						This urgent problem needs solving to promote
						responsibility and sustainable reuse. It helps people in
						need access free items.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;

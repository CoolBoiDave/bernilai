import React from "react";
import styles from "./HomePage.module.css";
import platform from "../../assets/platform.png";

const PlatformSection = () => {
	return (
		<section className={styles.platformSection}>
			<h2 className={styles.born}>
				And so, <span className={styles.born2}>BERNILAI </span> was
				born!
			</h2>
			<div className={styles.komputer}>
				<div
					dangerouslySetInnerHTML={{
						__html: '<svg width="866" height="535" viewBox="0 0 866 535" fill="none" xmlns="http://www.w3.org/2000/svg" class="computer-frame" style="width: 850px; height: 520px; position: absolute; left: 0; top: 0"> <g filter="url(#filter0_d_3_335)"> <path d="M0 40C0 17.9086 17.9086 0 40 0H810C832.091 0 850 17.9086 850 40V480C850 502.091 832.091 520 810 520H40C17.9086 520 0 502.091 0 480V40Z" fill="#32480A"></path> </g> <defs> <filter id="filter0_d_3_335" x="0" y="0" width="866" height="535" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dx="12" dy="11"></feOffset> <feGaussianBlur stdDeviation="2"></feGaussianBlur> <feComposite in2="hardAlpha" operator="out"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_335"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_335" result="shape"></feBlend> </filter> </defs> </svg>',
					}}
				/>
				<img
					src={platform}
					alt='Platform interface'
					className={styles.platform__img}
				/>
				<div className={styles.komputer1} />
				<div className={styles.komputer2} />
			</div>
			<div
				dangerouslySetInnerHTML={{
					__html: '<svg width="604" height="409" viewBox="0 0 604 409" fill="none" xmlns="http://www.w3.org/2000/svg" class="tablet-frame-1" style="width: 559px; height: 353px; transform: rotate(5.684deg); position: absolute; right: 20rem; top: 20rem"> <g filter="url(#filter0_d_3_353)"> <path d="M28.0397 36.8033C30.2278 14.8205 49.8221 -1.22621 71.8049 0.961865L548.301 48.3904C570.283 50.5785 586.33 70.1728 584.142 92.1556L557.064 364.197C554.876 386.179 535.282 402.226 513.299 400.038L36.8033 352.61C14.8205 350.422 -1.22626 330.827 0.961818 308.844L28.0397 36.8033Z" fill="#32480A"></path> </g> <defs> <filter id="filter0_d_3_353" x="0.762146" y="0.762207" width="602.58" height="407.476" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dx="15" dy="4"></feOffset> <feGaussianBlur stdDeviation="2"></feGaussianBlur> <feComposite in2="hardAlpha" operator="out"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_353"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_353" result="shape"></feBlend> </filter> </defs> </svg>',
				}}
			/>
			<img
				src='https://api.builder.io/api/v1/image/assets/TEMP/de6d21244f3fbce23386abed8d89bea80debb9bf?width=912'
				alt='Platform tablet view'
				className={styles.image9}
			/>
			<div
				dangerouslySetInnerHTML={{
					__html: '<svg width="599" height="399" viewBox="0 0 599 399" fill="none" xmlns="http://www.w3.org/2000/svg" class="tablet-frame-2" style="width: 559px; height: 353px; transform: rotate(-4.394deg); position: absolute; right: 30rem; top: 40rem "> <g filter="url(#filter0_d_3_357)"> <path d="M1.06461 80.6988C-0.627928 58.6723 15.856 39.4443 37.8824 37.7518L515.325 1.0645C537.352 -0.628036 556.58 15.8559 558.272 37.8823L579.218 310.464C580.911 332.491 564.427 351.719 542.4 353.411L64.9572 390.098C42.9308 391.791 23.7027 375.307 22.0101 353.281L1.06461 80.6988Z" fill="#476411"></path> </g> <defs> <filter id="filter0_d_3_357" x="0.945129" y="0.945068" width="597.392" height="397.273" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dx="15" dy="4"></feOffset> <feGaussianBlur stdDeviation="2"></feGaussianBlur> <feComposite in2="hardAlpha" operator="out"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_357"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_357" result="shape"></feBlend> </filter> </defs> </svg>',
				}}
			/>
			<p className={styles.text1}>
				BERNILAI is a platform that connects institutions with
				lost-and-found items to people and communities in need, giving
				these items a second chance through selective disposal.
			</p>
		</section>
	);
};

export default PlatformSection;

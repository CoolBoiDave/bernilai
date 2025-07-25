import React from "react";
import styles from "./HomePage.module.css";

const FounderCard = ({
	name,
	image,
	className,
	imageClassName,
	nameClassName,
	backgroundClassName,
}) => {
	return (
		<article className={className}>
			<div
				dangerouslySetInnerHTML={{
					__html: `<svg width="451" height="451" viewBox="0 0 451 451" fill="none" xmlns="http://www.w3.org/2000/svg" class="founder-circle" style="width: 450px; height: 450px; position: absolute; transform: rotate(-4.917deg); left: 0; top: 7px; z-index: 1"> <circle cx="225.456" cy="225.456" r="225" transform="rotate(-4.91658 225.456 225.456)" fill="#537E72"></circle> </svg>`,
				}}
			/>
			<div
				dangerouslySetInnerHTML={{
					__html: `<svg width="79" height="72" viewBox="0 0 79 72" fill="none" xmlns="http://www.w3.org/2000/svg" class="founder-highlight" style="width: 77px; height: 71px; transform: rotate(-4.917deg); position: absolute; left: 183px; top: -2rem; z-index: 5"> <ellipse cx="39.5" cy="35.6486" rx="38.602" ry="35.4708" transform="rotate(-4.91658 39.5 35.6486)" fill="#FBFFFE"></ellipse> </svg>`,
				}}
			/>
			<img src={image} alt={name} className={imageClassName} />
			<div className={backgroundClassName} />
			<h3 className={nameClassName}>{name}</h3>
		</article>
	);
};

const FoundersSection = () => {
	return (
		<section>
			<h2 className={styles.thefounders}>THE FOUNDERS</h2>
			<div className={styles.founders}>
				<FounderCard
					name='BENITTA N.S'
					image='https://api.builder.io/api/v1/image/assets/TEMP/6c83c13a5ae450a47c0f5f04152290f0a45b59b3?width=648'
					className={styles.benitta}
					imageClassName={styles.benitta__img}
					nameClassName={styles.benittans}
					backgroundClassName={styles.div10}
				/>
				<FounderCard
					name='LYAN C.A'
					image='https://api.builder.io/api/v1/image/assets/TEMP/6f186edcc052e7a7e6fc55abf0f5297847a881cb?width=656'
					className={styles.lyan}
					imageClassName={styles.lyan__img}
					nameClassName={styles.lyanca}
					backgroundClassName={styles.div11}
				/>
				<FounderCard
					name='NELVIN B'
					image='https://api.builder.io/api/v1/image/assets/TEMP/11b6b11778233ab84265c29fa7863bf0f66e440c?width=581'
					className={styles.nelvin}
					imageClassName={styles.nelvin__img}
					nameClassName={styles.nelvinb}
					backgroundClassName={styles.div12}
				/>
				<FounderCard
					name='DAVE W.G'
					image='https://api.builder.io/api/v1/image/assets/TEMP/f8330501130bbe7653cf05e62f34df8ad29ea065?width=692'
					className={styles.dave}
					imageClassName={styles.dave__img}
					nameClassName={styles.davewg}
					backgroundClassName={styles.div13}
				/>
				<div className={styles.line1} />
				<div className={styles.line2} />
				<div className={styles.line3} />
				<div className={styles.line4} />
			</div>
		</section>
	);
};

export default FoundersSection;

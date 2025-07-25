import { Link } from "react-router";

export default function PantiInfo({
	panti,
	verifyPanti,
	verifying,
	verified,
	socialseek,
	ssresults,
	searchAI,
	airesults,
}) {
	function truncateText(text, maxLength) {
		return text.length > maxLength
			? text.slice(0, maxLength) + "..."
			: text;
	}

	return (
		<>
			<div className={panti ? "panti" : "panti--noshow"}>
				<h2 className='panti__title'>{panti.title}</h2>
				<p className='panti__info'>
					<span className='panti__bold'>Address</span> :{" "}
					{panti.address ? panti.address : "-"}
				</p>
				<p className='panti__info'>
					<span className='panti__bold'>Contact</span> :{" "}
					{panti.phone ? panti.phone : "-"}
				</p>

				<p className='panti__info'>
					<span className='panti__bold'>Website</span> :{" "}
					{panti.website ? (
						<a href={panti.website} target='_blank'>
							{panti.website}
						</a>
					) : (
						"-"
					)}
				</p>

				<div className='line'></div>

				<div className='panti__data'>
					<div className='panti__group'>
						<i className='fa-regular fa-star'></i>
						<p className='panti__text'>Rating</p>
						<p className='panti__text'>
							{panti.rating ? panti.rating : "-"}
						</p>
					</div>
					<div className='panti__group'>
						<i className='fa-solid fa-file-pen'></i>
						<p className='panti__text'>Reviews</p>
						<p className='panti__text'>
							{panti.reviews ? panti.reviews : "-"}
						</p>
					</div>
					<div className='panti__group'>
						<i className='fa-regular fa-clock'></i>
						<p className='panti__text'>Hours</p>
						<p className='panti__text'>
							{panti.openState ? panti.openState : "-"}
						</p>
					</div>
				</div>

				<button
					className={"btn"}
					onClick={() => verifyPanti(panti)}
					disabled={verifying}
				>
					{verifying ? "Verifying..." : "Verify Panti"}
				</button>

				{verified && <p>{verified}</p>}

				<button
					className='btn'
					style={{ marginTop: "2rem" }}
					onClick={() => socialseek(panti)}
				>
					Find Socials
				</button>
				{ssresults &&
					ssresults.map((res, i) => (
						<a href={res} target='_blank'>
							<p style={{ margin: ".5rem 0" }}>
								{truncateText(res, 50)}
							</p>
						</a>
					))}

				<button
					className='btn'
					style={{ marginTop: "2rem" }}
					onClick={() => searchAI(panti)}
				>
					Search AI
				</button>

				{airesults && <p>{airesults}</p>}

				<Link to={`/collector?panti=${panti.title}`}>
					<button className='btn' style={{ marginTop: "2rem" }}>
						Donate to Panti
					</button>
				</Link>
			</div>
		</>
	);
}

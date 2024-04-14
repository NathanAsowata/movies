import Image from "next/image";
import Ratings from "../Ratings";
import Link from "next/link";
import styles from "./style.module.scss";

type cardProp = {
	link: string;
	img_url: string;
	name: string;
	isPerson: boolean;
	additonalInfo: number | string;
};

const Card = ({ link, img_url, name, isPerson, additonalInfo }: cardProp) => {
	let image = img_url;

	if (
		img_url === "https://image.tmdb.org/t/p/originalnull" ||
		img_url === "https://image.tmdb.org/t/p/originalundefined&w=640&q=75"
	) {
		image = "/fallback.png";
	}

	// Skip non existent movies, tv shows and people
	if (additonalInfo === undefined) {
		return null;
	}

	return (
		<div className={styles.card}>
			<Link href={link}>
				<Image
					src={image}
					alt={`${name} poster`}
					width={248}
					height={375}
					className={styles.image}
				/>
				<section className={styles.content}>
					<h5 className={styles.name}>{name}</h5>
					{!isPerson ? (
						<Ratings ratings={Number(additonalInfo)} />
					) : (
						<p className={styles.info}>{additonalInfo}</p>
					)}
				</section>
			</Link>
		</div>
	);
};

export default Card;

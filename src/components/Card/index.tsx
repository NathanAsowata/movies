import Image from "next/image";
import Ratings from "../Ratings";
import Link from "next/link";
import styles from "./style.module.scss";
import { imageValidator } from "@/utils/functions";
import { cardProp } from "@/utils/types";

const Card = ({ link, img_url, name, isPerson, additonalInfo }: cardProp) => {
	// Use a fallback image if the image does not exist
	const image = imageValidator(img_url);

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

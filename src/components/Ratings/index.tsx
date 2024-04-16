import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./style.module.scss";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Ratings = ({ ratings }: { ratings: number }) => {
	const rating = ratings || 1;

	const filledStars = Math.floor(rating / 2);
	const hasHalfStar = rating % 2 >= 1;
	const totalStars = 5;
	const emptyStarsCount = Math.max(
		0,
		totalStars - filledStars - (hasHalfStar ? 1 : 0),
	);

	return (
		<div data-testid="ratings">
			{[...Array(filledStars)].map((_, i) => (
				<FaStar className={styles.stars} key={i} />
			))}

			{hasHalfStar && <FaRegStarHalfStroke className={styles.stars} />}

			{[...Array(emptyStarsCount)].map((_, i) => (
				<FaRegStar className={styles.stars} key={`empty-${i}`} />
			))}
		</div>
	);
};

export default Ratings;

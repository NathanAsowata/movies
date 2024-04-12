import { movieCardProps } from "@/utils/types";
import Card from "./Card";

const MovieCard = ({ movie }: { movie: movieCardProps }) => {
	const link = `/movies/${movie.id}`;
	const img_url = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
	const name = movie.title;
	const isPerson = false;
	const additonalInfo = movie.vote_average;

	return (
		<Card
			link={link}
			img_url={img_url}
			name={name}
			isPerson={isPerson}
			additonalInfo={additonalInfo}
		/>
	);
};

export default MovieCard;

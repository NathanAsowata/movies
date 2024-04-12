"use client";
import { useState, useEffect } from "react";

import styles from "./page.module.scss";
import MovieCard from "@/components/MovieCard";
import { movieCardProps } from "@/utils/types";

const UpcomingMovies = () => {
	const [movies, setMovies] = useState<movieCardProps[]>([]);

	async function getMovies() {
		const res = await fetch(`/api/movies/upcoming`);
		const data = await res.json();
		setMovies(data.results);
	}

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>Upcoming Movies</h1>
			</header>
			<main className={styles.content}>
				{movies &&
					movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
			</main>
		</div>
	);
};

export default UpcomingMovies;

"use client";

import { Suspense, useEffect, useState } from "react";
import styles from "./page.module.scss";
import {
	movieCardProps,
	movieDetailsType,
	personCardProps,
} from "@/utils/types";
import Image from "next/image";
import Ratings from "@/components/Ratings";
import PersonCard from "@/components/PersonCard";
import MovieCard from "@/components/MovieCard";
import { formatDate, formatRuntime, imageValidator } from "@/utils/functions";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import NoContent from "@/components/NoContent";

const MovieDetails = ({ params }: { params: { id: string } }) => {
	const [movieDetails, setMovieDetails] = useState<movieDetailsType>();
	const [extraDetails, setExtraDetails] = useState([]);
	const [activeTab, setActiveTab] = useState(1);
	const [selectedTab, setSelectedTab] = useState("cast");

	const movieID = params.id;

	async function getMovieDetails() {
		const res = await fetch(`/api/movies/${movieID}`);
		const data = await res.json();
		setMovieDetails(data);
	}

	async function getExtraDetails(type: string) {
		const res = await fetch(`/api/movies/${movieID}/${type}`);
		const data = await res.json();
		setExtraDetails(data);
	}

	function handleTabSelection(tabName: string, tabNumber: number) {
		setActiveTab(tabNumber);
		setSelectedTab(tabName);
		getExtraDetails(tabName);
	}

	function tabStyle(tabNumber: number) {
		return {
			cursor: "pointer",
			color: activeTab === tabNumber ? "white" : "black",
			backgroundColor: activeTab === tabNumber ? "#2118FF" : "#E5E8FF",
		};
	}

	useEffect(() => {
		getMovieDetails();
		getExtraDetails("cast");
	}, []);

	return (
		<>
			<header className={styles.header}>
				{movieDetails && (
					<div className={styles.details}>
						<Image
							src={imageValidator(
								`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`,
							)}
							alt={movieDetails.title}
							priority
							width={250}
							height={375}
							className={styles.poster}
						/>
						<div className={styles.summary}>
							<h1>{movieDetails.title}</h1>

							<div className={styles.ratings}>
								<Ratings ratings={movieDetails.vote_average} />
								<span>{`${movieDetails.vote_count.toLocaleString()} Reviews`}</span>
							</div>

							<div className={styles.extraDetails}>
								{movieDetails.release_date !== "" && (
									<p>{formatDate(movieDetails.release_date)}</p>
								)}

								<p>
									{movieDetails.genres.map((genre, index) => (
										<span key={genre.id}>
											{genre.name}
											{index < movieDetails.genres.length - 1 ? ", " : ""}
										</span>
									))}
								</p>

								{movieDetails.status === "Released" && (
									<p>{formatRuntime(movieDetails.runtime)}</p>
								)}
							</div>

							<p className={styles.overview}>{movieDetails.overview}</p>
						</div>
					</div>
				)}
			</header>
			<main className={styles.main}>
				<section className={styles.tabs}>
					<h3
						className={styles.tab}
						style={tabStyle(1)}
						onClick={() => handleTabSelection("cast", 1)}
					>
						Cast
					</h3>
					<h3
						className={styles.tab}
						style={tabStyle(2)}
						onClick={() => handleTabSelection("similar", 2)}
					>
						Similar Movies
					</h3>
				</section>

				<Suspense fallback={<LoadingSkeleton />}>
					{extraDetails.length === 0 && (
						<NoContent message="No data available" />
					)}
					<section className={styles.content}>
						{selectedTab === "cast" &&
							extraDetails.map((person: personCardProps, index) => (
								<PersonCard
									key={`person-${person.id}-index-${index}`}
									person={person}
								/>
							))}

						{selectedTab === "similar" &&
							extraDetails.map((movie: movieCardProps, index) => (
								<MovieCard
									key={`movie-${movie.id}-index-${index}`}
									movie={movie}
								/>
							))}
					</section>
				</Suspense>
			</main>
		</>
	);
};

export default MovieDetails;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { personDetailsType } from "@/utils/types";
import { getAge, formatDate } from "@/utils/functions";
import MovieCard from "@/components/MovieCard";
import TvCard from "@/components/TvCard";
import NoContent from "@/components/NoContent";

const PersonDetails = ({ params }: { params: { id: string } }) => {
	const [personDetails, setPersonDetails] = useState<personDetailsType>();

	const personID = params.id;

	async function getpersonDetails() {
		const res = await fetch(`/api/people/${personID}`);
		const data = await res.json();
		setPersonDetails(data);
	}

	useEffect(() => {
		getpersonDetails();
	}, []);

	return (
		<>
			<header className={styles.header}>
				{personDetails && (
					<div className={styles.details}>
						<Image
							src={`https://image.tmdb.org/t/p/original${personDetails.profile_path}`}
							alt={personDetails.name}
							width={250}
							height={375}
							className={styles.poster}
						/>
						<div className={styles.summary}>
							<h1>{personDetails.name}</h1>

							<div className={styles.extraDetails}>
								{personDetails.deathday ? (
									<p>{`${formatDate(personDetails.birthday)} - ${formatDate(
										personDetails.deathday,
									)} (age ${getAge(
										personDetails.birthday,
										personDetails.deathday,
									)} years)`}</p>
								) : (
									<p>{`${formatDate(personDetails.birthday)} (age ${getAge(
										personDetails.birthday,
									)} years)`}</p>
								)}
							</div>

							<p className={styles.biography}>
								{personDetails.biography.split("\n").map((line, index) => (
									<React.Fragment key={index}>
										{line}
										<br />
									</React.Fragment>
								))}
							</p>
						</div>
					</div>
				)}
			</header>
			<main className={styles.main}>
				<h1 className={styles.creditsHeading}>Movies and TV Credits</h1>

				{personDetails?.combined_credits.cast.length === 0 && (
					<NoContent message="No data available" />
				)}

				<section className={styles.content}>
					{personDetails &&
						personDetails.combined_credits.cast.map((item, index) => {
							switch (item.media_type) {
								case "movie":
									return (
										<MovieCard key={`movie-${item.id}-index-${index}`} movie={item} />
									);
								case "tv":
									return <TvCard key={`tv-${item.id}-index-${index}`} tv={item} />;
								default:
									return null;
							}
						})}
				</section>
			</main>
		</>
	);
};

export default PersonDetails;

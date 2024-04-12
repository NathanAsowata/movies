"use client";

import { tvCardProps } from "@/utils/types";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import TvCard from "@/components/TvCard";

const UpcomingTVShows = () => {
	const [tvShows, setTVShows] = useState<tvCardProps[]>([]);

	async function getTVShows() {
		const res = await fetch(`/api/tv/upcoming`);
		const data = await res.json();
		setTVShows(data.results);
	}

	useEffect(() => {
		getTVShows();
	}, []);

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>Upcoming TV Shows</h1>
			</header>
			<main className={styles.content}>
				{tvShows &&
					tvShows.map((tv, index) => (
						<TvCard key={`tv-${tv.id}-index-${index}`} tv={tv} />
					))}
			</main>
		</div>
	);
};

export default UpcomingTVShows;

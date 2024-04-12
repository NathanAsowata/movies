"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { personCardProps, tvCardProps, tvDetailsType } from "@/utils/types";
import Image from "next/image";
import Ratings from "@/components/Ratings";
import PersonCard from "@/components/PersonCard";
import TvCard from "@/components/TvCard";
import { formatDate } from "@/utils/functions";

const TVDetails = ({ params }: { params: { id: string } }) => {
	const [tvDetails, setTVDetails] = useState<tvDetailsType>();
	const [extraDetails, setExtraDetails] = useState([]);
	const [activeTab, setActiveTab] = useState(1);
	const [selectedTab, setSelectedTab] = useState("cast");

	const tvID = params.id;

	async function getTVDetails() {
		const res = await fetch(`/api/tv/${tvID}`);
		const data = await res.json();
		setTVDetails(data);
	}

	async function getExtraDetails(type: string) {
		const res = await fetch(`/api/tv/${tvID}/${type}`);
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
		getTVDetails();
		getExtraDetails("cast");
	}, []);

	return (
		<>
			<header className={styles.header}>
				{tvDetails && (
					<div className={styles.details}>
						<Image
							src={`https://image.tmdb.org/t/p/original${tvDetails.poster_path}`}
							alt={tvDetails.name}
							width={250}
							height={375}
							className={styles.poster}
						/>
						<div className={styles.summary}>
							<h1>{tvDetails.name}</h1>

							<div className={styles.ratings}>
								<Ratings ratings={tvDetails.vote_average} />
								<span>{`${tvDetails.vote_count.toLocaleString()} Reviews`}</span>
							</div>

							<div className={styles.extraDetails}>
								<p>
									{tvDetails.number_of_seasons.toLocaleString()}{" "}
									{tvDetails.number_of_seasons === 1 ? "Season" : "Seasons"}{" "}
									<span className={styles.dot}>&middot;</span>
									{tvDetails.number_of_episodes.toLocaleString()}{" "}
									{tvDetails.number_of_episodes === 1 ? "Episode" : "Episodes"}
								</p>

								{tvDetails.first_air_date !== "" && (
									<p>
										{formatDate(tvDetails.first_air_date)} -{" "}
										{tvDetails.in_production
											? "Present"
											: `${formatDate(tvDetails.last_air_date)}`}
									</p>
								)}

								<p>
									{tvDetails.genres.map((genre, index) => (
										<span key={genre.id}>
											{genre.name}
											{index < tvDetails.genres.length - 1 ? ", " : ""}
										</span>
									))}
								</p>
							</div>

							<p className={styles.overview}>{tvDetails.overview}</p>
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
						style={tabStyle(3)}
						onClick={() => handleTabSelection("similar", 3)}
					>
						Similar Shows
					</h3>
				</section>

				<section className={styles.content}>
					{selectedTab === "cast" &&
						extraDetails.map((person: personCardProps) => (
							<PersonCard key={person.id} person={person} />
						))}

					{selectedTab === "similar" &&
						extraDetails.map((tv: tvCardProps) => (
							<TvCard key={tv.id} tv={tv} />
						))}
				</section>
			</main>
		</>
	);
};

export default TVDetails;

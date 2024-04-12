"use client";

import SearchBar from "@/components/SearchBar";
import styles from "./page.module.scss";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import { searchResultType } from "@/utils/types";
import TvCard from "@/components/TvCard";
import PersonCard from "@/components/PersonCard";
import NoContent from "@/components/NoContent";
import LoadingSkeleton from "@/components/LoadingSkeleton";

const Search = () => {
	const [searchResults, setSearchResults] = useState<searchResultType[]>([]);
	const [isEmpty, setIsEmpty] = useState(false);
	const [noResult, setNoResult] = useState(false);

	const parameters = useSearchParams();
	const userInput = parameters.get("q") || "";

	async function getSearchResults(query: string) {
		if (query === "") {
			setIsEmpty(true);
			setSearchResults([]);
			setNoResult(false);
		} else {
			const url = `/api/search?query=${query}`;
			const res = await fetch(url);
			const data = await res.json();

			setIsEmpty(false);

			if (data.results.length > 0) {
				setNoResult(false);
				setSearchResults(data.results);
			} else {
				setNoResult(true);
				setSearchResults([]);
			}
		}
	}

	// Load search result by default
	useEffect(() => {
		getSearchResults(userInput);
	}, [userInput]);

	return (
		<>
			<main className={styles.container}>
				<section className={styles.searchContainer}>
					<SearchBar currentQuery={userInput} />
				</section>

				{isEmpty && (
					<NoContent message="Try typing 'Dune', 'Spiderman' or 'Suits'..." />
				)}

				{noResult && (
					<NoContent message="No results for this search. Try something else." />
				)}

				<Suspense fallback={<LoadingSkeleton />}>
					<section className={styles.searchResults}>
						{searchResults &&
							searchResults.map((item, index) => {
								switch (item.media_type) {
									case "movie":
										return (
											<MovieCard
												key={`movie-${item.id}-index-${index}`}
												movie={item}
											/>
										);
									case "tv":
										return (
											<TvCard key={`tv-${item.id}-index-${index}`} tv={item} />
										);
									case "person":
										return (
											<PersonCard
												key={`person-${item.id}-index-${index}`}
												person={item}
											/>
										);
									default:
										return null;
								}
							})}
					</section>
				</Suspense>
			</main>
		</>
	);
};

export default Search;

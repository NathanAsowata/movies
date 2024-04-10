"use client";

import SearchBar from "@/components/SearchBar";
import styles from "./page.module.scss";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import { searchResultType } from "@/utils/types";
import TvCard from "@/components/TvCard";
import PersonCard from "@/components/PersonCard";

const Search = () => {
  const [searchResults, setSearchResults] = useState<searchResultType[]>([]);

  const parameters = useSearchParams();
  const userInput = parameters.get("q") || "john";

  async function getSearchResults(query: string) {
    const url = `/api/search?query=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    setSearchResults(data.results);
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

        <section className={styles.searchResults}>
          {searchResults &&
            searchResults.map((item) => {
              switch (item.media_type) {
                case "movie":
                  return <MovieCard key={item.id} movie={item} />;
                case "tv":
                  return <TvCard key={item.id} tv={item} />;
                case "person":
                  return <PersonCard key={item.id} person={item} />;
                default:
                  return null;
              }
            })}
        </section>
      </main>
    </>
  );
};

export default Search;

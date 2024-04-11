"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { movieDetailsType } from "@/utils/types";
import Image from "next/image";
import Ratings from "@/components/Ratings";
import Link from "next/link";

const MovieDetails = ({ params }: { params: { id: string } }) => {
  const [movieDetails, setMovieDetails] = useState<movieDetailsType>();
  const [activeTab, setActiveTab] = useState(1);
  const [selectedTab, setSelectedTab] = useState("movie")

  const movieID = params.id;

  async function getMovieDetails() {
    const res = await fetch(`/api/movies/${movieID}`);
    const data = await res.json();

    setMovieDetails(data);
  }

    
  function handleTabSelection(tabName: string, tabNumber: number) {
    setActiveTab(tabNumber);
    setSelectedTab(tabName)
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
  }, []);

  return (
    <>
      {movieDetails && (
        <header className={styles.header}>
          <Image
            src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
            alt={movieDetails.title}
            width={250}
            height={375}
            className={styles.poster}
          />
          <div className={styles.summary}>
            <h1>{movieDetails.title}</h1>
            <p className={styles.ratings}>
              <Ratings ratings={movieDetails.vote_average} />
              <span>{`${movieDetails.vote_count.toLocaleString()} Reviews`}</span>
            </p>
            <p className={styles.overview}>{movieDetails.overview}</p>
            <Link
              href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
              target="_blank"
              className={styles.button}
            >
              Read More on IMDB
            </Link>
          </div>
        </header>
      )}
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
            onClick={() => handleTabSelection("media", 2)}
          >
            Media
          </h3>
        </section>
      </main>
    </>
  );
};

export default MovieDetails;

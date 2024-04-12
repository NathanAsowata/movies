"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { movieCardProps, movieDetailsType, personCardProps } from "@/utils/types";
import Image from "next/image";
import Ratings from "@/components/Ratings";
import Link from "next/link";
import PersonCard from "@/components/PersonCard";
import MovieCard from "@/components/MovieCard";
import { formatDate } from "@/utils/functions";

const MovieDetails = ({ params }: { params: { id: string } }) => {
  const [movieDetails, setMovieDetails] = useState<movieDetailsType>();
  const [extraDetails, setExtraDetails] = useState([])
  const [activeTab, setActiveTab] = useState(1);
  const [selectedTab, setSelectedTab] = useState("cast");

  const movieID = params.id;

  async function getMovieDetails() {
    const res = await fetch(`/api/movies/${movieID}`);
    const data = await res.json();
    setMovieDetails(data);
  }

  async function getExtraDetails(type:string) {
    const res  = await fetch(`/api/movies/${movieID}/${type}`)
    const data = await res.json()
    setExtraDetails(data)
  }

  function handleTabSelection(tabName: string, tabNumber: number) {
    setActiveTab(tabNumber);
    setSelectedTab(tabName);
    getExtraDetails(tabName)
  }

  function tabStyle(tabNumber: number) {
    return {
      cursor: "pointer",
      color: activeTab === tabNumber ? "white" : "black",
      backgroundColor: activeTab === tabNumber ? "#2118FF" : "#E5E8FF",
    };
  }

  function formatRuntime(runtime: number) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    const formattedRuntime = `${hours}h ${minutes}mins`;
    return formattedRuntime;
  }


  useEffect(() => {
    getMovieDetails();
    getExtraDetails("cast")
  }, []);

  return (
    <>
      <header className={styles.header}>
        {movieDetails && (
          <div className={styles.details}>
            <Image
              src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
              alt={movieDetails.title}
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

              <p className={styles.overview}>
                {movieDetails.overview}
              </p>
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

        <section className={styles.content}>
          {selectedTab === "cast" && (extraDetails.map((person: personCardProps) => (
            <PersonCard key={person.id} person={person} />
          )))}

          {selectedTab === "similar" && (extraDetails.map((movie: movieCardProps) => (
            <MovieCard key={movie.id} movie={movie} />
          )))}
        </section>
      </main>
    </>
  );
};

export default MovieDetails;

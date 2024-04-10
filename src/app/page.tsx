"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import SearchBar from "@/components/SearchBar";
import { movieCardProps, personCardProps, tvCardProps } from "@/utils/types";
import MovieCard from "@/components/MovieCard";
import TvCard from "@/components/TvCard";
import PersonCard from "@/components/PersonCard";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedTab, setSelectedTab] = useState("movie")
  const [selectedItems, setSelectedItems] = useState([])


  async function getSelectedItems (type:string):Promise<any> {
    const res = await fetch(`/api/trending?type=${type}`)
    const data = await res.json()
    setSelectedItems(data.results)
  }

  function handleTabSelection(tabName: string, tabNumber: number) {
    setActiveTab(tabNumber);
    setSelectedTab(tabName)
    getSelectedItems(tabName)
  }

  function tabStyle(tabNumber: number) {
    return {
      cursor: "pointer",
      color: activeTab === tabNumber ? "white" : "black",
      backgroundColor: activeTab === tabNumber ? "#2118FF" : "#E5E8FF",
    };
  }

  // Load the movies list by default
  useEffect(() => {
    getSelectedItems("movie")
  }, [])

  return (
    <>
      <header className={styles.header}>
        <SearchBar currentQuery="" />
      </header>
      <main className={styles.main}>
        <section className={styles.tabs}>
          <h3
            className={styles.tab}
            style={tabStyle(1)}
            onClick={() => handleTabSelection("movie", 1)}
          >
            Movies
          </h3>
          <h3
            className={styles.tab}
            style={tabStyle(2)}
            onClick={() => handleTabSelection("tv", 2)}
          >
            TV Shows
          </h3>
          <h3
            className={styles.tab}
            style={tabStyle(3)}
            onClick={() => handleTabSelection("person", 3)}
          >
            People
          </h3>
        </section>

        <section className={styles.content}>          
          {selectedTab === "movie" && (selectedItems.map((movie: movieCardProps) => (
            <MovieCard key={movie.id} movie={movie} />
          )))}

          {selectedTab === "tv" && (selectedItems.map((tv:tvCardProps) => (
            <TvCard key={tv.id} tv={tv} />
          )))}

          {selectedTab === "person" && (selectedItems.map((person:personCardProps) => (
            <PersonCard key={person.id} person={person} />
          )))}          
        </section>
      </main>
    </>
  );
};

export default Home;

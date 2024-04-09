import SearchBar from "@/components/SearchBar"
import styles from "./page.module.scss"

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <SearchBar />
      </header>
    </>
  )
}

export default Home
import Link from "next/link"
import styles from "./style.module.scss"


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>
            &copy; {new Date().getFullYear()}. All rights reserved. 
            Designed and built by&nbsp;
            <Link 
                href="https://www.nathanasowata.com/" 
                target="_blank">
                    Nathan Asowata
            </Link>. 
            Data provided by&nbsp;
            <Link 
                href="https://developer.themoviedb.org" 
                target="_blank">
                    TheMovieDB
            </Link>.
        </p>
    </footer>
  )
}

export default Footer
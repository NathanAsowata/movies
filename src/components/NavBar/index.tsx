"use client";

import Link from "next/link";
import styles from "./style.module.scss";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className={styles.nav}>
			<Link href="/" translate="no" className={styles.logo}>
				Movies
			</Link>

			<span className={styles.desktopMenu} data-testid="menu">
				<Link href="/">Home</Link>
				<Link href="/search">Search</Link>
				<Link href="/movies/upcoming">Upcoming Movies</Link>
				<Link href="/tv/upcoming"> Upcoming TV Shows</Link>
			</span>

			<HiMenuAlt3 className={styles.icon} onClick={() => setIsOpen(!isOpen)} />

			{isOpen && (
				<span className={styles.mobileMenu}>
					<Link href="/" onClick={() => setIsOpen(false)}>
						Home
					</Link>
					<Link href="/search" onClick={() => setIsOpen(false)}>
						Search
					</Link>
					<Link href="/movies/upcoming" onClick={() => setIsOpen(false)}>
						Upcoming Movies
					</Link>
					<Link href="/tv/upcoming" onClick={() => setIsOpen(false)}>
						{" "}
						Upcoming TV Shows
					</Link>
				</span>
			)}
		</nav>
	);
};

export default NavBar;

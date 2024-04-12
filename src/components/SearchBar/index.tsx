"use client";

import { FormEvent, useState } from "react";
import styles from "./style.module.scss";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { MdClose, MdErrorOutline } from "react-icons/md";

const SearchBar = ({ currentQuery }: { currentQuery: string }) => {
	const [userInput, setUserInput] = useState(currentQuery);
	const [errorMessage, setErrorMessage] = useState("");

	const router = useRouter();

	function getUserInput(e: FormEvent) {
		// Prevent page reload on submit
		e.preventDefault();

		// Regex to disallow special characters except space, column, and hashtag
		const regex = /^[a-zA-Z0-9 :#.,]*$/;

		// Validate user input
		if (userInput === " ") {
			setErrorMessage("Enter a valid search term");
		} else if (!regex.test(userInput)) {
			setErrorMessage("Enter only numbers, letters, spaces");
		} else {
			router.push(`/search?q=${userInput}`);
		}
	}

	// Reset error message after 2 seconds
	if (errorMessage) {
		setTimeout(() => setErrorMessage(""), 2000);
	}

	return (
		<form onSubmit={getUserInput}>
			<span className={styles.search}>
				<input
					type="text"
					placeholder="Find any movie, tv show or person..."
					className={styles.input}
					autoFocus
					required
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
				/>
				<button type="submit" className={styles.button}>
					<BsSearch />
				</button>
			</span>
			{errorMessage && (
				<p className={styles.error}>
					<MdErrorOutline className={styles.errorIcon} />
					{errorMessage}
				</p>
			)}
		</form>
	);
};

export default SearchBar;

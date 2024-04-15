"use client";

import "./globals.scss";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();

	const goBack = () => {
		router.back();
	};

	return (
		<html>
			<body>
				<NavBar />
				<main className="main">
					<div className="error">
						<h2 className="errorTitle">Something went wrong!</h2>
						<span className="buttonSpan">
							<button className="resetButton" onClick={() => reset()}>
								Try again
							</button>
							<button className="backButton" onClick={goBack}>
								Go Back
							</button>
						</span>
					</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}

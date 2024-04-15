import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "@/components/Card";

const movie = {
	link: "http://localhost:3000/movies/278",
	img_url: "/fallback.png",
	name: "Shawshank Redemption",
	isPerson: false,
	additonalInfo: 8.9,
};

test("Render values received as prop", () => {
	render(
		<Card
			link={movie.link}
			name={movie.name}
			img_url={movie.img_url}
			isPerson={movie.isPerson}
			additonalInfo={movie.additonalInfo}
		/>,
	);

    const movieTitle = screen.getByRole('heading')
    expect(movieTitle).toBeDefined()
});

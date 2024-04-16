import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Card from "@/components/Card";


const movie = {
    link: "http://localhost:3000",
    img_url: "/fallback.png",
    name: "Shawshank Redemption",
    isPerson: false,
    additionalInfo: 8.9,
};

test("renders provided title as a heading", () => {
    render(
        <Card
            link={movie.link}
            img_url={movie.img_url}
            name={movie.name}
            isPerson={movie.isPerson}
            additonalInfo={movie.additionalInfo}
        />,
    );

    expect(screen.findByRole('heading', {name: movie.name})).toBeDefined()
});


test("renders card as a link", () => {
    render(
        <Card
            link={movie.link}
            img_url={movie.img_url}
            name={movie.name}
            isPerson={movie.isPerson}
            additonalInfo={movie.additionalInfo}
        />,
    );

    expect(screen.findByRole('link')).toBeDefined()
})

test("contains an image", () => {
    render(
        <Card
            link={movie.link}
            img_url={movie.img_url}
            name={movie.name}
            isPerson={movie.isPerson}
            additonalInfo={movie.additionalInfo}
        />,
    );

    expect(screen.findByRole("img")).toBeDefined()
})
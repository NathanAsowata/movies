import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Ratings from "@/components/Ratings";

const ratings = 8;

test("accepts ratings values as prop", () => {
	render(<Ratings ratings={ratings} />);

	expect(screen.getByTestId("ratings")).toBeDefined();
});

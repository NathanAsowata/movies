import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import NoContent from "@/components/NoContent";

const message = "No content available";

test("renders provided message", () => {
	render(<NoContent message={message} />);

	expect(screen.findByDisplayValue(message)).toBeDefined();
});

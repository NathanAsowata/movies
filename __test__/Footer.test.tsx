import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Footer from "@/components/Footer";

test("renders footer content", () => {
    render(<Footer />)

    expect(screen.findByDisplayValue("All rights reserved")).toBeDefined()
})

test("renders correct copyright year", () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()

    expect(screen.findByDisplayValue(currentYear)).toBeDefined()
})
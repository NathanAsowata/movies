import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import NavBar from "@/components/NavBar";

test("logo exists as a link", () => {
    render(<NavBar />)

    const logo = screen.findByRole("link", {name: "Movies"})

    expect(logo).toBeDefined()
})


test("renders navigation menu", () => {
    render(<NavBar />)

    const menu = screen.findByTestId("menu")

    expect(menu).toBeDefined()
})
describe("Upcoming Movies", () => {
	it("should navigate to upcoming movies open a movie", () => {
		cy.visit("http://localhost:3000");

		cy.get('a[href*="movies/upcoming"]').click();

		cy.get("div").contains("Upcoming Movies");

		cy.get("div").find("h5").first().click();
	});
});

describe("Upcoming TV Shows", () => {
	it("should navigate to upcoming TV Shows open a movie", () => {
		cy.visit("http://localhost:3000");

		cy.get('a[href*="tv/upcoming"]').click();

		cy.get("div").contains("Upcoming TV Shows");

		cy.get("div").find("h5").first().click();
	});
});

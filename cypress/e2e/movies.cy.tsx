describe("Movies Page", () => {
	it("should allow users to find a movie", () => {
		cy.visit("http://localhost:3000/search");

		cy.get("div").contains("Try typing");

		cy.get("input").type("Shawshank");

		cy.get("button").click();

		cy.get("div").contains("Shawshank Redemption").click();
	});

	it("should show movie cast", () => {
		cy.visit("http://localhost:3000/search");

		cy.get("div").contains("Try typing");

		cy.get("input").type("Shawshank");

		cy.get("button").click();

		cy.get("div").contains("Shawshank Redemption").click();

		cy.get("h3").contains("Cast");

		cy.get("div").find("h5").first().click();
	});

	it("should show similar movies", () => {
		cy.visit("http://localhost:3000/search");

		cy.get("div").contains("Try typing");

		cy.get("input").type("Shawshank");

		cy.get("button").click();

		cy.get("div").contains("Shawshank Redemption").click();

		cy.get("h3").contains("Similar Movies").click();

		cy.get("div").find("h5").first().click();
	});

	it("should have a message when there is no similar movie available", () => {
		cy.visit("http://localhost:3000/search");

		cy.get("div").contains("Try typing");

		cy.get("input").type("Jennifer did");

		cy.get("button").click();

		cy.get("div").contains("Jennifer Did").click();

		cy.get("h3").contains("Similar Movies").click();

		cy.get("div").contains("No data available");
	});
});

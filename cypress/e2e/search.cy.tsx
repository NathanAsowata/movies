describe("Search Bar", () => {
	it("should use the search bar", () => {
		cy.visit("http://localhost:3000");

		cy.get("input").type("Shawshank");

		cy.get("button").click();

		cy.get("div").contains("Shawshank Redemption");
	});

	it("should not allow empty searches", () => {
		cy.visit("http://localhost:3000");

		cy.get("input").type(" ");

		cy.get("button").click();

		// Error message should be visible
		cy.get("p").should("be.visible");
	});
});

describe("Search Page", () => {
	it("should have a message when search page is empty", () => {
		cy.visit("http://localhost:3000/search");

		cy.get("div").contains("Try typing");
	});

	it("should allow users to find a movie", () => {
		cy.visit("http://localhost:3000/search");

		cy.get("div").contains("Try typing");

		cy.get("input").type("Shawshank");

		cy.get("button").click();

		cy.get("div").contains("Shawshank Redemption").click();
	});

	it("should allow users find a tv show", () => {
		cy.visit("http://localhost:3000/search");

		cy.get("div").contains("Try typing");

		cy.get("input").type("Silicon");

		cy.get("button").click();

		cy.get("div").contains("Silicon Valley").click();
	});

	it("should allow users find a person", () => {
		cy.visit("http://localhost:3000/search");

		cy.get("div").contains("Try typing");

		cy.get("input").type("Tobey");

		cy.get("button").click();

		cy.get("div").contains("Tobey Maguire").click();
	});

	it('should handle "Results not found" properly', () => {
		cy.visit("http://localhost:3000/search");

		cy.get("div").contains("Try typing");

		cy.get("input").type("Wedddddingg");

		cy.get("button").click();

		cy.get("div").contains("No results for this search");
	});
});

describe("Navigation", () => {
	it("should navigate to the search page", () => {
		// From the home page
		cy.visit("http://localhost:3000");

		// Find the link to 'search' and click it
		cy.get('a[href*="search"]').click();

		// The link should have a url /search
		cy.url().should("include", "/search");

		// The search page should contain "Try typing 'Dune', 'Spiderman' or 'Suits'..."
		cy.get("div").contains("Try typing 'Dune', 'Spiderman' or 'Suits'...");
	});

	it("should navigate to upcoming movies page", () => {
		cy.visit("http://localhost:3000");

		cy.get('a[href*="movies/upcoming"').click();

		cy.url().should("include", "/movies/upcoming");

		cy.get("h1").contains("Upcoming Movies");
	});

	it("should navigate to the upcoming tv shows page", () => {
		cy.visit("http://localhost:3000");

		cy.get('a[href*="tv/upcoming"').click();

		cy.url().should("include", "/tv/upcoming");

		cy.get("h1").contains("Upcoming TV Shows");
	});

	it("should navigate back to the home page", () => {
		cy.visit("http://localhost:3000/movies/278");

		cy.contains("a", "Home").click();
	});
});


describe('Trending Movies, TV Shows and People', () => { 
	it('should have trending movies', () => { 
		cy.visit("http://localhost:3000")

		cy.get('h3').contains('Movies')

		cy.get('div').find('h5').first().click()
	 })


	 it('should have trending tv shows', () => { 
		cy.visit("http://localhost:3000")

		cy.get('h3').contains('TV Shows').click()

		cy.get('div').find('h5').first().click()
	  })

	  it('should have popular people', () => { 
		cy.visit("http://localhost:3000")

		cy.get('h3').contains('People').click()

		cy.get('div').find('h5').first().click()
	   })
 })
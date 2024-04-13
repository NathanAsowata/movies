describe('TV Shows Page', () => { 
    it("should allow users to find a TV Show", () => {
		
        cy.visit("http://localhost:3000/search");
		
        cy.get("div").contains("Try typing");

        cy.get('input').type('Silicon')

        cy.get('button').click()

        cy.get('div').contains('Silicon Valley').click()

	});

    it('should show the cast of a TV Show', () => { 
        cy.visit("http://localhost:3000/search");
		
        cy.get("div").contains("Try typing");

        cy.get('input').type('Silicon')

        cy.get('button').click()

        cy.get('div').contains('Silicon Valley').click()

        cy.get('h3').contains('Cast')

        cy.get('div').find('h5').first().click()
    })

    it('should show similar TV Shows', () => { 
        cy.visit("http://localhost:3000/search");
		
        cy.get("div").contains("Try typing");

        cy.get('input').type('Silicon')

        cy.get('button').click()

        cy.get('div').contains('Silicon Valley').click()

        cy.get('h3').contains('Similar Shows').click()

        cy.get('div').find('h5').first().click()
    })

    it('should have a message when there is no cast available', () => { 
        cy.visit("http://localhost:3000/search");
		
        cy.get("div").contains("Try typing");

        cy.get('input').type('Awards')

        cy.get('button').click()

        cy.get('div').contains('Globe Awards').click()

        cy.get('h3').contains('Cast')

        cy.get('div').contains('No data available')
    })
  })
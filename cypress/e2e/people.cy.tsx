describe('People page', () => { 
    it('should allow users find a person', () => { 
        cy.visit("http://localhost:3000/search");
		
        cy.get("div").contains("Try typing");

        cy.get('input').type('Tobey')

        cy.get('button').click()

        cy.get('div').contains('Tobey Maguire').click()
    })

    it('should show the person&apos;s name', () => { 
        it('should allow users find a person', () => { 
            cy.visit("http://localhost:3000/search");
            
            cy.get("div").contains("Try typing");
    
            cy.get('input').type('Tobey')
    
            cy.get('button').click()
    
            cy.get('div').contains('Tobey Maguire').click()

            cy.get('h1').contains('Tobey Maguire')
        })
     })

     it('should show correct age', () => { 
        cy.visit("http://localhost:3000/search");
		
        cy.get("div").contains("Try typing");

        cy.get('input').type('Tobey')

        cy.get('button').click()

        cy.get('div').contains('Tobey Maguire').click()

        cy.get('p').contains('age')
    })

     it('should show movie and TV Credits', () => { 
        cy.visit("http://localhost:3000/search");
		
        cy.get("div").contains("Try typing");

        cy.get('input').type('Tobey')

        cy.get('button').click()

        cy.get('div').contains('Tobey Maguire').click()

        cy.get('h1').contains('Movies and TV')

        cy.get('div').find('h5').first().click()
    })
 })
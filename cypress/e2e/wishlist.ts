 /// <reference path="../support/index.d.ts" /> 

 describe('Wishlist', () => {
   it('should add and remove games from wishlist', () => {
     cy.visit('/wishlist')

     cy.signIn()

     cy.findByText(/your wishlist is empty/i).should('exist')

     cy.getByDataCy('game-card').eq(0).within(() => {
       cy.findAllByLabelText(/add to wishlist/i).click()
     })
     
     cy.getByDataCy('wishlist').within(() => {
       cy.getByDataCy('game-card').should('have.length', 1)
     })

     cy.getByDataCy('wishlist').eq(0).within(() => {
      cy.findAllByLabelText(/remove from wishlist/i).click()
    })

    cy.findByText(/your wishlist is empty/i).should('exist')
   })
 })
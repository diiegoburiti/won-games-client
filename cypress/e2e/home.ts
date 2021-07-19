/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findAllByText(/kingdom come/i )
      cy.findAllByText(/buy now/i)



      cy.get('.slick-dots > :nth-child(2) > button').click()
      cy.wait(500)

      cy.findAllByText(/Cyberpunk 2077/i)
      cy.findAllByText(/buy now/i)

      cy.get('.slick-dots > :nth-child(3) > button').click()
      cy.wait(500)

      cy.findAllByText(/Dead Cells/i )
      cy.findAllByText(/buy now/i)
    })
  });
});
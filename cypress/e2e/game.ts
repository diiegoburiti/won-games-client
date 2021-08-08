/// <reference path="../support/index.d.ts" /> 

describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/cyberpunk-2077')

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', {name: /Cyberpunk 2077/i}).should('exist')
      cy.findByText(/Cyberpunk 2077 is an open-world/i).should('exist')
      cy.findByText('$199.90').should('exist')
      cy.findByRole('button', {name: /add to cart/i}).should('exist')
    })

    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', {name: /description/i}).should('exist')

    })
      cy.getByDataCy('content').children().should('have.length.at.least', 2)
  })
})
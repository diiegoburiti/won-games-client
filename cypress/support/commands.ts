// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Add Testing Library Commands
import '@testing-library/cypress/add-commands';
import cypress = require('cypress');

Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('shouldRenderBanner', () => {
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
})

Cypress.Commands.add('shouldRenderShowcase', ({name, highlight = false}) => {
  cy.get(`[data-cy="${name}"]`).within(() => {
    cy.findByRole('heading', {name}).should('exist')
    cy.get(`[data-cy="highlight"]`).should(highlight ? 'exist' : 'not.exist')

    if(highlight) {
      cy.get(`[data-cy="highlight"]`).within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }

  })
})

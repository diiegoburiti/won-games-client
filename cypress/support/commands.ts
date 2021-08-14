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
import { genreFields, platformFields, priceFields, sortFields } from '../../src/utils/filter/fields';

Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args)
})

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
  cy.getByDataCy(name).within(() => {
    cy.findByRole('heading', {name}).should('exist')
    cy.getByDataCy("highlight").should(highlight ? 'exist' : 'not.exist')

    if(highlight) {
      cy.getByDataCy("highlight").within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }
  })
})

Cypress.Commands.add('getFields', (fields) => {
  fields.map(({label}) => {
    cy.findAllByText(label).should('exist')
  })
})

Cypress.Commands.add('shouldBeGreaterThan', (value) => {
  cy
  .findByText(/^\$\d+(\.\d{1,2})?/)
  .invoke('text')
  .then($el => $el.replace('$', ''))
  .then(parseFloat)
  .should('be.gt', value)
})

Cypress.Commands.add('shouldBeLessThan', (value) => {
  cy
  .findByText(/^\$\d+(\.\d{1,2})?/)
  .invoke('text')
  .then($el => $el.replace('$', ''))
  .then(parseFloat)
  .should('be.lt', value)
})

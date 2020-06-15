it('opens the app', () => {
  cy.visit('http://localhost:3000')
  cy.get('header.App-header').should('be.visible')
  cy.contains('Learn React').should('be.visible')
})

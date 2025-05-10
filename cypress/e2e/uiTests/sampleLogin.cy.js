describe('Login Page Test', () => {
  it('should visit login page and check title', () => {
    cy.visit('/');
    cy.title().should('include', 'Kitchen Sink');
  });
});

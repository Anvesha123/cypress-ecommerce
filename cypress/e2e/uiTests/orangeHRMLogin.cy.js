import LoginPage from '../../pages/LoginPage';

const loginPage = new LoginPage();

describe('OrangeHRM Login Test with POM + Custom Command', () => {
  beforeEach(() => {
    cy.fixture('loginData').as('login');
  });

  it('should login using page object and custom command', function () {
    loginPage.visit();
    cy.login(this.login.username, this.login.password); // Custom command

    cy.contains('Time at Work', { timeout: 10000 }).should('be.visible');
    cy.contains('Punched In').should('be.visible');
  });
});

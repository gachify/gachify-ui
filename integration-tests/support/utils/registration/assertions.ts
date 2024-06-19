import { registrationSelectors } from '../../selectors'

export const assertions = {
  assertVisible() {
    cy.getBySelector(registrationSelectors.titleLabel).contains('Sign up to Gachify').should('be.visible')
    cy.getBySelector(registrationSelectors.usernameLabel).should('be.visible')
    cy.getBySelector(registrationSelectors.usernameInput).should('be.visible')
    cy.getBySelector(registrationSelectors.emailLabel).should('be.visible')
    cy.getBySelector(registrationSelectors.emailInput).should('be.visible')
    cy.getBySelector(registrationSelectors.passwordLabel).should('be.visible')
    cy.getBySelector(registrationSelectors.passwordInput).should('be.visible')
    cy.getBySelector(registrationSelectors.submitButton).should('be.visible')
    cy.getBySelector(registrationSelectors.hasAccountLabel).should('be.visible')
  },

  assertUsernameError(error: string) {
    cy.getBySelector(registrationSelectors.usernameErrorLabel).contains(error).should('be.visible')
  },

  assertEmailError(error: string) {
    cy.getBySelector(registrationSelectors.emailErrorLabel).contains(error).should('be.visible')
  },

  assertPasswordError(error: string) {
    cy.getBySelector(registrationSelectors.passwordErrorLabel).contains(error).should('be.visible')
  },

  assertLoginLink() {
    cy.getBySelector(registrationSelectors.loginLink).should('be.visible').should('have.attr', 'href')
  },
}

import { loginSelectors } from '../../selectors'

export const assertions = {
  assertVisible() {
    cy.getBySelector(loginSelectors.titleLabel).contains('Sign in to Gachify').should('be.visible')
    cy.getBySelector(loginSelectors.emailLabel).should('be.visible')
    cy.getBySelector(loginSelectors.emailInput).should('be.visible')
    cy.getBySelector(loginSelectors.passwordLabel).should('be.visible')
    cy.getBySelector(loginSelectors.passwordInput).should('be.visible')
    cy.getBySelector(loginSelectors.submitButton).should('be.visible')
    cy.getBySelector(loginSelectors.noAccountLabel).should('be.visible')
  },

  assertEmailError(error: string) {
    cy.getBySelector(loginSelectors.emailErrorLabel).contains(error).should('be.visible')
  },

  assertPasswordError(error: string) {
    cy.getBySelector(loginSelectors.passwordErrorLabel).contains(error).should('be.visible')
  },

  assertCredentialsErrorVisible() {
    cy.getBySelector(loginSelectors.invalidCredentialsLabel).should('be.visible')
  },

  assertRegistrationLink() {
    cy.getBySelector(loginSelectors.registrationLink).should('be.visible').should('have.attr', 'href')
  },
}

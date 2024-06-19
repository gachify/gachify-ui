import { loginSelectors } from '../../selectors'

export const actions = {
  setPassword(password: string) {
    if (password) {
      cy.getBySelector(loginSelectors.passwordInput).clear().type(password).blur()
    } else {
      cy.getBySelector(loginSelectors.passwordInput).clear().click().blur()
    }
  },

  setEmail(email: string) {
    if (email) {
      cy.getBySelector(loginSelectors.emailInput).clear().type(email).blur()
    } else {
      cy.getBySelector(loginSelectors.emailInput).clear().click().blur()
    }
  },

  login(payload: { email: string; password: string }) {
    this.setEmail(payload.email)
    this.setPassword(payload.password)

    if (payload.email.includes('invalid')) {
      mockInvalidCredentials()
    } else {
      mockValidCredentials()
    }

    cy.getBySelector(loginSelectors.submitButton).click()
  },
}

function mockInvalidCredentials() {
  cy.intercept('POST', '/auth/login', {
    statusCode: 401,
    body: {
      message: 'Invalid credentials',
    },
  }).as('login')
}

function mockValidCredentials() {
  cy.intercept('POST', '/auth/login', {
    statusCode: 200,
    body: {
      username: 'User',
    },
  }).as('login')
}

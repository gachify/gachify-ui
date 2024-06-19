import { registrationSelectors } from '../../selectors'

export const actions = {
  setUsername(username: string) {
    if (username) {
      cy.getBySelector(registrationSelectors.usernameInput).clear().type(username).blur()
    } else {
      cy.getBySelector(registrationSelectors.usernameInput).clear().click().blur()
    }
  },

  setPassword(password: string) {
    if (password) {
      cy.getBySelector(registrationSelectors.passwordInput).clear().type(password).blur()
    } else {
      cy.getBySelector(registrationSelectors.passwordInput).clear().click().blur()
    }
  },

  setEmail(email: string) {
    if (email) {
      cy.getBySelector(registrationSelectors.emailInput).clear().type(email).blur()
    } else {
      cy.getBySelector(registrationSelectors.emailInput).clear().click().blur()
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

    cy.getBySelector(registrationSelectors.submitButton).click()
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

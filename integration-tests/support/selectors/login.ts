import { Selectors } from '../types'

export const loginSelectors = {
  titleLabel: 'login-title-label',
  emailLabel: 'login-email-label',
  emailInput: 'login-email-input',
  emailErrorLabel: 'login-email-error-label',
  passwordLabel: 'login-password-label',
  passwordInput: 'login-password-input',
  passwordErrorLabel: 'login-password-error-label',
  submitButton: 'login-submit-button',
  noAccountLabel: 'login-no-account-label',
  registrationLink: 'login-registration-link',
  invalidCredentialsLabel: 'login-invalid-credentials-label',
} satisfies Selectors

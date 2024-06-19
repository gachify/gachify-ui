import { Selectors } from '../types'

export const registrationSelectors = {
  titleLabel: 'registration-title-label',
  usernameLabel: 'registration-username-label',
  usernameInput: 'registration-username-input',
  usernameErrorLabel: 'registration-username-error-label',
  emailLabel: 'registration-email-label',
  emailInput: 'registration-email-input',
  emailErrorLabel: 'registration-email-error-label',
  passwordLabel: 'registration-password-label',
  passwordInput: 'registration-password-input',
  passwordErrorLabel: 'registration-password-error-label',
  submitButton: 'registration-submit-button',
  hasAccountLabel: 'registration-has-account-label',
  loginLink: 'registration-login-link',
} satisfies Selectors

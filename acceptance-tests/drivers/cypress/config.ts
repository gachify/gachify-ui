import { containsBySelector, findBySelector, getBySelector, mockRequest } from './commands'

Cypress.Keyboard.defaults({
  keystrokeDelay: 0,
})

Cypress.Commands.addAll({
  containsBySelector,
  getBySelector,
  mockRequest,
})

Cypress.Commands.addAll(
  { prevSubject: true },
  {
    findBySelector,
  },
)

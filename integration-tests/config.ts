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

beforeEach(() => {
  cy.intercept('GET', /\/.+\.(jpg|jpeg|png)$/, { fixture: 'image.jpg' }).as('getImage')
  cy.intercept('GET', /\/.+\.(mp3|mp4)$/, { fixture: 'audio.mp3,null' }).as('getAudio')
})

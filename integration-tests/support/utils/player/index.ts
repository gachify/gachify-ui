import { playerActions } from './player.actions'
import { playerAssertions } from './player.assertions'

const mock = () => {
  cy.intercept('/audio.mp3', { fixture: 'audio.mp3' }).as('getAudio')
}

export const player = { mock, ...playerActions, ...playerAssertions }

import { remixCard } from '../common'

import { popularRemixesSelectors } from '@selectors'

export const actions = {
  mock() {
    cy.intercept('GET', '/remixes/popular', { fixture: 'popular-remixes.json' }).as('getPopularRemixes')
  },

  playRemix(remix: string) {
    cy.getBySelector(popularRemixesSelectors.remixContainer).within(() => {
      remixCard.play(remix)
    })
  },
}

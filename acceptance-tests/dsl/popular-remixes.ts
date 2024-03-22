import { commonSelectors, popularRemixesSelectors } from '@selectors'

class PopularRemixesDSL {
  playRemix(remix: string) {
    cy.containsBySelector(commonSelectors.remixCard, remix).as('remixCard')
    cy.get('@remixCard').findBySelector(commonSelectors.remixCardPlayButton).click({ force: true })
  }
}

export const popularRemixes = new PopularRemixesDSL()

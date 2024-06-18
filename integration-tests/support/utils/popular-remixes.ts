import { commonSelectors } from '../selectors'

class PopularRemixesUtils {
  mock() {
    cy.intercept('GET', '/remixes/popular', { fixture: 'popular-remixes.json' }).as('getPopularRemixes')
  }

  playRemix(remix: string) {
    cy.containsBySelector(commonSelectors.remixCard, remix).as('remixCard')
    cy.get('@remixCard').findBySelector(commonSelectors.remixCardPlayButton).click({ force: true })
  }
}

export const popularRemixes = new PopularRemixesUtils()

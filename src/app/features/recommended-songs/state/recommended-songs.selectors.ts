import { createPropertySelectors } from '@ngxs/store'

import { RecommendedSongsState, RecommendedSongsStateModel } from './recommended-songs.state'

export class RecommendedSongsSelectors {
  static slices = createPropertySelectors<RecommendedSongsStateModel>(RecommendedSongsState)
}

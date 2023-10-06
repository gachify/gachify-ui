import { createPropertySelectors } from '@ngxs/store'

import { PlaylistDetailsState, PlaylistDetailsStateModel } from './playlist-details.state'

export class PlaylistDetailsSelectors {
  static slices = createPropertySelectors<PlaylistDetailsStateModel>(PlaylistDetailsState)
}

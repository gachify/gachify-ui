import { createSelector } from '@ngxs/store'

import { SongsState, SongsStateModel } from './songs.state'

export class SongsSelectors {
  static loading = createSelector([SongsState], (state: SongsStateModel) => state.loading)

  static songs = createSelector([SongsState], (state: SongsStateModel) => state.songs)

  static take = createSelector([SongsState], (state: SongsStateModel) => state.take)

  static page = createSelector([SongsState], (state: SongsStateModel) => state.page)

  static isFirstLoadComplete = createSelector(
    [SongsState],
    (state: SongsStateModel) => !state.loading && state.itemCount !== null,
  )

  static itemCount = createSelector([SongsState], (state: SongsStateModel) => state.itemCount)
}

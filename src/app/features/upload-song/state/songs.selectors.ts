import { createSelector } from '@ngxs/store'

import { UploadSongState, UploadSongStateModel } from './songs.state'

export class UploadSongSelectors {
  static uploading = createSelector([UploadSongState], (state: UploadSongStateModel) => state.uploading)
}

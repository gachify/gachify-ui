import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { tap } from 'rxjs'

import { UploadSongActions } from './songs.actions'
import { UploadSongService } from '../services'

export interface UploadSongStateModel {
  uploading: boolean
}

@State<UploadSongStateModel>({
  name: 'uploadSongs',
  defaults: {
    uploading: false,
  },
})
@Injectable()
export class UploadSongState {
  private readonly uploadSongService = inject(UploadSongService)

  @Action(UploadSongActions.Upload)
  upload(ctx: StateContext<UploadSongStateModel>, action: UploadSongActions.Upload) {
    ctx.patchState({ uploading: true })

    return this.uploadSongService.uploadSong(action.payload.youtubeUrl).pipe(
      tap(() => {
        ctx.patchState({
          uploading: false,
        })
      }),
    )
  }
}

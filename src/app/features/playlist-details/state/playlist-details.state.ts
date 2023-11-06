import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { tap } from 'rxjs'

import { PlaylistDetailsActions } from './playlist-details.actions'

import { Playlist } from '@core/models'
import { PlaylistService } from '@core/services'

export interface PlaylistDetailsStateModel {
  playlist?: Playlist
  loading: boolean
}

@State<PlaylistDetailsStateModel>({
  name: 'playlistDetails',
  defaults: {
    loading: false,
  },
})
@Injectable()
export class PlaylistDetailsState {
  private readonly playlistService = inject(PlaylistService)

  @Action(PlaylistDetailsActions.FetchById)
  fetchById(ctx: StateContext<PlaylistDetailsStateModel>, action: PlaylistDetailsActions.FetchById) {
    const state = ctx.getState()

    if (state.playlist?.id === action.playlistId) {
      return
    }

    ctx.patchState({ loading: true })

    return this.playlistService.getById(action.playlistId).pipe(
      tap((playlist) =>
        ctx.setState({
          playlist,
          loading: false,
        }),
      ),
    )
  }
}

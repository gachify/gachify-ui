import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { tap } from 'rxjs'

import { PlaylistDetailsActions } from './playlist-details.actions'
import { PlaylistDetailsService } from '../services'

import { Playlist } from '@core/models'

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
  private readonly playlistDetailsService = inject(PlaylistDetailsService)

  @Action(PlaylistDetailsActions.FetchById)
  fetchById(ctx: StateContext<PlaylistDetailsStateModel>, action: PlaylistDetailsActions.FetchById) {
    const state = ctx.getState()

    if (state.playlist) {
      return
    }

    ctx.patchState({ loading: true })

    return this.playlistDetailsService.fetchById(action.playlistId).pipe(
      tap((playlist) =>
        ctx.setState({
          playlist,
          loading: false,
        }),
      ),
    )
  }
}

import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { tap } from 'rxjs'

import { RecommendedSongsActions } from './recommended-songs.actions'
import { RecommendedSongsService } from '../services'

import { Song } from '@core/models'

export interface RecommendedSongsStateModel {
  songs: Song[]
  loading: boolean
}

@State<RecommendedSongsStateModel>({
  name: 'recommendedSongs',
  defaults: {
    songs: [],
    loading: false,
  },
})
@Injectable()
export class RecommendedSongsState {
  private readonly RecommendedSongsPlaylistsService = inject(RecommendedSongsService)

  @Action(RecommendedSongsActions.Fetch)
  fetchById(ctx: StateContext<RecommendedSongsStateModel>) {
    const state = ctx.getState()

    if (state.songs.length) {
      return
    }

    ctx.patchState({ loading: true })

    return this.RecommendedSongsPlaylistsService.fetchAll().pipe(
      tap((songs) =>
        ctx.setState({
          songs,
          loading: false,
        }),
      ),
    )
  }
}

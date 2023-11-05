import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { tap } from 'rxjs'

import { RecommendedSongsActions } from './recommended-songs.actions'

import { Song } from '@core/models'
import { SongService } from '@core/services'

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
  private readonly songService = inject(SongService)

  @Action(RecommendedSongsActions.Fetch)
  fetchById(ctx: StateContext<RecommendedSongsStateModel>) {
    const state = ctx.getState()

    if (state.songs.length) {
      return
    }

    ctx.patchState({ loading: true })

    return this.songService.getPopular().pipe(
      tap((response) =>
        ctx.setState({
          songs: response.data,
          loading: false,
        }),
      ),
    )
  }
}

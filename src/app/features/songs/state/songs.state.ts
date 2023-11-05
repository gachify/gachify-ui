import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { tap } from 'rxjs'

import { SongsActions } from './songs.actions'

import { Song } from '@core/models'
import { SongService } from '@core/services'

export interface SongsStateModel {
  songs: Song[]
  page: number
  take: number
  itemCount: number | null
  loading: boolean
}

@State<SongsStateModel>({
  name: 'songs',
  defaults: {
    songs: [],
    itemCount: null,
    page: 0,
    take: 25,
    loading: false,
  },
})
@Injectable()
export class SongsState {
  private readonly songService = inject(SongService)

  @Action(SongsActions.Fetch)
  fetch(ctx: StateContext<SongsStateModel>) {
    const state = ctx.getState()

    ctx.patchState({ loading: true })

    return this.songService.getSongs({ take: state.take, page: state.page }).pipe(
      tap((response) =>
        ctx.patchState({
          songs: response.data,
          itemCount: response.meta.itemCount,
          loading: false,
        }),
      ),
    )
  }

  @Action(SongsActions.UpdatePageOptions)
  updatePageOptions(ctx: StateContext<SongsStateModel>, action: SongsActions.UpdatePageOptions) {
    ctx.patchState({ ...action.payload })
    ctx.dispatch(new SongsActions.Fetch())
  }
}

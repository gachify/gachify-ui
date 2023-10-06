import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { tap } from 'rxjs'

import { LibraryActions } from './library.actions'
import { LibraryPlaylistsService } from '../services'

import { Playlist } from '@core/models'

export interface LibraryStateModel {
  playlists: Playlist[]
  loading: boolean
}

@State<LibraryStateModel>({
  name: 'library',
  defaults: {
    playlists: [],
    loading: false,
  },
})
@Injectable()
export class LibraryState {
  private readonly libraryPlaylistsService = inject(LibraryPlaylistsService)

  @Action(LibraryActions.FetchPlaylists)
  fetchById(ctx: StateContext<LibraryStateModel>) {
    const state = ctx.getState()

    if (state.playlists.length) {
      return
    }

    ctx.patchState({ loading: true })

    return this.libraryPlaylistsService.fetchAll().pipe(
      tap((playlists) =>
        ctx.setState({
          playlists,
          loading: false,
        }),
      ),
    )
  }
}

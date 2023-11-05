import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { tap } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'

import { LibraryActions } from './library.actions'
import { LibraryPlaylistsService } from '../services'

import { Playlist } from '@core/models'

export interface LibraryStateModel {
  playlists: Playlist[]
  loading: boolean
  updating: boolean
}

@State<LibraryStateModel>({
  name: 'library',
  defaults: {
    playlists: [],
    loading: false,
    updating: false,
  },
})
@Injectable()
export class LibraryState {
  private readonly libraryPlaylistsService = inject(LibraryPlaylistsService)
  private readonly dialog = inject(MatDialog)

  @Action(LibraryActions.FetchPlaylists)
  fetchById(ctx: StateContext<LibraryStateModel>) {
    const state = ctx.getState()

    if (state.playlists.length) {
      return
    }

    ctx.patchState({ loading: true })

    return this.libraryPlaylistsService.fetchAll().pipe(
      tap((response) =>
        ctx.patchState({
          playlists: response.data,
          loading: false,
        }),
      ),
    )
  }

  @Action(LibraryActions.Create)
  upload(ctx: StateContext<LibraryStateModel>, action: LibraryActions.Create) {
    ctx.patchState({ updating: true })

    return this.libraryPlaylistsService.create(action.payload.name).pipe(
      tap(() => {
        ctx.patchState({
          updating: false,
        })
        this.dialog.getDialogById(action.payload.dialogId)?.close()
        ctx.dispatch(new LibraryActions.FetchPlaylists())
      }),
    )
  }
}

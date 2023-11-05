import { Injectable, inject } from '@angular/core'
import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store'
import { catchError, tap } from 'rxjs'

import { UserPlaylistsActions } from './user-playlists.actions'

import { GenericState, GenericStateModel, GenericStoreStatus, Playlist } from '@core/models'
import { PlaylistService } from '@core/services'

export interface UserPlaylistsModel extends GenericStateModel<Playlist[]> {}

@State<UserPlaylistsModel>({
  name: 'userPlaylists',
  defaults: {
    data: null,
    status: GenericStoreStatus.Pending,
    error: null,
  },
})
@Injectable()
export class UserPlaylistsState extends GenericState {
  private readonly playlistService = inject(PlaylistService)

  ngxsOnInit(ctx: StateContext<UserPlaylistsModel>): void {
    ctx.dispatch(new UserPlaylistsActions.Fetch())
  }

  @Action(UserPlaylistsActions.Fetch)
  fetch(ctx: StateContext<UserPlaylistsModel>) {
    ctx.patchState({ status: GenericStoreStatus.Loading })

    return this.playlistService.getMyPlaylists().pipe(
      tap((response) => ctx.dispatch(new UserPlaylistsActions.FetchSuccess({ data: response }))),
      catchError((error) => ctx.dispatch(new UserPlaylistsActions.FetchError(error))),
    )
  }

  @Action(UserPlaylistsActions.FetchSuccess)
  fetchSuccess(ctx: StateContext<UserPlaylistsModel>, action: UserPlaylistsActions.FetchSuccess) {
    ctx.patchState({ data: action.payload.data, status: GenericStoreStatus.Success })
  }

  @Action(UserPlaylistsActions.FetchError)
  fetchError(ctx: StateContext<UserPlaylistsModel>, action: UserPlaylistsActions.FetchError) {
    ctx.patchState({ error: action.error.message, status: GenericStoreStatus.Error })
  }
}

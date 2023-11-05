import { Playlist } from '@core/models'

export namespace UserPlaylistsActions {
  const prefix = '[User Playlists]'

  export class Fetch {
    static readonly type = `${prefix} Fetch`
  }

  export class FetchSuccess {
    static readonly type = `${prefix} Fetch Success`
    constructor(public payload: { data: Playlist[] }) {}
  }

  export class FetchError {
    static readonly type = `${prefix} Fetch Error`
    constructor(public error: Error) {}
  }
}

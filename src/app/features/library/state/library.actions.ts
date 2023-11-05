export namespace LibraryActions {
  const prefix = '[Library]'

  export class FetchPlaylists {
    static readonly type = `${prefix} Fetch Playlists`
  }

  export class Create {
    static readonly type = `${prefix} Create playlist`
    constructor(public payload: { name: string; dialogId: string }) {}
  }
}

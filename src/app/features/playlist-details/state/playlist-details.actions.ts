export namespace PlaylistDetailsActions {
  const prefix = '[Playlist Details]'

  export class FetchById {
    static readonly type = `${prefix} Fetch By Id`
    constructor(public playlistId: string) {}
  }
}

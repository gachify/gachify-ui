export namespace UploadSongActions {
  const prefix = '[Upload Song]'

  export class Upload {
    static readonly type = `${prefix} Upload song`
    constructor(public payload: { youtubeUrl: string }) {}
  }
}

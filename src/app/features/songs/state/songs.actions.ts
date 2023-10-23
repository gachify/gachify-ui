import { PageOptions } from '@core/models'

export namespace SongsActions {
  const prefix = '[Songs]'

  export class Fetch {
    static readonly type = `${prefix} Fetch`
  }

  export class UpdatePageOptions {
    static readonly type = `${prefix} Update page options`
    constructor(public payload: PageOptions) {}
  }

  export class Upload {
    static readonly type = `${prefix} Upload song`
    constructor(public payload: { youtubeUrl: string }) {}
  }
}

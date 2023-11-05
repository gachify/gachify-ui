import { Song } from '@core/models'

export namespace AudioActions {
  const prefix = '[Audio]'

  export class Load {
    static readonly type = `${prefix} Load`
    constructor(public payload: { song: Song }) {}
  }

  export class Play {
    static readonly type = `${prefix} Play`
  }

  export class Pause {
    static readonly type = `${prefix} Pause`
  }

  export class TogglePlay {
    static readonly type = `${prefix} Toggle Play`
  }

  export class Seek {
    static readonly type = `${prefix} Seek`
    constructor(public payload: { time: number }) {}
  }

  export class SetVolume {
    static readonly type = `${prefix} Set Volume`
    constructor(public payload: { volume: number }) {}
  }

  export class ToggleMute {
    static readonly type = `${prefix} Toggle Mute`
  }

  export class SetCurrentTime {
    static readonly type = `${prefix} Set Current Time`
    constructor(public payload: { time: number }) {}
  }
}

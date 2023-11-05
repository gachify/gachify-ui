export namespace PlaybackActions {
  const prefix = '[Playback]'

  export class ToggleRepeat {
    static readonly type = `${prefix} Toggle Repeat`
  }

  export class ToggleShuffle {
    static readonly type = `${prefix} Toggle Shuffle`
  }

  export class NextSong {
    static readonly type = `${prefix} Next Song`
  }

  export class PreviousSong {
    static readonly type = `${prefix} Previous Song`
  }

  export class SongEnded {
    static readonly type = `${prefix} Song Ended`
  }
}

export interface Song {
  uuid: string
  name: string
  artist: {
    uuid: string
    name: string
  }
  playbackCount: number
  duration: number
}

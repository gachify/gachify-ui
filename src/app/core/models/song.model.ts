export interface Song {
  id: string
  pictureUrl: string
  name: string
  artist: {
    id: string
    name: string
  }
  duration: number
}

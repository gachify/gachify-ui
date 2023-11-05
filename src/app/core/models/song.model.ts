import { Artist } from './artist.model'

export interface Song {
  id: string
  title: string
  artist: Artist
  duration: number
}

import { Song } from './song.model'

export interface Playlist {
  id: string
  name: string
  songs: Song[]
}

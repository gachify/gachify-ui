import { Song } from './song.model'

export interface Playlist {
  id: string
  pictureUrl: string
  name: string
  songs: Song[]
}

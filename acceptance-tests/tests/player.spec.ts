import { player } from 'acceptance-tests/dsl/player'
import { popularRemixes } from 'acceptance-tests/dsl/popular-remixes'

describe('Player', () => {
  beforeEach(() => {
    cy.visit('/')
    popularRemixes.playRemix('Король и Шут - Танец Злобного ♂Gay♂ния')
    player.pause()
  })

  it('should play a song', () => {
    player.play()
    player.assertPlaying()
  })

  it('should pause a song', () => {
    player.play()
    player.pause()
    player.assertPaused()
  })

  it('should skip to the next song', () => {
    player.skipToNextSong()
    player.assertPlaying()
    player.assertRemix('Король и Шут - Танец Злобного ♂Gay♂ния')
  })

  it('should skip to the previous song', () => {
    player.skipToPreviousSong()
    player.assertPlaying()
    player.assertRemix('Король и Шут - Танец Злобного ♂Gay♂ния')
  })

  it('should toggle shuffle mode on', () => {
    player.toggleShuffle()
    player.assertShuffleOn()
  })

  it('should toggle shuffle mode off', () => {
    player.toggleShuffle()
    player.toggleShuffle()
    player.assertShuffleOff()
  })

  it('should toggle repeat all mode on', () => {
    player.toggleRepeat()
    player.assertRepeatAllOn()
  })

  it('should toggle repeat single mode on', () => {
    player.toggleRepeat()
    player.toggleRepeat()
    player.assertRepeatSingleOn()
  })

  it('should toggle repeat mode off', () => {
    player.toggleRepeat()
    player.toggleRepeat()
    player.toggleRepeat()
    player.assertRepeatOff()
  })

  it('should toggle visualizer mode on', () => {
    player.assertVisualizerOn()
  })

  it('should toggle visualizer mode off', () => {
    player.toggleVisualizer()
    player.assertVisualizerOff()
  })

  it('should set the volume', () => {
    const volume = 50
    player.setVolume(volume)
    player.assertVolume(volume)
  })

  it('should set volume to 0 if muted', () => {
    player.mute()
    player.assertVolume(0)
  })

  it('should mute if volume is set to 0', () => {
    player.setVolume(0)
    player.assertMuted()
  })

  it('should set the playback time', () => {
    const time = 120
    player.setPlaybackTime(time)
    player.assertPlaybackTime(time)
  })

  it('should assert the current time', () => {
    const currentTime = '0:00'
    player.assertCurrentTime(currentTime)
  })

  it('should assert the total time', () => {
    const totalTime = '3:00'
    player.assertTotalTime(totalTime)
  })

  it('should assert the remix', () => {
    player.assertRemix('Король и Шут - Танец Злобного ♂Gay♂ния')
  })

  it('should assert the artist', () => {
    player.assertArtist('GachiMafia')
  })
})

import { playerActions } from './player.actions'
import { playerAssertions } from './player.assertions'

export const player = { ...playerActions, ...playerAssertions }

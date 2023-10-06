import { createPropertySelectors } from '@ngxs/store'

import { LibraryState, LibraryStateModel } from './library.state'

export class LibrarySelectors {
  static slices = createPropertySelectors<LibraryStateModel>(LibraryState)
}

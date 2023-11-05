import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'
import { toSignal } from '@angular/core/rxjs-interop'
import { MatDialogRef } from '@angular/material/dialog'

import { LibraryActions, LibrarySelectors } from '@features/library/state'

@Component({
  selector: 'gachi-library-playlists-add-dialog',
  templateUrl: 'library-playlists-add-dialog.component.html',
  styleUrls: ['library-playlists-add-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryPlaylistsAddDialogComponent {
  private readonly store = inject(Store)
  private readonly dialogRef = inject(MatDialogRef)

  readonly updating = toSignal(this.store.select(LibrarySelectors.slices.updating))

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  })

  handleSubmit(): void {
    if (this.form.valid) {
      const name = this.form.controls.name.value || ''
      const dialogId = this.dialogRef.id
      this.store.dispatch(new LibraryActions.Create({ name, dialogId }))
    } else {
      this.form.markAllAsTouched()
    }
  }
}

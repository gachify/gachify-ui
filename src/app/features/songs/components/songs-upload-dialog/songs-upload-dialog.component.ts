import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'
import { toSignal } from '@angular/core/rxjs-interop'

import { SongsActions, SongsSelectors } from '@features/songs/state'

@Component({
  selector: 'gachi-songs-upload-dialog',
  templateUrl: 'songs-upload-dialog.component.html',
  styleUrls: ['songs-upload-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongsUploadDialogComponent {
  private readonly store = inject(Store)

  readonly uploading = toSignal(this.store.select(SongsSelectors.uploading))

  form = new FormGroup({
    youtubeUrl: new FormControl('', [Validators.required]),
  })

  constructor() {
    effect(() => {
      if (!this.uploading()) {
        this.form.reset()
      }
    })
  }

  handleSubmit(): void {
    if (this.form.valid) {
      const youtubeUrl = this.form.controls.youtubeUrl.value || ''
      this.store.dispatch(new SongsActions.Upload({ youtubeUrl }))
    } else {
      this.form.markAllAsTouched()
    }
  }
}

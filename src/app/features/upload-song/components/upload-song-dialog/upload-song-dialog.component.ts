import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'
import { toSignal } from '@angular/core/rxjs-interop'

import { CustomValidators } from '@core/utils'
import { UploadSongActions, UploadSongSelectors } from '@features/upload-song/state'

@Component({
  selector: 'gachi-upload-song-dialog',
  templateUrl: 'upload-song-dialog.component.html',
  styleUrls: ['upload-song-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadSongDialogComponent {
  private readonly store = inject(Store)

  readonly uploading = toSignal(this.store.select(UploadSongSelectors.uploading))

  form = new FormGroup({
    videoUrl: new FormControl('', [Validators.required, CustomValidators.youtubeUrl]),
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
      const youtubeUrl = this.form.controls.videoUrl.value || ''
      this.store.dispatch(new UploadSongActions.Upload({ youtubeUrl }))
    } else {
      this.form.markAllAsTouched()
    }
  }
}

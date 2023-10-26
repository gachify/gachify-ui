import { ValidatorFn, Validators } from '@angular/forms'

import { CustomValidationError } from '@core/models'

const YOUTUBE_URL_REGEX = new RegExp(
  /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
)

export class CustomValidators {
  static youtubeUrl: ValidatorFn = (control) => {
    const invalid = Boolean(Validators.pattern(YOUTUBE_URL_REGEX)(control))
    return invalid ? { [CustomValidationError.YOUTUBE_URL]: true } : null
  }
}

import { Directive } from '@angular/core'
import { MatListItemAvatar } from '@angular/material/list'

@Directive({
  selector: '[matListItemLeadingImage]',
  host: { class: 'mat-mdc-list-item-leading-image' },
})
export class MatListItemMediaDirective extends MatListItemAvatar {}

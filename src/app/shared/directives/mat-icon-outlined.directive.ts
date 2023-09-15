import { Directive, HostBinding, Input } from '@angular/core'

@Directive({
  selector: 'mat-icon[outlined]',
})
export class MatIconOutlinedDirective {
  @HostBinding('class.material-icons-outlined')
  @Input()
  outlined = true
}

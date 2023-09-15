import { Directive, HostBinding, Input } from '@angular/core'

@Directive({
  selector: '[dataCy]',
})
export class DataCyDirective {
  @HostBinding('attr.data-cy')
  @Input()
  dataCy = ''
}

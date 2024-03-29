import { Directive, HostBinding, Input } from '@angular/core'

import { SelectorWithSuffix } from 'acceptance-tests/constants/selectors/selector.type'

@Directive({
  selector: '[selector]',
})
export class SelectorDirective {
  @HostBinding('attr.data-test')
  @Input({ required: true })
  selector: SelectorWithSuffix
}

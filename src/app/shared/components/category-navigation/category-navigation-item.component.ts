import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core'

@Component({
  selector: 'gachi-category-navigation-item',
  template: `<ng-content></ng-content>`,
  styleUrls: ['category-navigation-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryNavigationItemComponent {
  @HostBinding('class.active')
  @Input()
  active = false
}

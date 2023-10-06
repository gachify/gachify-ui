import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'gachi-category-navigation',
  template: `<ng-content></ng-content>`,
  styleUrls: ['category-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryNavigationComponent {}

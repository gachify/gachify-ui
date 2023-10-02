import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'gachi-mat-list-item-skeleton',
  templateUrl: 'mat-list-item-skeleton.component.html',
  styleUrls: ['mat-list-item-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatListItemSkeletonComponent {}

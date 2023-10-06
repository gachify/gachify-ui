import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'gachi-library',
  templateUrl: 'library.component.html',
  styleUrls: ['library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryComponent {}

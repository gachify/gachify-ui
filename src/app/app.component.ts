import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'gachi-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'gachify-ui'

  test = false
}

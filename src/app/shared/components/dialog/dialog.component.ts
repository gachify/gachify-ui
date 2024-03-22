import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core'

// https://stackblitz.com/edit/angular-ivy-zxn5cr?file=src%2Fapp%2Fdialog%2Fdialog.component.ts
@Component({
  selector: 'gachi-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  private readonly elRef = inject(ElementRef)

  private get element() {
    return this.elRef.nativeElement
  }
}

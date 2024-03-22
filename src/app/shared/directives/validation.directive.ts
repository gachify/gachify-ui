import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs'

const INVALID_STATUS = 'INVALID'

@Directive({
  selector: 'fieldset[validation]',
})
export class ValidationDirective implements OnInit, OnDestroy {
  @Input({ required: true }) control: FormControl

  private readonly iconElement: HTMLElement
  private hasError = false

  private readonly unsubscribe$ = new Subject<void>()

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) {
    this.iconElement = this.renderer.createElement('i')
    this.iconElement.innerText = 'error'
  }

  ngOnInit(): void {
    this.control.statusChanges
      .pipe(
        distinctUntilChanged(),
        filter(() => this.control.touched),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(() => {
        this.updateValidity()
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  @HostListener('focusout') onFocusOut() {
    this.updateValidity()
  }

  private updateValidity(): void {
    if (this.control.status === INVALID_STATUS) {
      this.renderer.appendChild(this.element.nativeElement, this.iconElement)
      this.hasError = true
    } else {
      if (this.hasError) {
        this.renderer.removeChild(this.element.nativeElement, this.iconElement)
        this.hasError = false
      }
    }
  }
}

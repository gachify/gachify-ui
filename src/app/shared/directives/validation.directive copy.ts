import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs'

const VALIDATION_MESSAGES = {
  required: '{{fieldName}} is required',
  email: '{{fieldName}} must be in the format name@example.com',
  pattern: '{{fieldName}} has invalid format',
  minlength: '{{fieldName}} is less than {{requiredLength}} characters long',
}

const INVALID_STATUS = 'INVALID'

@Directive({
  selector: 'fieldset[validation]',
})
export class ValidationDirective implements OnInit, OnDestroy {
  @Input({ required: true }) control: FormControl
  @Input({ required: true }) fieldName: string

  private readonly iconElement: HTMLElement

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

    this.control.valueChanges
      .pipe(
        distinctUntilChanged(),
        filter(() => this.control.status === INVALID_STATUS),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(() => {
        this.updateMessage()
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
    } else {
      this.renderer.removeChild(this.element.nativeElement, this.iconElement)
      // @todo Hide message
    }
  }

  private updateMessage(): void {
    // const { invalid } = this.control as FormControl
    // if (invalid) {
    //   // const text = this.renderer.createText(this.getErrorMessage())
    //   // this.renderer.appendChild(this.messageElement, text)
    //   this.renderer.appendChild(this.element.nativeElement, this.iconElement)
    // } else {
    //   this.renderer.removeChild(this.element.nativeElement, this.iconElement)
    //   // this.renderer.removeChild(this.messageElement, this.parentElement)
    // }
  }

  private getErrorMessage(): string {
    for (const key in this.control.errors) {
      const message = VALIDATION_MESSAGES[key as keyof typeof VALIDATION_MESSAGES]

      if (!message) {
        throw new Error(`No error message found for [${key}]`)
      }

      const messageData = {
        ...this.control.errors[key],
        value: this.control.value,
        fieldName: this.fieldName,
      }

      return this.formatString(message, messageData)
    }

    return ''
  }

  private formatString(template: string, data: Record<string, string> = {}) {
    Object.keys(data).forEach((key) => {
      template = template.replace(new RegExp('{{' + key + '}}', 'g'), data[key])
    })

    return template
  }
}

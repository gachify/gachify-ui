import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Subject, takeUntil } from 'rxjs'

import { CustomValidationError, NgChanges } from '@core/models'

const VALIDATION_MESSAGES = {
  required: '{{fieldName}} is required',
  email: '{{fieldName}} must be in the format name@example.com',
  pattern: '{{fieldName}} has invalid format',
  minlength: '{{fieldName}} is less than {{requiredLength}} characters long',
  [CustomValidationError.YOUTUBE_URL]: '{{fieldName}} is not valid Youtube link',
}

@Directive({
  selector: 'mat-error[validationError]',
})
export class ValidationErrorDirective implements OnInit, OnDestroy, OnChanges {
  @Input({ required: true }) valid: boolean
  @Input({ required: true }) control: FormControl
  @Input({ required: true }) fieldName: string

  private readonly unsubscribe$ = new Subject<void>()

  constructor(private readonly element: ElementRef) {}

  ngOnChanges({ valid }: NgChanges<ValidationErrorDirective>): void {
    if (valid) {
      this.updateMessage()
    }
  }

  ngOnInit(): void {
    this.control.statusChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.updateMessage()
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  private updateMessage(): void {
    const { invalid } = this.control as FormControl

    const message = invalid ? this.getErrorMessage() : ''

    this.element.nativeElement.innerText = message
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

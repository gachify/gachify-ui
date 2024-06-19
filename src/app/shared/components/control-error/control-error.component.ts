import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, inject, signal } from '@angular/core'
import { AbstractControl, FormGroupDirective } from '@angular/forms'
import { Subject, merge, takeUntil } from 'rxjs'

import { VALIDATION_ERRORS } from '@core/tokens'

@Component({
  selector: 'gachi-control-error',
  templateUrl: './control-error.component.html',
  styleUrl: './control-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent implements OnInit, OnDestroy {
  private readonly formGroupDirective: FormGroupDirective | null = inject(FormGroupDirective)
  private readonly validationErrors = inject(VALIDATION_ERRORS)

  @Input({ required: true }) controlName: string
  @Input() fieldName: string

  readonly message = signal('')

  private readonly destroyed$ = new Subject<void>()

  ngOnInit(): void {
    if (!this.formGroupDirective) {
      throw new Error('ControlErrorComponent must be used within a FormGroupDirective')
    }

    const control = this.formGroupDirective.control.get(this.controlName)

    if (!control) {
      throw new Error(`Control "${this.controlName}" not found in the form group`)
    }

    merge(control.valueChanges, this.formGroupDirective.ngSubmit)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.setErrorMessage(control)
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.unsubscribe()
  }

  private setErrorMessage(control: AbstractControl): void {
    let message = ''

    for (const key in control.errors) {
      const messageTemplate = this.validationErrors[key] as (typeof this.validationErrors)[string] | null

      if (!messageTemplate) {
        throw new Error(`No error message found for "${key}" validation error`)
      }

      const messageData = {
        ...control.errors[key],
        value: control.value,
        fieldName: this.fieldName || 'Field ',
      }

      message = messageTemplate(messageData)
    }

    this.message.set(message)
  }
}

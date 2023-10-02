import { HttpErrorResponse } from '@angular/common/http'
import { toSignal } from '@angular/core/rxjs-interop'
import { Signal } from '@angular/core'
import { Observable, catchError, delay, map, of, startWith } from 'rxjs'

export interface HttpRequestState<T> {
  loading: boolean
  data?: T
  error?: HttpErrorResponse | Error
}

export const toRequestState = <T>(request: Observable<T>, defaultValue?: T): Signal<HttpRequestState<T>> =>
  toSignal(
    request.pipe(
      delay(2000), // For testing purpose
      map((data) => ({ loading: false, data })),
      catchError((error) => of({ loading: false, error })),
      startWith({ loading: true }),
    ),
    {
      initialValue: {
        loading: false,
        data: defaultValue,
      } as HttpRequestState<T>,
    },
  )

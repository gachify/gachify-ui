import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Store } from '@ngxs/store'
import { Observable } from 'rxjs'

import { AuthSelectors } from '@core/state'

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  private readonly store = inject(Store)

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.store.selectSnapshot(AuthSelectors.token)
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })

    return next.handle(req)
  }
}

import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'

type SameSite = 'Lax' | 'None' | 'Strict'

interface CookieOptions {
  name: string
  value: string
  expires?: number | Date
  secure?: boolean
  sameSite?: SameSite
}

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  check(name: string): boolean {
    name = encodeURIComponent(name)
    const regExp = CookieService.getCookieRegExp(name)

    return regExp.test(this.document.cookie)
  }

  get(name: string): string {
    if (this.check(name)) {
      name = encodeURIComponent(name)

      const regExp = CookieService.getCookieRegExp(name)
      const result = regExp.exec(this.document.cookie)

      return result && result[1] ? CookieService.safeDecodeURIComponent(result[1]) : ''
    }

    return ''
  }

  set({ name, value, expires, secure }: CookieOptions): void {
    let cookieString: string = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';'

    if (expires) {
      if (typeof expires === 'number') {
        const dateExpires: Date = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24)

        cookieString += 'Expires=' + dateExpires.toUTCString() + ';'
      } else {
        cookieString += 'Expires=' + (expires as Date).toUTCString() + ';'
      }
    }

    if (secure) {
      cookieString += 'Secure;'
    }

    cookieString += 'SameSite=Strict;'

    this.document.cookie = cookieString
  }

  delete(name: string): void {
    const expires = new Date('Thu, 01 Jan 1970 00:00:01 GMT')
    this.set({ name, value: '', expires })
  }

  private static getCookieRegExp(name: string): RegExp {
    const escapedName: string = name.replace(/([[\]{}()|=;+?,.*^$])/gi, '\\$1')

    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g')
  }

  private static safeDecodeURIComponent(encodedURIComponent: string): string {
    try {
      return decodeURIComponent(encodedURIComponent)
    } catch {
      return encodedURIComponent
    }
  }
}

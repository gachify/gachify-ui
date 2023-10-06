import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'

export type SameSite = 'Lax' | 'None' | 'Strict'

export interface CookieOptions {
  expires?: number | Date
  path?: string
  domain?: string
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

  set(
    name: string,
    value: string,
    expiresOrOptions?: CookieOptions['expires'] | CookieOptions,
    path?: CookieOptions['path'],
    domain?: CookieOptions['domain'],
    secure?: CookieOptions['secure'],
    sameSite?: SameSite,
  ): void {
    if (
      typeof expiresOrOptions === 'number' ||
      expiresOrOptions instanceof Date ||
      path ||
      domain ||
      secure ||
      sameSite
    ) {
      const optionsBody = {
        expires: expiresOrOptions as CookieOptions['expires'],
        path,
        domain,
        secure,
        sameSite: sameSite ? sameSite : 'Lax',
      }

      this.set(name, value, optionsBody)

      return
    }

    let cookieString: string = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';'

    const options = expiresOrOptions ? expiresOrOptions : {}

    if (options.expires) {
      if (typeof options.expires === 'number') {
        const dateExpires: Date = new Date(new Date().getTime() + options.expires * 1000 * 60 * 60 * 24)

        cookieString += 'expires=' + dateExpires.toUTCString() + ';'
      } else {
        cookieString += 'expires=' + options.expires.toUTCString() + ';'
      }
    }

    if (options.path) {
      cookieString += 'path=' + options.path + ';'
    }

    if (options.domain) {
      cookieString += 'domain=' + options.domain + ';'
    }

    if (options.secure === false && options.sameSite === 'None') {
      options.secure = true
    }

    if (options.secure) {
      cookieString += 'secure;'
    }

    if (!options.sameSite) {
      options.sameSite = 'Lax'
    }

    cookieString += 'sameSite=' + options.sameSite + ';'

    this.document.cookie = cookieString
  }

  delete(
    name: string,
    path?: CookieOptions['path'],
    domain?: CookieOptions['domain'],
    secure?: CookieOptions['secure'],
    sameSite: SameSite = 'Lax',
  ): void {
    const expiresDate = new Date('Thu, 01 Jan 1970 00:00:01 GMT')
    this.set(name, '', { expires: expiresDate, path, domain, secure, sameSite })
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

export namespace AuthActions {
  const prefix = '[Auth]'

  export class Login {
    static readonly type = `${prefix} Login`
    constructor(public payload: { username: string }) {}
  }

  export class InitialCheck {
    static readonly type = `${prefix} Initial check`
    constructor(public payload: { username?: string }) {}
  }

  export class Logout {
    static readonly type = `${prefix} Logout`
  }
}

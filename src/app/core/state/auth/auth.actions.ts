export namespace AuthActions {
  const prefix = '[Auth]'

  export class Login {
    static readonly type = `${prefix} Login`
    constructor(public payload: { username: string; password: string }) {}
  }

  export class Logout {
    static readonly type = `${prefix} Logout`
  }
}

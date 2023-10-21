export namespace LoginActions {
  const prefix = '[Login]'

  export class Login {
    static readonly type = `${prefix} Login`
    constructor(public payload: { username: string; password: string }) {}
  }

  export class HandleError {
    static readonly type = `${prefix} Handle Error`
    constructor(public error: Error) {}
  }
}

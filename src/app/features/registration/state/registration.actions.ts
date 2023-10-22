export namespace RegistrationActions {
  const prefix = '[Login]'

  export class Register {
    static readonly type = `${prefix} Register`
    constructor(public payload: { username: string; email: string; password: string }) {}
  }

  export class HandleError {
    static readonly type = `${prefix} Handle Error`
    constructor(public error: Error) {}
  }
}

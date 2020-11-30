export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const LOG_OUT = 'LOG_OUT'

type AuthPayloadType = {
    username: string,
    token: string
}

interface SignUp {
    type: typeof SIGN_UP,
    payload: AuthPayloadType
}

interface SignIn {
    type: typeof SIGN_IN,
    payload: AuthPayloadType
}

interface LogOut {
    type: typeof LOG_OUT,
    payload: AuthPayloadType
}

export type AuthDispatchTypes = SignUp | SignIn | LogOut

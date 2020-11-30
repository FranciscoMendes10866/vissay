import { authInitialState } from '../initialStates'
import { AuthDispatchTypes, LOG_OUT, SIGN_IN, SIGN_UP } from '../types/auth/dispatchTypes'
import { AuthStateInterface } from '../types/auth/stateTypes'

const authReducer = (state: AuthStateInterface = authInitialState, action: AuthDispatchTypes): AuthStateInterface => {
    switch (action.type) {
        case SIGN_IN:
        case SIGN_UP:
        case LOG_OUT:
            return {
                ...state,
                token: action.payload.token,
                username: action.payload.username
            }
        default:
            return state
    }
}

export default authReducer

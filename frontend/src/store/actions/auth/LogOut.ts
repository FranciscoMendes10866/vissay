import { Dispatch } from 'redux'
import authInitialState from '../../initialStates/authInitialState'
import { AuthDispatchTypes, LOG_OUT } from '../../types/auth/dispatchTypes'

const LogOut = () => (dispatch: Dispatch<AuthDispatchTypes>) => {
    dispatch({
        type: LOG_OUT,
        payload: authInitialState,
    })
}

export default LogOut

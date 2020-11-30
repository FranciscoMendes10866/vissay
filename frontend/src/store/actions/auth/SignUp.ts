import { Dispatch } from 'redux'
import axios from 'axios'

import { AuthDispatchTypes, SIGN_UP } from '../../types/auth/dispatchTypes'
import { SignUpInterface } from '../../types/auth/formTypes'

const SignUp = (form: SignUpInterface, history: any) => async (dispatch: Dispatch<AuthDispatchTypes>) => {
    const baseURL = 'http://localhost:1903/api/v1/auth/sign_up'
    await axios.post(baseURL, form)
        .then(({ data }) => {
            if (data.token) {
                dispatch({
                    type: SIGN_UP,
                    payload: data,
                })
                history.push('/panel')
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default SignUp

import { Dispatch } from 'redux'
import axios from 'axios'

import { AuthDispatchTypes, SIGN_IN } from '../../types/auth/dispatchTypes'
import { SignInInterface } from '../../types/auth/formTypes'

const SignIn = (form: SignInInterface, history: any) => async (dispatch: Dispatch<AuthDispatchTypes>) => {
    const baseURL = 'http://localhost:1903/api/v1/auth/sign_in'
    await axios.post(baseURL, form)
        .then(({ data }) => {
            if (data.token) {
                dispatch({
                    type: SIGN_IN,
                    payload: data,
                })
                history.push('/panel')
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default SignIn

import { Dispatch } from 'redux'
import axios from 'axios'

import { ArticleDispatchTypes, CREATE_ARTICLE } from '../../types/articles/dispatchTypes'
import { CreateArticleInterface } from '../../types/articles/formTypes'
import { StoreTypes } from '../../types/storeTypes'

const CreateArticle = (form: CreateArticleInterface, history: any) => async (dispatch: Dispatch<ArticleDispatchTypes>, getState: () => StoreTypes) => {
    const stateToken = getState().auth.token
    const baseURL = 'http://localhost:1903/api/v1/articles'
    await axios.post(baseURL, form, {
        headers: {
            'Authorization': `Bearer ${stateToken}`
        }
      })
        .then(({ data }) => {
            if (Object.entries(data).length >= 1) {
                dispatch({
                    type: CREATE_ARTICLE,
                    article: data,
                })
                history.push('/panel')
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default CreateArticle

import { Dispatch } from 'redux'
import axios from 'axios'

import { ArticleDispatchTypes, PATCH_ARTICLE } from '../../types/articles/dispatchTypes'
import { CreateArticleInterface, PatchArticleInterface } from '../../types/articles/formTypes'
import { StoreTypes } from '../../types/storeTypes'

const PatchArticle = (formData: PatchArticleInterface) => async (dispatch: Dispatch<ArticleDispatchTypes>, getState: () => StoreTypes) => {
    const form: CreateArticleInterface = {
        title: formData.title,
        content: formData.content,
        date: formData.date
    }
    const stateToken = getState().auth.token
    const baseURL = `http://localhost:1903/api/v1/articles/${formData.id}`
    await axios.post(baseURL, form, {
        headers: {
            'Authorization': `Bearer ${stateToken}`
        }
      })
        .then(({ data }) => {
            if (Object.entries(data).length >= 1) {
                dispatch({
                    type: PATCH_ARTICLE,
                    article: data,
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default PatchArticle

import { Dispatch } from 'redux'
import axios from 'axios'

import { ArticleDispatchTypes, DELETE_ARTICLE } from '../../types/articles/dispatchTypes'
import { StoreTypes } from '../../types/storeTypes'

const DeleteArticle = (id: number) => async (dispatch: Dispatch<ArticleDispatchTypes>, getState: () => StoreTypes) => {
    const stateToken = getState().auth.token
    const baseURL = `http://localhost:1903/api/v1/articles/${id}`
    await axios.delete(baseURL, {
        headers: {
            'Authorization': `Bearer ${stateToken}`
        }
      })
        .then(({ data }) => {
            if (data === 'OK') {
                dispatch({
                    type: DELETE_ARTICLE,
                    id: id,
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default DeleteArticle

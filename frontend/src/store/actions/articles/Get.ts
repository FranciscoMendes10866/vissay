import { Dispatch } from 'redux'
import axios from 'axios'

import { ArticleDispatchTypes, GET_ARTICLES } from '../../types/articles/dispatchTypes'
import { StoreTypes } from '../../types/storeTypes'

const GetArticles = () => async (dispatch: Dispatch<ArticleDispatchTypes>, getState: () => StoreTypes) => {
    const stateToken = getState().auth.token
    const baseURL = 'http://localhost:1903/api/v1/articles'
    await axios.get(baseURL, {
        headers: {
            'Authorization': `Bearer ${stateToken}`
        }
      })
        .then(({ data }) => {
            if (data.length >= 1) {
                dispatch({
                    type: GET_ARTICLES,
                    articles: data,
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default GetArticles

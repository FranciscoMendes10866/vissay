import { Dispatch } from 'redux'
import articleInitialState from '../../initialStates/articleInitialState'
import { ArticleDispatchTypes, CLEAN_ARTICLES } from '../../types/articles/dispatchTypes'

const Clean = () => (dispatch: Dispatch<ArticleDispatchTypes>) => {
    dispatch({
        type: CLEAN_ARTICLES,
        articles: articleInitialState.splice(0, articleInitialState.length),
    })
}

export default Clean

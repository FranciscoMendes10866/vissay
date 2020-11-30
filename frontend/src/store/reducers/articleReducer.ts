import { articleInitialState } from '../initialStates'
import { ArticleDispatchTypes, CLEAN_ARTICLES, CREATE_ARTICLE, DELETE_ARTICLE, GET_ARTICLES, PATCH_ARTICLE } from '../types/articles/dispatchTypes'
import { ArticleInterface } from '../types/articles/stateTypes'

const articleReducer = (state = articleInitialState, action: ArticleDispatchTypes): ArticleInterface[] => {
    switch (action.type) {
        case GET_ARTICLES:
            return action.articles
        case CREATE_ARTICLE:
            return [...state, action.article]
        case DELETE_ARTICLE:
            return state.filter(({ id }) => id !== action.id)
        case PATCH_ARTICLE:
            return state.map(article => {
                if (article.id === action.article.id) {
                    return {
                        ...article,
                        ...action.article
                    }
                } else {
                    return article
                }
            })
        case CLEAN_ARTICLES:
            return action.articles
        default:
            return state
    }
}

export default articleReducer

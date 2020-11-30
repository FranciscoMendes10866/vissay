import { combineReducers } from 'redux'

import authReducer from './authReducer'
import articleReducer from './articleReducer'

const RootReducer = combineReducers({
    auth: authReducer,
    articles: articleReducer
})

export default RootReducer

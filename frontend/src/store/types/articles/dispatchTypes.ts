import { ArticleInterface } from '../../types/articles/stateTypes'

export const CREATE_ARTICLE = 'CREATE_ARTICLE'
export const GET_ARTICLES = 'GET_ARTICLES'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'
export const PATCH_ARTICLE = 'PATCH_ARTICLE'
export const CLEAN_ARTICLES = 'CLEAN_ARTICLES'

interface GetArticles {
    type: typeof GET_ARTICLES,
    articles: ArticleInterface[]
}

interface PatchArticle {
    type: typeof PATCH_ARTICLE,
    article: ArticleInterface
}

interface DeleteArticle {
    type: typeof DELETE_ARTICLE,
    id: number
}

interface CreateArticle {
    type: typeof CREATE_ARTICLE,
    article: ArticleInterface
}

interface CleanArticles {
    type: typeof CLEAN_ARTICLES,
    articles: ArticleInterface[]
}

export type ArticleDispatchTypes = GetArticles | PatchArticle | DeleteArticle | CreateArticle | CleanArticles

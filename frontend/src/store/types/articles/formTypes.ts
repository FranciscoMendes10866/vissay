export interface CreateArticleInterface {
    title: string,
    content: string,
    date: string
}

export interface PatchArticleInterface {
    id: number,
    title: string,
    content: string,
    date: string
}

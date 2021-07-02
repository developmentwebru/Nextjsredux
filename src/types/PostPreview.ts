export interface PostType {
    id: number
    title: string
    body: string
    postId: number
}
export enum PostActionTypes {
    GET_ALL_POSTS = 'GET_ALL_POSTS',
    GET_ONE_POST = 'GET_ONE_POST',
    CREATE_POST = 'CREATE_POST',
}

export interface PostsState {
    posts: PostType[]
    post: PostType
}

interface GetAllPostsAction {
    type: typeof PostActionTypes.GET_ALL_POSTS,
    payload: PostType[]
}
interface CreatePostAction {
    type: typeof PostActionTypes.CREATE_POST,
    payload: PostType
}
interface GetPostAction {
    type: typeof PostActionTypes.GET_ONE_POST,
    payload: PostType
}



export type PostsActions = GetAllPostsAction | CreatePostAction | GetPostAction;

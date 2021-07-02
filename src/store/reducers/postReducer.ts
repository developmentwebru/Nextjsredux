import {PostActionTypes,
    PostsState,
    PostsActions,
  } from '../../types/PostPreview';
  
  const initialState: PostsState = {
    posts: [],
    post: null
  };
  
  const postReducer = (
    state: PostsState = initialState,
    action: PostsActions,
  ): PostsState => {
    switch (action.type) {
      case PostActionTypes.GET_ALL_POSTS: 
        return {
          ...state,
          posts: action.payload
        };
      case PostActionTypes.GET_ONE_POST: 
        return {
          ...state,
          post: action.payload
        };
      case PostActionTypes.CREATE_POST: 
        return {
          ...state,
          posts: [action.payload, ...state.posts]
        };
      default:
        return { ...state };
    }
  };
  
  export default postReducer;
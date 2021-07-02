import {PostActionTypes,
    PostsActions,
    PostType,
  } from '../../types/PostPreview';
  import { AppThunk } from '../index';
  import axios from 'axios';
  
  export const getAllPosts = (payload: PostType[]): PostsActions => ({
    type: PostActionTypes.GET_ALL_POSTS,
    payload
  })
  
  export const getPost = (payload: PostType): PostsActions => ({
    type: PostActionTypes.GET_ONE_POST,
    payload
  });
  
  export const createPostAction = (payload: PostType): PostsActions => ({
    type: PostActionTypes.CREATE_POST,
    payload
  })
  
  export const createPost = (formData: {title: string, body: string }): AppThunk => async (dispatch) => {
    try {
      const { data } = await axios.post('https://simple-blog-api.crew.red/posts', {
        title: formData.title,
        body: formData.body,
      })
      dispatch(createPostAction(data));
    } catch (error) {
      console.log(error);
    }
  }
  
  export const getPosts = (): AppThunk => async (dispatch) => {
    try {
      const { data } = await axios.get('https://simple-blog-api.crew.red/posts');
      dispatch(getAllPosts(data));
    } catch (error) {
      console.log(error);
    }
  };


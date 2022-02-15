import produce from "immer";
import { postTypes } from "./Post.types";

export interface postIntialState {
  posts: postTypes[];
  postLoading: boolean;
  getPostSuccess: boolean;
  getPostFailure: null | Error;
}

export const initialState: postIntialState = {
  posts: [],
  postLoading: false,
  getPostSuccess: false,
  getPostFailure: null
}

export const GET_POST_REQUEST = 'GET_POST_REQUEST' as const;
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS' as const;
export const GET_POST_FAILURE = 'GET_POST_FAILURE' as const;

export interface GetPostRequest {
  type: typeof GET_POST_REQUEST;
  data: {
    first: number;
    last: number;
  }
};

export interface GetPostSuccess {
  type: typeof GET_POST_SUCCESS;
  posts: postTypes;
  data: [];
};

export interface GetPostFailure {
  type: typeof GET_POST_FAILURE;
  error: Error;
};

export const getPostRequest = (data: { first: number; last: number; }): GetPostRequest => ({
  type: GET_POST_REQUEST,
  data
});

export const getPostSuccess = (
  posts: postTypes,
  data: []
): GetPostSuccess => ({
  type: GET_POST_SUCCESS,
  posts,
  data
});

export const getPostFailure = (error: Error): GetPostFailure => ({
  type: GET_POST_FAILURE,
  error,
});

export type getPost =
| ReturnType<typeof getPostRequest>
| ReturnType<typeof getPostSuccess>
| ReturnType<typeof getPostFailure>;

//reducer

const posts = (state: postIntialState = initialState, action: getPost) => 
  produce(state, (draft) => {
    switch (action.type) {
      case GET_POST_REQUEST: {
        draft.postLoading = true;
        draft.postLoading = false;
        break;
      }
      case GET_POST_SUCCESS: {
        draft.postLoading = false;
        draft.getPostSuccess = true;
        draft.posts = draft.posts.concat(action.data);
        break;
      }
      case GET_POST_FAILURE: {
        draft.getPostSuccess = false;
        draft.getPostFailure = action.error;
        break;
      }
      default:
        return state;
    }
  })

  export default posts;
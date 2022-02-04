import { postsAdapter, PostsState } from './posts.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {IPost} from "../../../interfaces/posts.interface";

export const POST_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);
export const postsSelectors = postsAdapter.getSelectors();

export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);
export const getPostEntities = createSelector(
  getPostsState,
  postsSelectors.selectEntities
);

// getPostEntities,
//   (state: IPost[], props: { id: string }) => state.find(post => post.id === props.id)


export const getPostById = createSelector(
  // @ts-ignore
  getPostEntities,
  (state: IPost[], props: { id: string }) => state.find(post => post.id === props.id)
);

export const getCount = createSelector(getPostsState, (state) => state.count);

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { IPost } from 'src/app/interfaces/posts.interface';

export interface PostsState extends EntityState<IPost> {
  count: number;
}

export const postsAdapter = createEntityAdapter<IPost>({
  sortComparer: sortByName,
});

export const initialState: PostsState = postsAdapter.getInitialState({
  count: 0,
});

export function sortByName(a: IPost, b: IPost): number {
  const compare = a.title.localeCompare(b.title);
  if (compare > 0) {
    return -1;
  }

  if (compare < 0) {
    return 1;
  }

  return compare;
}

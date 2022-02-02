import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {userReducers, userStore} from "./user/user.reducer";

import { environment } from '../../environments/environment';
import {User} from "../model/user";

export interface IUserListState {
  Loading: boolean;
  Loaded: boolean;
  UserList: User[];
}

export interface State {
[userStore]: IUserListState
}

export const reducers: ActionReducerMap<State> = {
  //@ts-ignore
  [userStore]: userReducers

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

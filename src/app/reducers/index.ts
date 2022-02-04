import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {userReducers, userStore} from "./user/user.reducer";

import { environment } from '../../environments/environment';
import {UserModel} from "../model/user.model";

export interface IUserListState {
  Loading: boolean;
  Loaded: boolean;
  UserList: UserModel[];
}

export interface State {
[userStore]: IUserListState
}

export const reducers: ActionReducerMap<State> = {
  //@ts-ignore
  [userStore]: userReducers

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.state";
import { UserModel } from "src/app/model/user.model";
import {userStore} from "./user.reducer";

const userSelector = createFeatureSelector<UserState>(userStore);

export const selectUser = createSelector(
  userSelector,
  (state: UserState) : UserModel => {
    console.log(state)
    return state.user;
  }
);

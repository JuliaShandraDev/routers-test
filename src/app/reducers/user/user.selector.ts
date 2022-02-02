import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.state";
import { User } from "src/app/model/user";
import {userStore} from "./user.reducer";

const userSelector = createFeatureSelector<UserState>(userStore);

export const selectUser = createSelector(
  userSelector,
  (state: UserState) : User => {
    console.log(state)
    return state.user;
  }
);

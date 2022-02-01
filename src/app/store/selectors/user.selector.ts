import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../state/user.state";
import { User } from "src/app/model/user";


const userSelector = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
  userSelector,
  (state: UserState) : User => state.user
);

import { Action } from "@ngrx/store";
import { User } from "src/app/model/user";

export enum UserActionsEnum {
  UpdateUser = "[User] Update User",
};

export class UpdateUser implements Action {
  public readonly type = UserActionsEnum.UpdateUser

  constructor(public payload: User) { }
}

export type UserActions = UpdateUser;

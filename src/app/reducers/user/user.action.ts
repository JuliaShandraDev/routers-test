import { Action } from "@ngrx/store";
import { UserModel } from "src/app/model/user.model";

export enum UserActionsEnum {
  UpdateUser = "[User] Update User",
};

export class UpdateUser implements Action {
  public readonly type = UserActionsEnum.UpdateUser

  constructor(public payload: UserModel) { }
}
export type UserActions = UpdateUser;

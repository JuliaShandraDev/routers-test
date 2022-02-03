import { UserModel } from "src/app/model/user.model";

export interface UserState{
  user: UserModel
}

export const initialUserState: UserState = {
  user: new UserModel()
}

import { User } from "src/app/model/user";

export interface UserState {
  user: User
}

export const initialUserState: UserState = {
  user: new User(),
}

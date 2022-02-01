import { UserActions, UserActionsEnum } from "src/app/store/actions/user.action";
import { initialUserState } from "../state/user.state";

export const userReducers = (
  state = initialUserState,
  action: UserActions
) => {
  switch(action.type) {
    case UserActionsEnum.UpdateUser: {
      return {...state, user: action.payload};
    }
    default: {
      return state;
    }
  }
}

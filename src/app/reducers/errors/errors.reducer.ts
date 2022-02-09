import { ErrorsActions, ErrorsActionTypes } from './errors.actions';

export const errorsStore = "errorsList"
export const initialState: Array<any> = [];

export const errorsReducer = (state = initialState, action: ErrorsActions) => {
  switch (action.type) {
    case ErrorsActionTypes.SetError:
      return state.concat(action.payload.error);
    default:
      return state;
  }
}

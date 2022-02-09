import { Filter } from './filter.model';
import { CurrentFilterActions, CurrentFilterActionTypes } from './filter.actions';

export const currentFilterStore = "filterList"
export const initialState: string = 'SHOW_ALL';

export function filterReducer(state = initialState, action: CurrentFilterActions): string {
  switch (action.type) {
    case CurrentFilterActionTypes.SetCurrentFilter:
      return action.payload.filter
    default:
      return state;
  }
}

import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IState} from "./example.reducer";

export namespace ExampleSelectors {
  export const state = createFeatureSelector<IState>("example");
  export const count = createSelector(state, (state) => state.count);
  export const message = createSelector(state, (state) => state.message);

  export const giveMealData = createSelector(state, (state) => {
    return state.data;
  })
}

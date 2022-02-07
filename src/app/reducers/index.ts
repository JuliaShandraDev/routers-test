import {userReducers, userStore} from "./user/user.reducer";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { Todos, Todo } from './todo/todo.model';
import * as todos from './todo/todo.reducer';
import { Filter } from 'src/app/reducers/filter/filter.model';
import * as currentFilter from './filter/filter.reducer';
import { select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as errors from './errors/errors.reducer';
import { Errors } from './errors/errors.model';

import { environment } from '../../environments/environment';
import {UserModel} from "../model/user.model";
import {errorsStore} from "./errors/errors.reducer";
import {currentFilterStore} from "./filter/filter.reducer";
import {todoStore} from "./todo/todo.reducer";

export interface IUserListState {
  Loading: boolean;
  Loaded: boolean;
  UserList: UserModel[];
}

export interface State {
[userStore]: IUserListState
}
export interface TodosState extends Todos, Filter, Errors { }
//
// export const reducers: ActionReducerMap<State> = {
//   //@ts-ignore
//   [userStore]: userReducers
//
// };


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const reducers: ActionReducerMap<TodosState> = {
  //@ts-ignore
  [userStore]: userReducers,
  [todoStore]: todos.reducer,
  [currentFilterStore]: currentFilter.reducer,
  [errorsStore]: errors.reducer
};

export const metaReducers: MetaReducer<TodosState>[] =!environment.production ? [] : [];

export const selectTodos = (state: TodosState) => state.todos;
export const selectCurrentFilter = (state: TodosState) => state.currentFilter;

export const getFilteredTodos = createSelector(
  selectTodos,
  selectCurrentFilter,
  getVisibleTodos
);

function getVisibleTodos(todos: Array<Todo>, filter: string) {
  console.log("Doing calculations...");
  debugger;
  if (!todos || !filter) return;
  let t = todos.slice().reverse();
  switch (filter) {
    case 'SHOW_ACTIVE':
      return t.filter(t => !t.completed);
    case 'SHOW_COMPLETED':
      return t.filter(t => t.completed);
    case 'SHOW_ALL':
    default:
      return t;
  }
};

export const getTodos = (s: { todos: any; }) => s.todos;
export const getCurrentFilter = (s: { currentFilter: any; }) => s.currentFilter;
export const getErrors = (s: { errors: any; }) => s.errors;


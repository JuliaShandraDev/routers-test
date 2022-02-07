import { Component, OnDestroy } from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../../reducers/todo/todo.model";
import {BaseError} from "../../reducers/errors/errors.model";
import {Action, ActionReducerMap, Store} from "@ngrx/store";
import {getCurrentFilter, getErrors, getTodos, TodosState} from "../../reducers";
import { map } from 'rxjs/operators';
import { combineReducers, ActionReducer } from '@ngrx/store';
import * as fromTodos from 'src/app/reducers/todo/todo.actions';
import * as fromFilter from 'src/app/reducers/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnDestroy {

  // currentFilter: ActionReducerMap<TodosState, Action>;
  currentFilter: any;
  todos: Observable<Todo>;
  errors: Observable<Array<BaseError>>;

  constructor(
    private _store: Store<TodosState>
  ) {
    this.todos = _store.select(getTodos);
    _store.select(getCurrentFilter)
      .subscribe(filter => {
        this.currentFilter = filter;
      });
    this.errors = _store.select(getErrors);
  }

  public addTodo(input: { value: string | any[]; }) {
    if (input.value.length === 0) return;
    this._store.dispatch(
      new fromTodos.AddTodo(
        <Todo>{ text: input.value, completed: false }
      )
    );
    input.value = '';
  }

  public addTodoAsync(input: { value: string; }) {
    this._store.dispatch(
      new fromTodos.AddTodoEffect(
        <Todo>{ text: input.value, completed: false }
      )
    );
    input.value = '';
  }

  public onTodoClick(id: any) {
    this._store.dispatch(
      new fromTodos.ToggleTodo(<Todo>{ id })
    );
  }
  public removeTodo(id: any) {
    this._store.dispatch(
      new fromTodos.DeleteTodo(<Todo>{ id })
    );
  }

  public applyFilter(filter: any) {
    this._store.dispatch(
      new fromFilter.SetCurrentFilter({ filter })
    );
  }

  public ngOnDestroy() {
    this.todos.subscribe()
  }

}

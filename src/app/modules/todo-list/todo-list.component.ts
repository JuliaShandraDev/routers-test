import { Component, OnDestroy } from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../../reducers/todo/todo.model";
import {BaseError} from "../../reducers/errors/errors.model";
import {Store} from "@ngrx/store";
import {getCurrentFilter, getErrors, getTodos, TodosState} from "../../reducers";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnDestroy {

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

  private addTodo(input: { value: string | any[]; }) {
    if (input.value.length === 0) return;
    this._store.dispatch(
      new fromTodos.AddTodo(
        <Todo>{ text: input.value, completed: false }
      )
    );
    input.value = '';
  }

  private addTodoAsync(input: { value: string; }) {
    this._store.dispatch(
      new fromTodos.AddTodoEffect(
        <Todo>{ text: input.value, completed: false }
      )
    );
    input.value = '';
  }

  private onTodoClick(id: any) {
    this._store.dispatch(
      new fromTodos.ToggleTodo(<Todo>{ id })
    );
  }
  private removeTodo(id: any) {
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
  }

}

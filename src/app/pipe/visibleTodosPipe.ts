import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'visibleTodos'
})
export class VisibleTodosPipe implements PipeTransform {
  transform(todos: any, filter: any){
    if (!todos) return;
    return this.getVisibleTodos(todos, filter);
  }

  public getVisibleTodos(todos: any[], filter: any){
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
}

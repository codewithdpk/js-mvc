export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export class TodoModel {
  todos: Todo[];

  constructor() {
    this.todos = [{ id: 1, text: "Pet my cat", completed: false }];
  }

  addTodo(text: string) {
    this.todos.push({
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text,
      completed: false,
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  _commit(todos: Todo[]) {
    // this.onTodoListChanged(todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

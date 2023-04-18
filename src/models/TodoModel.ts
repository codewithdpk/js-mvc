export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export class TodoModel {
  private todos: Todo[];
  constructor() {
    this.todos = [];
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
}

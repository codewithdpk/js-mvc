import { Todo } from "../models/TodoModel";

export class TodoView {
  app: Element;
  title: Element;
  form: Element;
  input: HTMLInputElement;
  submitButton: Element;
  todoList: HTMLElement;

  constructor() {
    this.app = this.getElement("#root") as Element;
    this.title = this.createElement("h3");
    this.title.textContent = "Todo App";

    this.form = this.createElement("form");

    this.input = this.createElement("input") as HTMLInputElement;
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";

    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Submit";

    this.todoList = this.createElement("ul", "todo-list");

    this.form.append(this.input, this.submitButton);

    this.app.append(this.title, this.form, this.todoList);
  }

  createElement(tag: keyof HTMLElementTagNameMap, className?: string) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector: keyof HTMLElementTagNameMap | string) {
    return document.querySelector(selector);
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = "";
  }

  displayAllTodos(todos: Todo[]) {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "No todos found.";
      this.todoList.append(p);
    } else {
      todos.forEach((todo) => {
        const li = this.createElement("li");
        li.id = `todo-${todo.id}`;

        const checkbox = this.createElement("input") as HTMLInputElement;
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        const content = this.createElement("span");

        if (todo.completed) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          content.append(strike);
        } else {
          content.textContent = todo.text;
        }

        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";

        li.append(checkbox, content, deleteButton);

        this.todoList.append(li);
      });
    }
  }

  // bindAddTodo() {
  //   this.todoList.addEventListener('submit',(event)=>{
  //    event.preventDefault()
  //    if(this._todoText){
  //     handler(this._todoText)
  //    }
  //   })
  // }
}

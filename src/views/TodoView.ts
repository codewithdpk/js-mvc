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
}

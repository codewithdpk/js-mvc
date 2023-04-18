import { TodoModel } from "../models/TodoModel";
import { TodoView } from "../views/TodoView";

export class MainController {
  model: TodoModel;
  view: TodoView;
  constructor(model: TodoModel, view: TodoView) {
    this.model = model;
    this.view = view;
  }
}

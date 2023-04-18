import { MainController } from "./src/controllers/MainController";
import { TodoModel } from "./src/models/TodoModel";
import { TodoView } from "./src/views/TodoView";

function main() {
  const app = new MainController(new TodoModel(), new TodoView());
  app.model.addTodo("Take a nap");
}

main();

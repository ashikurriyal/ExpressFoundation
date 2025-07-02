import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();
const filePath = path.join(__dirname, "../db/todo.json");

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Todo App");
});
app.get("/todos/:id", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log("From Query",req.query)
console.log("From Params", req.params)

  // console.log(data)
  res.end(data);
});
app.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send("I am learning Express");
});

export default app;

//App file = Routing handle, Middleware, Route related error handling

//App folder = app business logic handling like create, read, update, delete databse, related works

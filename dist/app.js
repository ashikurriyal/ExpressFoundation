"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const filePath = path_1.default.join(__dirname, "../db/todo.json");
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome to Todo App");
});
app.get("/todos/:id", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log("From Query", req.query);
    console.log("From Params", req.params);
    // console.log(data)
    res.end(data);
});
app.post("/todos/create-todo", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("I am learning Express");
});
exports.default = app;
//App file = Routing handle, Middleware, Route related error handling
//App folder = app business logic handling like create, read, update, delete databse, related works

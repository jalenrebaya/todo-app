const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let todos = [
    {
        id: 1,
        text: "Learn Express",
        completed: false
    },
    {
        id: 2,
        text: "Build a REST API",
        completed: false
    }
];

app.get("/api/todos", (req, res) => {
    res.json(todos);
});

app.post("/api/todos", (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
        completed: false
    };

    todos.push(newTodo);

    res.json(newTodo);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
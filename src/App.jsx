import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const startingTodos = [
  { id: 1, text: "Learn JSX", done: false },
  { id: 2, text: "Understand props", done: false },
  { id: 3, text: "Build a todo list", done: true },
];

function App() {
  const [todos, setTodos] = useState(startingTodos);
  const [filter, setFilter] = useState("all");

  function handleAddTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };

    setTodos([...todos, newTodo]);
  }

  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }

  function handleDelete(id) {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;

    return true;
  });

  return (
    <div className="app">
      <div className="todo-container">
        <h1>My Todo App</h1>

        <AddTodoForm onAdd={handleAddTodo} />

        <div className="filters">
          <button
            className={filter === "all" ? "active-filter" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={filter === "active" ? "active-filter" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </button>

          <button
            className={filter === "completed" ? "active-filter" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <TodoList
          todos={visibleTodos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
import { memo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Memoize the TodoItem component, don't rerender unless props changed
// Memoize the TodoList component, don't rerender unless props changed
const TodoForm = ({ onTodoSubmit }) => {
  const [text, setText] = useState("");
  console.log("form rerenders");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onTodoSubmit(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
    </form>
  );
};

const TodoList = memo(({ todos, onDelete }) => {
  console.log("list rerenders");

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
});

const TodoItem = memo(
  ({ todo, onDelete }) => {
    const { id, description, completed } = todo;
    console.log("item rerenders");

    return (
      <li className="todo-item">
        <div>
          <div>ID</div>
          <div>{id}</div>
        </div>
        <div>
          <div>Description</div>
          <div>{description}</div>
        </div>
        <div>
          <div>Completed</div>
          <div>{completed ? "done" : "pending"}</div>
        </div>
        <div>
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      </li>
    );
  },
  (prevProps, nextProps) => {
    if (
      prevProps.todo.id === nextProps.todo.id &&
      prevProps.todo.description === nextProps.todo.description &&
      prevProps.todo.completed === nextProps.todo.completed
    ) {
      return true; // props are equal
    }
    return false; // props are not equal -> update the component
  }
);

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = { id: uuidv4(), description: todo, completed: false };
    setTodos((todos) => [newTodo, ...todos]);
  };

  const deleteTodo = (id) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onTodoSubmit={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default TodoApp;

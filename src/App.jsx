import { useState } from "react";
import useTodoList from "./Hooks/useTodoList";
import "./App.css";

function App() {
  const { list, addTodo, removeTodo } = useTodoList(["Buy milk", "Do laundry"]);

  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodoClick = () => {
    addTodo(newTodo);
    setNewTodo("");
  };

  const handleRemoveTodoClick = (index) => {
    removeTodo(index);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <ul>
        {list.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => handleRemoveTodoClick(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={handleNewTodoChange} />
      <button onClick={handleAddTodoClick}>Add Todo</button>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]); // Store list of todos
  const [inpVal, setInpVal] = useState(""); // Store input field value

  const handleInpChange = (event) => {
    setInpVal(event.target.value); // Corrected this line
  };

  const addTodos = () => {
    setTodos((prev) => [...prev, inpVal]); // Don't mutate state directly
    setInpVal(""); // Clear input field
  };

  const removeTodos = (index) => {
    const currTodos = [...todos]; // Create a copy of the todos array
    currTodos.splice(index, 1); // Remove the todo at the specified index
    setTodos(currTodos); // Update the state with the modified array
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inpVal}
        name="task"
        id="task"
        placeholder="Enter a task"
        onChange={handleInpChange}
      />
      <button onClick={addTodos}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          
          <button onClick={removeTodos}>Remove</button>
          </li> // Render each todo
        ))}
      </ul>
    </div>
  );
}

export default Todo;

import { useState } from "react";
import Button from "./button";
import Inputtexts from "./inputfield/Inputtexts";
import "./style.css";
import Todos from "./todos";

const Autocomplete = () => {
  const [todos, setTodos] = useState([]);

  const [todoToAdd, setTodoToAdd] = useState("");
  window.todoId = Math.random(100);
  

  function handleTodos(value) {
    setTodoToAdd(value);
  }
  function handleAddTodo() {
    const oldTodos = structuredClone(todos);
    
    const newTodo = {};
    newTodo.id = window.todoId+1;
    newTodo.todo = todoToAdd;

    const newTodos = [newTodo, ...oldTodos];
    setTodoToAdd("");
    setTodos(newTodos);
  }

  function handelEdit(id) {
    
  }

  function handleDel(id) {
    const newtodos = todos.filter((todo) => todo.id !== id);
    setTodos(newtodos);
  }

  return (
    <div>
      <Inputtexts value={todoToAdd} onChange={handleTodos} />

      <Button onClick={handleAddTodo} label={"Add Todo"}></Button>
      <Todos onEdit={handelEdit} onDel={handleDel} todos={todos} />
    </div>
  );
};

export default Autocomplete;

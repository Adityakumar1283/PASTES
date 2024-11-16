import { useState } from "react";
import Button from "./button";
import Inputtexts from "./inputfield/Inputtexts";
import "./style.css";
import Todos from "./todos";

const Autocomplete = () => {
  const [todos, setTodos] = useState([]);

  const [todoToAdd, setTodoToAdd] = useState("");

  window.todoid = 1000;

  function handleTodos(value) {
    setTodoToAdd(value);
  }
  function handleAddTodo() {
    const oldTodos = structuredClone(todos);

    const newTodo = {};
    newTodo.id = window.todoId++;
    newTodo.todo = todoToAdd;
    
    const newTodos = [newTodo, ...oldTodos];
    setTodoToAdd("")
    setTodos(newTodos);
    
  }

  return (
    <div>
      <Inputtexts onChange={handleTodos} />

      <Button onClick={handleAddTodo} label={"Add Todo"}></Button>
      <Todos todos={todos} />
    </div>
  );
};

export default Autocomplete;

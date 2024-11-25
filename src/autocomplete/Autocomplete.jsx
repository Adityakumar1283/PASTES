import { useState } from "react";
import Button from "./button";
import Inputtexts from "./inputfield/Inputtexts";
import "./style.css";
import Todos from "./todos";
//import {structuredClone} from "react"
const Autocomplete = () => {
  const [todos, setTodos] = useState([]);

  const [todoToAdd, setTodoToAdd] = useState("");
  window.todoId = Math.random(100);
  function preserveTodos(key){
      const strTodo = JSON.stringify()
  }
  function handleTodos(value) {
    setTodoToAdd(value);
  }
  function handleAddTodo() {
    const oldTodos = structuredClone(todos);

    const newTodo = {
      id: window.todoId + 1,
      todo: todoToAdd,
      isEditing: false,
    };

    const newTodos = [newTodo, ...oldTodos];
    setTodoToAdd("");
    setTodos(newTodos);
  }

  function handelEdit(id) {
    const newtodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.isEditing = true;
      } else {
        todo.isEditing = false;
      }
      return { ...todo };
    });
    setTodos(newtodos);
  }

  function handleDel(id) {
    const newtodos = todos.filter((todo) => todo.id !== id);
    setTodos(newtodos);
  }

  function hanleEditcancle(id) {
    const newtodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.isEditing = false;
      }

      return { ...todo };
    });
    setTodos(newtodos);
  }

  function handelEditSave(index, value) {
    const newtodos = structuredClone(todos);
    newtodos[index].todo = value;
    newtodos[index].isEditing = false;

    setTodos(newtodos);
  }
  return (
    <div>
      <Inputtexts value={todoToAdd} onChange={handleTodos} />

      <Button onClick={handleAddTodo} label={"Add Todo"}></Button>
      <Todos
        onEditcancle={hanleEditcancle}
        onEdit={handelEdit}
        onEditsave={handelEditSave}
        onDel={handleDel}
        todos={todos}
      />
    </div>
  );
};

export default Autocomplete;

import { useState } from "react";
import Button from "./button";
import Inputtexts from "./inputfield/Inputtexts";
import "./style.css";
import Todos from "./todos";


const Autocomplete = () => {
  window.todoId = 100
  const TODO_KEY = "my_todos";
  const [todos, setTodos] = useState(loadfromcache);

  const [todoToAdd, setTodoToAdd] = useState("");

  function loadfromcache() {
    const todoString = localStorage.getItem(TODO_KEY);
    const todoArr = JSON.parse(todoString);
    window.todoId = window.todoId + todoArr;

    return todoArr;
  }

  function preserveTodos(data) {
    const strTodo = JSON.stringify(data);
    setTodos(data);
    localStorage.setItem(TODO_KEY, strTodo);
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

    const newtodos = [newTodo, ...oldTodos];

    setTodoToAdd("");

    preserveTodos(newtodos);
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

    preserveTodos(newtodos);
  }

  function handleDel(id) {
    const newtodos = todos.filter((todo) => todo.id !== id);

    preserveTodos(newtodos);
  }

  function hanleEditcancle(id) {
    const newtodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.isEditing = false;
      }

      return { ...todo };
    });
    
    preserveTodos(newtodos);
  }

  function handelEditSave(index, value) {
    const newtodos = structuredClone(todos);
    newtodos[index].todo = value;
    newtodos[index].isEditing = false;

    
    preserveTodos(newtodos);
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

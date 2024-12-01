import { useState } from "react";
import Button from "./button";
import Inputtexts from "./inputfield/Inputtexts";
import "./style.css";
import Todos from "./todos";


const Autocomplete = () => {
   window.todoId = Math.random(100);
  const TODO_KEY = "my_todos";
  let showTodo = [];
  let donetodo =[];
  let pendingtodo = [];
  const FilterType ={
    PENDING: 0,
    DONE: 1,
    NOTHING:3,
  }
  const [todos, setTodos] = useState(loadfromcache);
  const [todoToAdd, setTodoToAdd] = useState("");
  const [activeFilter,setactiveFilter] = useState(FilterType.NOTHING);
  function loadfromcache() {
    const todoString = localStorage.getItem(TODO_KEY);
    const todoArr = JSON.parse(todoString);
    window.todoId = window.todoId+todoArr;

    return todoArr;
  }
   function handlefilter(){
    if(activeFilter === FilterType.NOTHING){
      setactiveFilter(FilterType.DONE);
    }
    else if (activeFilter === FilterType.DONE){
      setactiveFilter(FilterType.PENDING)
    }
    else if (activeFilter === FilterType.PENDING){
      setactiveFilter(FilterType.DONE)
    }
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
      isCompeleted: false,
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

  function handleDone(id){
    const newtodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompeleted = true;
        
      }
       
      return { ...todo };
    });
    
    preserveTodos(newtodos);

  }
   
  todos.forEach(t =>{
    if(t.isCompeleted){
      donetodo.push(t);
    }
    else{
      pendingtodo.push(t);
    } 
  });
  

  if(activeFilter === FilterType.NOTHING){
    showTodo = [...pendingtodo,...donetodo]
  }
  else if (activeFilter === FilterType.DONE){
    showTodo = [...pendingtodo]
  }
  else if (activeFilter === FilterType.PENDING){
    showTodo = [...donetodo]
  }

  return (
    <div>
      <Inputtexts value={todoToAdd} onChange={handleTodos} />

      <Button onClick={handleAddTodo} label={"Add Todo"}></Button>
      <Button onClick={handlefilter} label={"Done-Todo"}></Button>
      <Todos
        onEditcancle={hanleEditcancle}
        onEdit={handelEdit}
        onEditsave={handelEditSave}
        onDel={handleDel}
        todos={showTodo}
        onDone ={ handleDone}
      />
    </div>
  );
};

export default Autocomplete;

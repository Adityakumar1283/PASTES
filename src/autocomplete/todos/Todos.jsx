import { useRef } from "react";
import Button from "../button";
import "./style.css";
const Todos = ({ todos = [], onEdit, onDel, onEditcancle, onEditsave }) => {
  return (
    <div>
      <h1>Your Todos</h1>
      {todos.map((todos,index) => {
        return (
          <h2>
            <Todoitem
              key={todos.id}
              index = {index}
              todos={todos}
              onEdit={onEdit}
              onDel={onDel}
              onEditcancle={onEditcancle}
              onEditsave={onEditsave}
            />
          </h2>
        );
      })}
    </div>
  );
};

export default Todos;

const Todoitem = ({ todos, onDel,index ,onEdit, onEditcancle, onEditsave }) => {
  const inputref = useRef("");

  function handleDel() {
    return () => {
      onDel(todos.id);
    };
  }
  function handelEdit() {
    return () => {
      onEdit(todos.id);
    };
  }
  function handleCancle(id) {
    return () => {
      onEditcancle(id);
    };
  }
  function handlesave(id) {
    return () => {
      const value = inputref.current.value;
      console.log(value)
      console.log(id)
      onEditsave(index, value);
      inputref.current.value ="";
    };
  }
  if (todos.isEditing) {
    return (
      <div>
        <input ref={inputref} type="text" defaultValue={todos.todo} />
        <Button onClick={handlesave(todos.id)} label={"SAVE"} />
        <Button onClick={handleCancle(todos.id)} label={"CANCLE"} />
      </div>
    );
  }

  return (
    <div>
      <span> {todos.todo}</span>
      <Button onClick={handleDel(todos.id)} label={"DEL"} />
      <Button onClick={handelEdit(todos.id)} label={"Edit"} />
    </div>
  );
};

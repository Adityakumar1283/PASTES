import Button from "../button";
import "./style.css";
const Todos = ({ todos = [] , onEdit,onDel,}) => {
  return (
    <div>
      <h1>Your Todos</h1>
      {todos.map((todos,id) => {
        return (
          <h2>
            <Todoitem
              key={id}
              todos={todos}
              onEdit={onEdit}
              onDel={onDel}
            />
          </h2>
        );
      })}
    </div>
  );
};

export default Todos;

const Todoitem = ({ todos, onDel, onEdit }) => {
  function handleDel(id) {
    return ()=>{ onDel(todos.id)};
 
   }
  function handelEdit(id) {
    return  ()=> {onEdit(todos.id)};
  }


 
  return (
    <div>
      <span> {todos.todo}</span>
      <Button onClick={handleDel(todos.id)} label={"DEL"} />
      <Button onClick={handelEdit(todos.id)} label={"Edit"} />
      
    </div>
  );
};



const Todos = ({todos=[]}) => {
  return (
    <div>
      <h1>Your Todos</h1>
      {todos.map((data,id)=>{ 
        return (
          
              <h2>
        <Todoitem key={id} data={data}/>
        </h2>
        
        
        )
})}
    </div>
  )
}

export default Todos



const Todoitem = ({data}) => {
  return (
    <div>
      <span> {data.todo}</span>
    </div>
  )
}



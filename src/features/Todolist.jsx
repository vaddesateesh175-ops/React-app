import React from "react";

function TodoList(){
   const [todos, setTodos] = React.useState([]);
   const [ntd, setNtd] = React.useState("");

   function addTodo(){
      setTodos([...todos,ntd])
   }

    return(
    
    <div className="mybox">
        <h1>Todo list</h1>
        <input type="text" onChange={(ev)=>{setNtd(ev.target.value)}} />
        <button onClick={()=>{addTodo()}}> add todo</button>

        <ul>
            {
                todos.map((todo)=>{
                    return<li>{todo}</li>
                })
            }
        </ul>
    </div>)
}

export default TodoList;

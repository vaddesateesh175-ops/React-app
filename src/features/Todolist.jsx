import { useEffect } from "react";
import React,{ useCallback } from "react";
import Todo from "./todo";

function TodoList(){
   const [todos, setTodos] = React.useState([
    "goto gova",
    "play cricket",
    "wach ai",
    "kill bill pandey",
   ]);
   const [ntd, setNtd] = React.useState("");

   function addTodo(){
      //setTodos([...todos,ntd])
      setTodos((cTodos)=>{
        cTodos.push(ntd)
        return([...cTodos])
      })
   }
    // function handleDelete(ind){
    //     setTodos((ctodos) => {
    //     ctodos.splice(ind, 1);
    //     return [...ctodos];
    //     });
    // }
    // again the todos are rerendering so  we use callback function ti will save the reference 
   const handleDelete = useCallback(function (ind) {
    setTodos((ctodos) => {
      ctodos.splice(ind, 1);
      return [...ctodos];
    });
  }, []);
   
  
    return(
    
    <div className="mybox">
        <h1>Todo list</h1>
        <input type="text" onChange={(ev)=>{setNtd(ev.target.value)}} id="d1" />
        <button onClick={()=>{addTodo()}}> add todo</button>

        <ul>
            {
                todos.map((todo,i)=>{
                    return <Todo todo={todo} i={i} delTodo={handleDelete}></Todo>
                })
            }
        </ul>
    </div>)
}

export default TodoList;

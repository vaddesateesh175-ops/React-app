import React,{useCallback,useMemo} from "react";
import Todo from "./todo";

function TodoList(){
   const [todos, setTodos] = React.useState([
    "goto goa",
    "watch movie",
    "play cricket",
    "kill bill pandey",
    "maddali sivareddy",
   ]);
   const pdata = useMemo(() => {
    return {
      firstname: "Praveen",
      age: 23,
    };
  }, []);
   const [ntd, setNtd] = React.useState("");

   function addTodo(){
      setTodos((ctodos) => {
      ctodos.push(ntd);
      return [...ctodos];
    });
   }

    const handleDelete = useCallback(function (ind) {
    setTodos((ctodos) => {
      ctodos.splice(ind, 1);
      return [...ctodos];
    });
  }, [])
   
    return(
    
    <div className="p-2 m-2 border border-2 rounded">
        <h1>Todo list</h1>
        <input type="text" onChange={(ev)=>{setNtd(ev.target.value)}} id="d1" />
        <button onClick={()=>{addTodo()}}> add todo</button>

        <ul>
            {
                todos.map((todo,i)=>{
                    return(
                    <Todo todo={todo} pdata={pdata} i={i} delTodo={handleDelete}>

                    </Todo>);
                })
            }
        </ul>
    </div>)
}

export default TodoList;

import React,{useEffect} from "react";

function TodoList(){
   const [todos, setTodos] = React.useState([
    "goto gova",
    "play cricket",
    "watch tv",
   ]);
   const [ntd, setNtd] = React.useState("");

   function addTodo(){
    
      setTodos((ctodos)=>{
        ctodos.push(ntd)
        return([...ctodos]);
      });
   }

   function handdel(ind){
    setTodos((ctodos)=>{
        ctodos.splice(ind,1)
        return([...ctodos])
    })
   }
   
//    useEffect(()=>{
//      document.getElementById("d1").focus();
//    },[])
      useEffect(()=>{
         console.log("Todos Updated:", todos);
       }, [todos]);
        return(
    
    <div className="mybox">
        <h1>Todo list</h1>
        <input type="text" onChange={(ev)=>{setNtd(ev.target.value)}} id="d1" />
        <button onClick={()=>{addTodo()}}> add todo</button>

        <ul>
            {
                todos.map((todo,i)=>{
                    return(
                    <li className="border border-2 border-success rounded m-2 p-2">
                        {todo} <button onClick={()=>{handdel(i)}}>delete</button> 
                    </li>)
                })
            }
        </ul>
    </div>)
}

export default TodoList;

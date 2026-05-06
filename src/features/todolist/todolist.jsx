// import { useState } from "react";
// import { useGetAllTodosQuery,useDeleteTodoMutation , useLazyGetAllTodosQuery,useAddTodoMutation} from "../../services/todo";

// function Todolist(){
//    const {isLoading,data}=useGetAllTodosQuery();
//    const [deletefn]=useDeleteTodoMutation();
//    const [addTodofn]=useAddTodoMutation();
//    var[ntd,setntd]=useState("")
//    var [getLatesttodos]=useLazyGetAllTodosQuery();

//    function handleDeleteTodo(id){
//     deletefn(id).then(()=>{
//       getLatesttodos();
//     })
//    }

//    function handeleaddTodo(){
//     addTodofn(ntd).then(()=>{
//       getLatesttodos();
//     })
//    }

//    return(<div>
//      <h1>Todolist</h1>
//       {isLoading && <b>...Loading</b>}
//       <input type="text" onChange={(ev)=>{setntd(ev.target.value)}} />
//       <button onClick={()=>{handeleaddTodo()}}>ADD TODI</button>
//      {!isLoading && (
//         <ul>
//           {data?.map((todo) => {
//             return (
//               <li>{todo.title}<button onClick={()=>{ handleDeleteTodo(todo.id)}}>delete</button></li>
//             );
//           })}
//         </ul>
//       )}
//    </div>)
// }
// export default Todolist;
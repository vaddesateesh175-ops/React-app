
import React,{useEffect} from "react";

function Todo(props){
    //console.log(props.todo+"rerender")
     useEffect(() => {
        console.log(props.todo + " rerendered");
     });

    return(
        <div>
            <li className="border boorder-2 border-success rounded m-2 p-2">
                {props.todo}<button onClick={()=>{props.delTodo(props.i)}}>
                    delete
                </button>

            </li>
        </div>
    )
}
export default React.memo(Todo);
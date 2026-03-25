import {useReducer} from "react";
import { counterReducer } from "./redusers";



function Counter() {
  var [state,dispatch]=useReducer(counterReducer, {count:0})
  console.log(state)
 

  return (
    <div className="mybox">
      
  
      <h1>Counter:{state.count}</h1>
      <button onClick={()=>{dispatch({type:"INC"})}}>increment</button>
      <button onClick={()=>{dispatch({type:"DEC"})}}>decrement</button>
      <button onClick={()=>{dispatch({type:"RESET"})}}>reset</button>
    </div>
  );
}

export default Counter;
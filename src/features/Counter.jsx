import React from "react";
import Button from "@mui/material/Button";
function ButtonUsage(props) {
  return <Button variant="contained">{props.children}</Button>;
}
function Counter() {
  const [count, setCount] = React.useState(0);
  function inc(){
    setCount((c)=>{
      return(c+1)
    })
  }
  function dec(){
    setCount((c)=>{
      return(c-1)
    })
  }
  return (
    <div className="mybox">
      <h1>Counter:{count}</h1>
      <button onClick={()=>{inc()}}>increment</button>
      <button onClick={()=>{dec()}}>decrement</button>
    </div>
  );
}

export default Counter;
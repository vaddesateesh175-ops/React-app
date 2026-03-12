import Navbar from "./component/Navbar";
import Counter from "./features/Counter";
import TodoList from "./features/Todolist";

function App(){
    return(<div>
      <h1>hi react app</h1>
      <Navbar></Navbar>
      <Counter></Counter>
      <TodoList></TodoList>
    </div>)
}
export default App;
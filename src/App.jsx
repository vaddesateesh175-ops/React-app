import Navbar from "./component/Navbar";
import Counter from "./features/Counter";
import StudentForm from "./features/formhandling";

function App(){
    return(<div>
      <h1>hi react app</h1>
      <Navbar></Navbar>
      <Counter></Counter>
      <StudentForm></StudentForm>
    </div>)
}
export default App;
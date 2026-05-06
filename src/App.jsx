import Navbar from "./component/Navbar";
import {Outlet} from "react-router-dom"
function App() {
  return (
    <div className="mybox">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //use state handling
  let [todolist, setTodolist] = useState([]); // to store multiple data so took array here.

  let saveToDoList = (event) => {
    event.preventDefault(); // it will prevent to refresh the form.(but form submitted.)
    //now to take the value for txt bx.
    //event target means--> form and in that toname is name of txt box.
    let toname = event.target.toname.value;

    //to check the toname value is present in the todolist array.
    if (!todolist.includes(toname)) {
      //it will hold the previouse exsiting value and new value from toname (txt bx.)
      let finalToDoList = [...todolist, toname]; //array spreding
      setTodolist(finalToDoList);
    } else {
      alert("name is already present...!");
    }
  };
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname"></input> <button>Save</button>
      </form>

      {/* table format  */}
      <div className="outerDiv">
        <ul>
          <li>
            HTML<span>&times;</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

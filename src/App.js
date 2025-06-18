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
      let finalToDoList = [...todolist, toname]; //array spreding....
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
          {todolist.map((value, index) => {
            return (
              <ToDoListItems
                value={value}
                key={index}
                keyNumber={index} //to get the index number
                todolist={todolist} // final array contains all records.
                setTodolist={setTodolist} //the fn who changes the value of useState.
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({ value, keyNumber, todolist, setTodolist }) {
  let closeTask = () => {
    
    //now to filter the todolist with keyNumber index and show the remaining data.
    let finalData = todolist.filter((v, i) => i != keyNumber);
    console.log(finalData);
  };
  return (
    <li>
      {value}
      <span onClick={closeTask}>&times;</span>
    </li>
  );
}

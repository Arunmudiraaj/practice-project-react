// import logo from './logo.svg';
import "./App.css";
import FormInput from "./Components/FormInput";
import AllUsers from "./Components/AllUsers";
import { useState } from "react";

let allusers = [
  { id: 1, name: "arun", age: 22 },
  { id: 2, name: "riya", age: 21 },
];
function App() {
  const [users, setUsers] = useState(allusers);
  const [valid, setValid] = useState(true);
 
  const addNewData = (data) => {
    setUsers((pre) => {
      return [data, ...pre];
    });
  };

  const showInValid = () => {
    setValid(false);
  };
  const cancelled = () => {
    setValid(true);
  };

  return (
    <div>
      {valid && (
        <div className="App">
          <FormInput submitted={addNewData} inValid={showInValid} />
          <AllUsers items={users} />
        </div>
      )}
      {!valid && (
        <div className="parent">
         
          <div className="invalid">
            <div>Invalid input</div>
            <button className="btn" onClick={cancelled}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

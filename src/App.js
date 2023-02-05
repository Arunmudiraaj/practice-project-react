// import logo from './logo.svg';
import "./App.css";
import FormInput from "./Components/FormInput";
import AllUsers from "./Components/AllUsers";

import { useState } from "react";

let allusers = [
  { id: 1, name: "arun", age: 22, collage : "CBIT" },
  { id: 2, name: "riya", age: 21, collage: "IIT Delhi" },
];
const InValidModel = (props)=>{
  return (
    <div className="parent">
            <div className="invalid">
              <div>Invalid input</div>
              <button className="btn" onClick={props.click}>
                Cancel
              </button>
            </div>
          </div>
  );
}
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
      {!valid &&
       <InValidModel click={cancelled}/>
      }
    </div>
  );
}

export default App;

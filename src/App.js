import "./App.css";
import { useState } from "react";

function App() {
  const [myName, setMyName] = useState("Ashok Sah Channels");
  const handleClick = (e) => {
    let value = myName;
    if (value === "Ashok Sah Channels") {
      setMyName("Ashok Sah");
    } else {
      setMyName("Ashok Sah Channels");
    }
  };

  // OR
  
  // (value === "Ashok Sah Channels") ? 
  // setMyName("Ashok Sah") : setMyName("Ashok Sah Channels");
  // console.log(myName);
  // };

  return (
    <div className="App">
      <h1>{myName} </h1>
      <button onClick={handleClick}> Click me</button>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Signin from "./Components/Signin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Signin />
    </>
  );
}

export default App;

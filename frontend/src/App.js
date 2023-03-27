import { useState } from "react"
import "./css/styles.css";
import LargeText from "./components/LargeText";

function App () {
  const [counter, setCounter] = useState(0)
  const buttonText = "Click me";
  const onClickHanlder = () => {
    console.log(counter)
    setCounter(counter + 1);
  }

  return (
    <div className="App">
        <button onClick={onClickHanlder}>{buttonText}</button>
        <LargeText text={`Butoon was clicked ${counter} times`} />
    </div>
  );
}

export default App
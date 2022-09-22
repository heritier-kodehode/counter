import { useState } from "react";
import "./App.css";
import { CounterContext } from "./contextState/counterContext";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CounterContext.Provider value={{ count, setCount }}>
        <Home />
      </CounterContext.Provider>
    </div>
  );
}

export default App;

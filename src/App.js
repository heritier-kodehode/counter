import { useState } from "react";
import "./App.css";
import { CounterContext } from "./contextState/counterContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
function App() {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider className="App" value={{ count, setCount }}>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/counter" element={<Home />} />

        <Route path="/counter/about" element={<About />} />
        <Route path="/counter/contact" element={<Contact />} />
      </Routes>
    </CounterContext.Provider>
  );
}

export default App;

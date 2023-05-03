import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <div className="w-full h-full">
      <Navbar />
      <Title />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

import rocket from "./assets/rocket.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full relative">
      {/* START UPPER TITLE PAGE */}

      {/* circle */}
      <div className="w-full h-20 flex justify-center items-center -mb-[5rem]">
        <div className=" w-[80rem] h-[80rem] bg-black/30 rounded-full shadow-xl "></div>
      </div>
      {/*  */}
      <Navbar />
      <Title />

      {/* ROCKET */}
      <div className="w-full justify-center items-center flex absolute">
        <img
          src={rocket}
          alt="Logo Rocket"
          className="rotate-180 rocket mt-10 hover:mt-16 transition-all duration-200"
        />
      </div>
      {/* ROCKET */}

      <div className="w-full h-12 mt-72 flex justify-center items-center">
        <div className="text-white/80 h-full w-4/5 p-2 text-xl">
          <p className="paragraph">
            Welcome to my portfolio website! As an undergraduate student, I am
            thrilled to share with you my skills, experiences, and projects
            throughout my ongoing academic journey.
          </p>
        </div>
      </div>

      {/* END UPPER TITLE PAGE */}
    </div>
  );
}

export default App;

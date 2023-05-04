import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

import useWindowScrollPositions from "./components/useWindowScrollPositions ";

import rocket from "./assets/rocket.png";

function App() {
  const { scrollX, scrollY } = useWindowScrollPositions();
  const [moveRocketY, setMoveRocketY] = useState(0);
  const [moveRocketX, setMoveRocketX] = useState(0);
  const [rocketRotate, setRocketRotate] = useState(180);

  const [showRocket, setShowRocket] = useState(1);

  function setWhole(number) {
    return Math.floor(number / 50) * 50;
  }

  useEffect(() => {
    let temp = Math.floor(setWhole(scrollY));
    console.log(temp);

    if (temp >= 150 && temp < 850) {
      setMoveRocketX(Math.floor(setWhole(scrollY)) - 100);
      setRocketRotate(90);
      setShowRocket(1);
    } else if (temp < 150) {
      setMoveRocketX(0);
      setMoveRocketY(temp);
      setRocketRotate(180);
      setShowRocket(1);
    }

    if (temp >= 850) {
      setMoveRocketX(Math.floor(setWhole(scrollY)) - 100);
      setShowRocket(2);
    }
  }, [scrollY]);

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

      {showRocket === 1 ? (
        <div className="w-full justify-center items-center flex absolute">
          <img
            src={rocket}
            alt="Logo Rocket"
            className="rocket transition-translate duration-100 mt-12"
            style={{
              transform: `translateY(${moveRocketY}px) translateX(${moveRocketX}px) rotate(${rocketRotate}deg)`,
            }}
          />
        </div>
      ) : (
        <></>
      )}

      {showRocket === 2 ? (
        <div className="w-full justify-center items-center flex absolute top-[70rem] -left-[92rem]">
          <img
            src={rocket}
            alt="Logo Rocket"
            className="rocket transition-translate duration-100"
            style={{
              transform: `translateY(${moveRocketY}px) translateX(${moveRocketX}px) rotate(${rocketRotate}deg)`,
            }}
          />
        </div>
      ) : (
        <></>
      )}

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

      <section className="w-full h-screen"></section>
      <section className="w-full h-screen"></section>
    </div>
  );
}

export default App;

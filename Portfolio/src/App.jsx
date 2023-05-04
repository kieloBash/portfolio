import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

import useWindowScrollPositions from "./components/useWindowScrollPositions ";

import rocket from "./assets/rocket.png";

function App() {
  const { scrollX, scrollY } = useWindowScrollPositions();
  const [moveRocketY, setMoveRocketY] = useState(setWhole(scrollY));
  const [moveRocketX, setMoveRocketX] = useState(setWhole(scrollY));
  const [rocketRotate, setRocketRotate] = useState(180);

  const [showRocket, setShowRocket] = useState(1);

  const atPoint = [150, 850, 1000];

  function setWhole(number) {
    return Math.floor(number / 50) * 50;
  }

  useEffect(() => {
    let position = setWhole(scrollY);
    console.log(position);

    if (position >= 0 && position < atPoint[0]) {
      setMoveRocketY(position);
      setRocketRotate(180);
    } else if (position >= atPoint[0] && position <= atPoint[1]) {
      setRocketRotate(90);
      setMoveRocketX(position - atPoint[0]);
      setShowRocket(1);
    } else if (position >= atPoint[1] && position <= atPoint[2]) {
      setShowRocket(2);
      setMoveRocketX(position - atPoint[1]);
      setRocketRotate(90);
    } else if (position >= atPoint[2]) {
      setRocketRotate(180);
      setMoveRocketY(position - atPoint[2] + 50);
    }
  }, [scrollY]);

  return (
    <div className="w-screen h-full relative flex flex-col justify-center items-center">
      {/* START UPPER TITLE PAGE */}
      <section className="title w-full">
        {/* circle */}
        <div className="w-full h-20 flex justify-center items-center -mb-[5rem]">
          <div className=" w-[80rem] h-[80rem] bg-black/30 rounded-full shadow-xl "></div>
        </div>
        {/*  */}
        <div className="mt-10 w-full">
          <Navbar />
          <Title />
        </div>

        {/* ROCKET */}

        {showRocket === 1 ? (
          <div className="w-full justify-center items-center flex absolute">
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

        {showRocket === 2 ? (
          <div className="w-full justify-center items-center flex absolute top-[87rem] -left-[68rem]">
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
          <div className="text-white/80 h-full w-2/5 p-2 text-xl text-center">
            <p className="paragraph">
              Welcome to my portfolio website! As an undergraduate student, I am
              thrilled to share with you my skills, experiences, and projects
              throughout my ongoing academic journey.
            </p>
          </div>
        </div>

        {/* END UPPER TITLE PAGE */}
      </section>

      <section className="w-[130rem] mt-[15rem] px-[15rem]">
          <div className="w-full h-[50rem] bg-black/30 rounded-full shadow-xl px-24 py-8 flex flex-col items-center">

          <h1 className="text-[3rem] font-thin">ABOUT ME</h1>
          <div className="flex w-4/5 h-full">
            <h1 className="w-1/3 flex justify-center items-center text-[10rem] text-teal-300 font-bold">I'M</h1>
            <h1 className="w-2/3 bg-white ">I'M</h1>
          </div>

          </div>
      </section>
      <section className="w-full h-screen"></section>
    </div>
  );
}

export default App;

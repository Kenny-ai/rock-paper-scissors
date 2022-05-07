import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Game from "./components/Game";
import Rules from "./components/Rules";
import { StateContext } from "./Context/StateProvider";
import { Element } from "./@types/model";
import Rock from "./components/elements/Rock";
import Paper from "./components/elements/Paper";
import Scissors from "./components/elements/Scissors";
import Button from "./components/Button";

export const elementsArray: Element[] = [
  {
    id: 1,
    icon: <Rock />,
    isClicked: false,
  },
  {
    id: 2,
    icon: <Paper />,
    isClicked: false,
  },
  {
    id: 3,
    icon: <Scissors />,
    isClicked: false,
  },
];
function App() {
  const [showRules, setShowRules] = useState(false);

  // console.log(elementsArray);
  const [elements, setElements] = useState<Element[]>(elementsArray);

  const [showGame, setShowGame] = useState(false);

  const values = {
    showRules,
    setShowRules,
    elements,
    setElements,
    showGame,
    setShowGame,
  };

  return (
    <StateContext.Provider value={values}>
      <div className="app h-screen text-white">
        {!showRules && (
          <div className="">
            <Header />
            {!showGame && <Body />}
            {showGame && <Game />}
            {/* {elements[0].icon} */}
            <Button />
          </div>
        )}

        {showRules && (
          <div className="rules">
            <Rules />
          </div>
        )}
      </div>
    </StateContext.Provider>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
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
  },

  {
    id: 2,
    icon: <Paper />,
  },

  {
    id: 3,
    icon: <Scissors />,
  },
];
function App() {
  const [showRules, setShowRules] = useState(false);

  const [elements, setElements] = useState<Element[]>(elementsArray);

  const [showGame, setShowGame] = useState(false);

  const [scores, setScores] = useState({userScore: 0, cpuScore: 0})

  const values = {
    showRules,
    setShowRules,
    elements,
    setElements,
    showGame,
    setShowGame,
    scores,
    setScores,
  };

  return (
    <StateContext.Provider value={values}>
      <div className="app h-screen text-white relative">
        { (
          <div className="flex flex-col h-full justify-between">
            <Header />
            {!showGame && <Body />}
            {showGame && <Game />}

            <Button />
          </div>
        )}

        {showRules && (
          <div className="rules absolute top-0 w-full">
            <Rules />
          </div>
        )}
      </div>
    </StateContext.Provider>
  );
}

export default App;

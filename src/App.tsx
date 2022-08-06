import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Game from "./components/Game";
import Rules from "./components/Rules";
import { Element } from "./@types/model";
import Rock from "./components/elements/Rock";
import Paper from "./components/elements/Paper";
import Scissors from "./components/elements/Scissors";
import Button from "./components/Button";
import { useStateContext } from "./Context/StateProvider";

export const elementsArray: Element[] = [
  {
    id: 1,
    name: "Rock",
    icon: <Rock />,
  },

  {
    id: 2,
    name: "Paper",
    icon: <Paper />,
  },

  {
    id: 3,
    name: "Scissors",
    icon: <Scissors />,
  },
];

function App() {
  const { showGame, showRules } = useStateContext();

  return (
    <div className="app h-screen text-white relative">
      <div className="flex flex-col h-full justify-between">
        <Header />

        {!showGame && <Body />}
        {showGame && <Game />}

        <Button />
      </div>

      {showRules && (
        <div className="rules absolute top-0 w-full">
          <Rules />
        </div>
      )}
    </div>
  );
}

export default App;

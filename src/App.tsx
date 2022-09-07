import "./App.css";
import Header from "./components/Header/Header";
import Body from "./screens/Body/Body";
import Game from "./screens/Game/Game";
import Rules from "./components/Rules/RulesContainer";
import { Element } from "./@types/model";
import Rock from "./components/elements/Rock";
import Paper from "./components/elements/Paper";
import Scissors from "./components/elements/Scissors";
import Button from "./components/Button/Button";
import { useStateContext } from "./contexts/StateProvider";

export const elementsArray: Element[] = [
  {
    id: 1,
    name: "rock",
    icon: <Rock />,
  },

  {
    id: 2,
    name: "paper",
    icon: <Paper />,
  },

  {
    id: 3,
    name: "scissors",
    icon: <Scissors />,
  },
];

function App() {
  const { showGame, showRules } = useStateContext();

  return (
    <div className="app h-fit text-white relative">
      <div className="flex flex-col h-full justify-between">
        <Header />

        {!showGame && <Body />}
        {showGame && <Game />}

        <Button />
      </div>

      {showRules && (
        <div className="rules absolute top-0 w-full h-full">
          <Rules />
        </div>
      )}
    </div>
  );
}

export default App;

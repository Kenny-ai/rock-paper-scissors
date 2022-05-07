import { useContext } from "react";
import { ReactComponent as Triangle } from "../svg/bg-triangle.svg";
import "../styles/Body.css";
import { StateContext } from "../Context/StateProvider";
import { ContextInterface } from "../@types/model";
import Paper from "./elements/Paper";
import Scissors from "./elements/Scissors";
import Rock from "./elements/Rock";
import { elementsArray } from "../App";

const styles = {
  buttonStyles:
    "uppercase border-2 border-gray-300 rounded-lg px-7 py-1 cursor-pointer",
};

enum Id {ROCK = 1, PAPER, SCISSORS}

const Body = () => {
  const { elements, setElements, setShowGame } = useContext(
    StateContext
  ) as ContextInterface;

  return (
    <div className="body">
      <div className="flex justify-center items-center py-12 w-full md:mb-4">
        <div className="relative flex justify-center items-center p-12">
          <Triangle />

          <div
            className="absolute top-0 left-0"
            onClick={() => {
              setElements(
                elementsArray.filter((element) => element.id === Id.PAPER)
              );
              console.log(elements);
              setShowGame(true);
            }}
          >
            <Paper />
          </div>

          <div
            className="absolute top-0 right-0"
            onClick={() => {
              setElements(
                elementsArray.filter((element) => element.id === Id.SCISSORS)
              );
              console.log(elements);
              setShowGame(true);
            }}
          >
            <Scissors />
          </div>

          <div
            className="w-full flex justify-center absolute bottom-0"
            onClick={() => {
              setElements(
                elementsArray.filter((element) => element.id === Id.ROCK)
              );
              console.log(elements);
              setShowGame(true);
            }}
          >
            <Rock />
          </div>
        </div>
      </div>

      {/* <div className="button flex justify-center lg:justify-end md:px-12">
        <button
          className={styles.buttonStyles}
          onClick={() => {
            setShowRules(true);
          }}
        >
          Rules
        </button>
      </div> */}
    </div>
  );
};

export default Body;

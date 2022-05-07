import React, { useContext } from "react";
import { ContextInterface } from "../@types/model";
import { StateContext } from "../Context/StateProvider";
import Paper from "./elements/Paper";
import Rock from "./elements/Rock";
import Scissors from "./elements/Scissors";


const Game = () => {
  const { elements, setShowGame } = useContext(StateContext) as ContextInterface;
  
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <div className="w-full py-20 px-10 flex justify-around lg:mb-6 sm:w-1/2 lg:2/3 md:justify-between sm:px-0 bg-blue-700">
        <div className="uppercase flex flex-col items-center bg-sky-400">
          <p className="hidden md:block">You Picked</p>
          <div className="mb-10">{elements[0].icon}</div>
          <p className="md:hidden">You Picked</p>
        </div>

        <div className="flex flex-col justify-center items-center p-4 hidden lg:flex bg-teal-400">
          <h1 className="uppercase text-6xl mb-4 md:4xl lg:6xl">You win! </h1>
          <button
            className="uppercase text-sky-900 px-7 py-1 bg-white rounded-lg"
            onClick={() => {
              setShowGame(false);
            }}
          >
            Play Again
          </button>
        </div>

        <div className="uppercase flex flex-col items-center bg-yellow-300">
          <p className="hidden md:block">The House Picked</p>
          <div className="mb-10">
            <Rock />
          </div>
          <p className="md:hidden">The House Picked</p>
        </div>
      </div>

      <div className="flex flex-col items-center py-4 lg:hidden">
        <h1 className="uppercase text-6xl mb-4">You win! </h1>
        <button
          className="uppercase text-sky-900 px-7 py-1 bg-white rounded-lg"
          onClick={() => {
            setShowGame(false);
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Game;

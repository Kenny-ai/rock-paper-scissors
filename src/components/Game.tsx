import React, { useEffect, useState } from "react";
import { useStateContext } from "../Context/StateProvider";
import { elementsArray } from "../App";

const Game = () => {
  const { elements, setShowGame, scores, setScores } = useStateContext();

  // set user's pick and computer's pick variables
  const yourPick = elements[0].icon;

  // eslint-disable-next-line
  const [randomIcon, setRandomIcon] = useState<React.ReactNode>(
    elementsArray[Math.floor(Math.random() * 3)].icon
  );

  // create an array of the icons picked
  const iconArray = [yourPick, randomIcon];

  // get ids of each element picked as an array
  const getIds = (array: React.ReactNode[]) => {
    let arr = [];
    for (let i of array) {
      for (let j of elementsArray) {
        if (Object.values(j).includes(i)) {
          arr.push(j.id);
        }
      }
    }
    return arr;
  };

  // check win takes both ids returns the id of the winner
  const checkWin = (array: number[]) => {
    let arr = array.sort();
    if (arr[0] === arr[1]) {
      return "tie";
    }
    if (arr[1] > arr[0] + 1) {
      return arr[0];
    }
    return arr[1];
  };

  // assign winner id to winId variable
  const winId = checkWin(getIds(iconArray));

  // get id of element user picked
  const userId = getIds(iconArray)[0];

  // check winner by comparing winner id to userId
  const result = winId === "tie" ? "tie" : winId === userId ? "win" : "lose";

  useEffect(() => {
    setScores(
      result === "win"
        ? { userScore: scores.userScore + 1, cpuScore: scores.cpuScore }
        : result === "lose"
        ? { userScore: scores.userScore, cpuScore: scores.cpuScore + 1 }
        : scores
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <div className="w-full py-16 flex justify-around items-center sm:w-1/2 sm:justify-between lg:py-20 md:justify-around md:2/3 lg:mb-6 lg:2/3">
        <div className="uppercase flex flex-col items-center ">
          <p className="hidden md:block md:text-xl">You Picked</p>
          <div className="mb-10 md:mt-10">{yourPick}</div>
          <p className="md:hidden md:text-xl">You Picked</p>
        </div>

        {
          <div className="desktop-win-message flex-col justify-center items-center p-4 hidden lg:flex">
            <h1 className="uppercase text-6xl mb-4 lg:text-4xl xl:text-6xl">
              {result === "win"
                ? "You win!"
                : result === "lose"
                ? "You lose!"
                : "tie!"}
            </h1>
            <button
              className={`uppercase text-sky-900 px-7 py-1 bg-white
            rounded-lg hover:scale-105
            ${result === "lose" && `text-red-500`}`}
              onClick={() => {
                setShowGame(false);
              }}
            >
              Play Again
            </button>
          </div>
        }

        <div className="uppercase flex flex-col items-center">
          <p className="hidden md:block md:text-xl">The House Picked</p>

          {<div className="mb-10 md:mt-10">{randomIcon}</div>}

          {/* {!showHouse && (
            <div className="mb-10 md:mt-10 bg-gray-700 w-32 h-32 opacity-20 rounded-full lg:w-44 lg:h-44"></div>
          )} */}

          <p className="md:hidden md:text-xl">The House Picked</p>
        </div>
      </div>

      {
        <div className="mobile-win-message flex flex-col items-center pb-10 lg:hidden">
          <h1 className="uppercase text-4xl mb-4">
            {result === "win"
              ? "You win!"
              : result === "lose"
              ? "You lose!"
              : "tie!"}
          </h1>
          <button
            className={`uppercase text-sky-900 px-7 py-1 bg-white
            rounded-lg hover:scale-105
            ${result === "lose" && `text-red-500`}`}
            onClick={() => {
              setShowGame(false);
            }}
          >
            Play Again
          </button>
        </div>
      }
    </div>
  );
};

export default Game;

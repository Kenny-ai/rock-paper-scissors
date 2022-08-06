import React, { ReactNode, useEffect, useState } from "react";
import { useStateContext } from "../Context/StateProvider";
import { elementsArray } from "../App";
import { motion } from "framer-motion";
import "../styles/Body.css";

const Game = () => {
  const { elements, setShowGame, scores, setScores } = useStateContext();

  const handlePlayAgain = () => {
    setShowGame(false);
  };

  const PlayAgainButton = () => {
    return (
      <motion.button
        className={`uppercase text-sky-900 px-7 py-1 bg-white
            rounded-lg
            ${result === "you lose!" && `text-red-500`}`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0, 0, 0, 1],
          transition: {
            duration: 2,
            ease: "easeIn",
            times: [0, 0.2, 0.5, 0.8, 1],
          },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handlePlayAgain}
      >
        Play Again
      </motion.button>
    );
  };

  // set user's pick and computer's pick variables
  const userPick = elements[0].icon;

  // eslint-disable-next-line
  const [randomIcon, setRandomIcon] = useState<React.ReactNode>(
    elementsArray[Math.floor(Math.random() * 3)].icon
  );

  // get id of element picked
  const getId = (icon: ReactNode) => {
    return elementsArray.filter((item) => item.icon === icon)[0].id;
  };

  const userPickId = getId(userPick);
  const randomIconId = getId(randomIcon);

  // checkWin takes both ids and returns the id of the winner
  const checkWin = (array: number[]) => {
    let arr = array.sort();
    if (arr[0] === arr[1]) {
      return 0;
    }
    if (arr[1] > arr[0] + 1) {
      return arr[0];
    }
    return arr[1];
  };

  // assign winner id to winnerId variable
  const winnerId = checkWin([userPickId, randomIconId]);

  // get loserId
  const loserId =
    winnerId === 0
      ? 0
      : [userPickId, randomIconId].filter((id) => id !== winnerId)[0];

  // check winner by comparing winnerId to userPickId
  const result =
    winnerId === 0
      ? "tie!"
      : winnerId === userPickId
      ? "you win!"
      : "you lose!";

  useEffect(() => {
    setScores(
      result === "you win!"
        ? { userScore: scores.userScore + 1, cpuScore: scores.cpuScore }
        : result === "you lose!"
        ? { userScore: scores.userScore, cpuScore: scores.cpuScore + 1 }
        : scores
    );
    // eslint-disable-next-line
  }, []);

  // get iconName from id
  const getIconName = (id: number) => {
    if (id === 0) {
      return null;
    } else return elementsArray.filter((item) => item.id === id)[0].name;
  };

  // get loser and winner names
  const winnerName = getIconName(winnerId);
  const loserName = getIconName(loserId);

  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <div className="w-full py-16 flex justify-around items-center sm:w-1/2 sm:justify-between lg:py-20 md:justify-around md:2/3 lg:mb-6 lg:2/3">
        <div className="uppercase flex flex-col items-center ">
          <p className="hidden md:block md:text-xl">You Picked</p>
          <motion.div
            className={`mb-10 md:mt-10 rounded-full ${
              userPickId === winnerId ? ` winner` : ``
            } `}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 1, 1],
              transition: {
                duration: 1,
                ease: "easeIn",
                times: [0, 0.2, 0.5, 0.8, 1],
              },
            }}
          >
            {userPick}
          </motion.div>
          <p className="md:hidden md:text-xl">You Picked</p>
        </div>

        <div className="desktop-win-message flex-col justify-center items-center p-4 hidden lg:flex">
          <motion.p
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: [0, 0, 0, 0, 1], y: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeIn",
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            className="uppercase text-6xl mb-4 lg:text-4xl xl:text-6xl"
          >
            {result}
          </motion.p>
          {loserId !== 0 && (
            <motion.p
              className="mb-4 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0, 0, 1] }}
              transition={{
                duration: 1.5,
                ease: "easeIn",
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
            >
              {winnerName} beats {loserName}
            </motion.p>
          )}
          {<PlayAgainButton />}
        </div>

        <div className="uppercase flex flex-col items-center">
          <p className="hidden md:block md:text-xl">The House Picked</p>
          <motion.div
            className={`mb-10 md:mt-10 rounded-full ${
              randomIconId === winnerId ? `winner` : ``
            } `}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 0, 1, 1],
              transition: {
                duration: 1,
                ease: "easeIn",
                times: [0, 0.2, 0.5, 0.8, 1],
              },
            }}
          >
            {randomIcon}
          </motion.div>

          <p className="md:hidden md:text-xl">The House Picked</p>
        </div>
      </div>

      {
        <div className="mobile-win-message flex flex-col items-center pb-10 lg:hidden">
          <p className="uppercase text-4xl mb-4">{result}</p>
          <PlayAgainButton />
        </div>
      }
    </div>
  );
};

export default Game;

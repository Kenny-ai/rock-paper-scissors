import React, { useContext, useState } from "react";

import { ContextInterface, Element } from "../@types/model";
import { elementsArray } from "../App";

const StateContext = React.createContext<ContextInterface | null>(null);

interface Props {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  const [showRules, setShowRules] = useState(false);

  const [elements, setElements] = useState<Element[]>(elementsArray);

  const [showGame, setShowGame] = useState(false);

  const [scores, setScores] = useState({ userScore: 0, cpuScore: 0 });

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
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(StateContext) as ContextInterface;

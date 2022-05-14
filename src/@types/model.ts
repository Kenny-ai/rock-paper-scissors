import React from "react";

export interface ContextInterface {
  showRules: boolean;
  setShowRules: React.Dispatch<React.SetStateAction<boolean>>;
  elements: Element[];
  setElements: React.Dispatch<React.SetStateAction<Element[]>>;
  showGame: boolean;
  setShowGame: React.Dispatch<React.SetStateAction<boolean>>;
  scores: Scores;
  setScores: React.Dispatch<React.SetStateAction<Scores>>;
}

export interface Element {
  id: number;
  icon: React.ReactNode;
}

export interface Scores {
  userScore: number;
  cpuScore: number;
}

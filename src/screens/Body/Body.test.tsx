import { render, screen } from "../../__tests__/test-utils";
import "@testing-library/jest-dom";

import React from "react";
import Body from "./Body";

test("on", () => {
  render(<Body />);
  expect(screen.getByTestId("rock")).toBeInTheDocument();
  expect(screen.getByTestId("paper")).toBeInTheDocument();
  expect(screen.getByTestId("scissors")).toBeInTheDocument();
});

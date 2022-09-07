import React from "react";
import { render, screen } from "../../__tests__/test-utils";
import "@testing-library/jest-dom";
import Header from "./Header";
import userEvent from "@testing-library/user-event";

test("on initial render, reset button should be present", () => {
  render(<Header />);
  expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
});

test("on initial render, scores should be zero", () => {
  render(<Header />);

  expect(screen.getByTestId("user-score")).toHaveTextContent("0");
  expect(screen.getByTestId("cpu-score")).toHaveTextContent("0");
});

test("scores should be zero when user clicks the reset button", () => {
  render(<Header />);
  userEvent.click(screen.getByRole("button", { name: /reset/i }));

  expect(screen.getByTestId("user-score")).toHaveTextContent("0");
  expect(screen.getByTestId("cpu-score")).toHaveTextContent("0");
});

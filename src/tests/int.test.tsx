import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import App from "../App";
import { render, screen } from "./test-utils";

test("rules component should popup when user clicks rules button", () => {
  render(<App />);
  userEvent.click(screen.getByRole("button", { name: /rules/i }));
  expect(screen.getByTestId("mobile-rules")).toBeInTheDocument();
});

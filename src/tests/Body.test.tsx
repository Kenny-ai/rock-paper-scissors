import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Body from "../components/Body";
import { useStateContext } from "../Context/StateProvider";

test("on", () => {
  // const { elements } = useStateContext();

  render(<Body />);
  userEvent.click(screen.getByTestId("paper"));
  // expect(elements[0].id).toEqual(2);
});

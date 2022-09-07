import { render, RenderOptions } from "@testing-library/react";
import React, { FC, ReactElement } from "react";
import { ContextProvider } from "../contexts/StateProvider";

const TestProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: TestProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };

import { elementsArray } from "../../src/App";
import { computerPickTest, checkWin } from "../../src/components/Game";

describe("My First Test", () => {
  it("succesfully loads", () => {
    // it successfully loads
    cy.visit("/");

    // rules modal comes up when rules button is clicked
    cy.findByRole("button", { name: /rules/i }).click();
    cy.findByTestId("desktop-rules").should("be.visible");

    // rules modal isn't visible when closed
    cy.findByTestId("close-desktop-rules").click({ force: true });
    cy.findByTestId("desktop-rules").should("not.exist");

    // const id = elementsArray.filter((item) => item.icon === computerPickTest)[0]
    //   .id;

    // // const id = 1;

    // cy.findByTestId("paper").click({ force: true });

    // const winner = checkWin([id, 2]);

    // if (winner === id) {
    //   expect(cy.findByTestId("cpu-score")).to.equal(1);
    // }
  });
});

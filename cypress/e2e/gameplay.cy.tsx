/* eslint-disable no-loop-func */
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

    let obj = {
      rock: 1,
      paper: 2,
      scissors: 3,
    };

    let oldScores: { user: number; cpu: number },
      newScores: { user: number; cpu: number };

    for (let j = 1; j <= 3; j++) {
      cy.findByTestId("user-score").then((score) => {
        oldScores = { ...oldScores, user: parseInt(score.text()) };
      });

      cy.findByTestId("cpu-score").then((score) => {
        oldScores = { ...oldScores, cpu: parseInt(score.text()) };
      });

      const iconName = Object.keys(obj).find((i) => obj[i] === j);

      cy.findByTestId(iconName).click();

      cy.get("[data-testid='computer-pick']").then((pick) => {
        let iconName = pick.children().data()["testid"];
        let computerId = obj[iconName];

        const winner = checkWin([j, computerId]);

        if (winner === computerId) {
          newScores = {
            ...oldScores,
            cpu: oldScores.cpu + 1,
          };
          cy.findByTestId("cpu-score").should("have.text", newScores.cpu);
          cy.findByTestId("result").should("have.text", "you lose!");
        } else {
          cy.findByTestId("cpu-score").should("have.text", oldScores.cpu);

          if (winner === 0) {
            cy.findByTestId("result").should("have.text", "tie!");
          } else cy.findByTestId("result").should("have.text", "you win!");
        }
      });

      cy.findByRole("button", { name: /play again/i }).click();
    }

    cy.findByRole("button", { name: /reset/i }).click();
    cy.findByTestId("user-score").should("have.text", 0);
    cy.findByTestId("cpu-score").should("have.text", 0);
  });
});

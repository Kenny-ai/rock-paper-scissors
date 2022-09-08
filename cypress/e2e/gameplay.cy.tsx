/* eslint-disable no-loop-func */
describe("Gameplay", () => {
  it("displays scores and results correctly after every play", () => {
    // it successfully loads
    cy.visit("/");

    // function to check winner
    const checkWin = (array: number[]) => {
      const arr = array.sort();
      if (arr[0] === arr[1]) {
        return 0;
      }
      if (arr[1] > arr[0] + 1) {
        return arr[0];
      }
      return arr[1];
    };

    const obj = {
      rock: 1,
      paper: 2,
      scissors: 3,
    };

    let oldScores: { user: number; cpu: number },
      newScores: { user: number; cpu: number };

    // play 3 rounds to mimick gameplay
    for (let j = 1; j <= 3; j++) {
      // get scores before each round begins
      cy.findByTestId("user-score").then((score) => {
        oldScores = { ...oldScores, user: parseInt(score.text()) };
      });

      cy.findByTestId("cpu-score").then((score) => {
        oldScores = { ...oldScores, cpu: parseInt(score.text()) };
      });

      const iconName = Object.keys(obj).find((i) => obj[i] === j);

      cy.findByTestId(iconName).click();

      cy.get("[data-testid='computer-pick']").then((pick) => {
        const iconName = pick.children().data()["testid"];
        const computerId = obj[iconName];

        // get winner
        const winner = checkWin([j, computerId]);

        // show appropriate results and scores after each round
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
    // scores should be zero after clicking rest button
    cy.findByRole("button", { name: /reset/i }).click();
    cy.findByTestId("user-score").should("have.text", 0);
    cy.findByTestId("cpu-score").should("have.text", 0);
  });
});

import React from "react";
import "./App.scss";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  const allNewDice = () => {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  };

  //Initiate the state for the dice.
  const [dice, setDice] = React.useState(allNewDice());

  const diceElements = dice.map((die) => {
    return <Die value={die.value} />;
  });
  return (
    <main>
      <div className="die">{diceElements}</div>
      <button className="die__btn" onClick={() => setDice(allNewDice())}>
        Roll Dice
      </button>
    </main>
  );
}

export default App;

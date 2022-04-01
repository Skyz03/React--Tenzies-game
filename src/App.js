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

  //create a new function holdDice that passes id of die to be held and console logs it.
  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };
  //Initiate the state for the dice.

  //   setDice((oldDice) => {
  //     oldDice.map((die) => {
  //       if (die.id === id) {
  //         return { ...die, isHeld: !die.isHeld };
  //       } else {
  //         return die;
  //       }
  //     });
  //   });
  // };

  const [dice, setDice] = React.useState(allNewDice());
  const diceElements = dice.map((die) => {
    return (
      <Die
        onClick={() => holdDice(die.id)}
        isHeld={die.isHeld}
        key={die.id}
        value={die.value}
      />
    );
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

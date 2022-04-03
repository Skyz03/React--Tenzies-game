import React from "react";
import "./App.scss";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }

  const allNewDice = () => {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  };

  const [dice, setDice] = React.useState(allNewDice());

  //create a new function holdDice that passes id of die to be held and console logs it.
  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const rollDice = (isHeld) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  };

  let [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You won");
    }
  }, [dice]);
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
      <button className="die__btn" onClick={() => rollDice()}>
        {tenzies ? "New Game" : "Roll Dice"}
      </button>
    </main>
  );
}

export default App;

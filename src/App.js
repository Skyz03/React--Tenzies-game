import React from "react";
import "./App.scss";
import Die from "./components/Die"; // The die component
import { nanoid } from "nanoid"; // The element to get unique id
import Confetti from "react-confetti"; //The confetti component to show when a user won the game

function App() {
  // A function to generate new number for dice everytime.
  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }

  // A function to generate all new dice array.
  const allNewDice = () => {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie()); // This pushes them in the new array.
    }
    return newDice;
  };

  //Initialization of state to generate new dice array all the time.
  const [dice, setDice] = React.useState(allNewDice());

  //A function to held dice by id if they match.
  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  //A function to roll dice and set its state into new dice array.
  const rollDice = (isHeld) => {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      //Once every thing is held it set the state to false and generate a whole bunch of new dice.
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  };

  //A state to determine if the game is won or not.
  let [tenzies, setTenzies] = React.useState(false);

  //A useeffect which runs everytime when dice array changes. Also checks. if dice are held and all matches the same value.
  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  //An element to render them to the screen.
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
      {/* Checks weather the game is won or not if it is won it shows the confetti. */}
      {tenzies ? <Confetti /> : null}

      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      {/* This shows the dice element in the game  */}
      <div className="die">{diceElements}</div>
      {/* A button which runs the rollDice function when clicked */}
      <button className="die__btn" onClick={() => rollDice()}>
        {/* A button which condition render when game is won it will show "New Game" text nor "Roll Dice" text. */}
        {tenzies ? "New Game" : "Roll Dice"}
      </button>
    </main>
  );
}

export default App;

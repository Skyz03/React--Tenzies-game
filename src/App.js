import React from "react";
import "./App.scss";
import Die from "./components/Die";

function App() {
  const allNewDice = () => {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1);
    }
    return newDice;
  };

  //Initiate the state for the dice.
  const [dice, setDice] = React.useState(allNewDice());

  const diceElements = dice.map((die) => {
    return <Die value={die} />;
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

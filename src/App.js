import { useState } from "react";

import "./App.css";

function App() {
  const diceNumbers = {
    1: "⚀",
    2: "⚁",
    3: "⚂",
    4: "⚃",
    5: "⚄",
    6: "⚅",
  };

  const emojiReactions = {
    1: "😭",
    2: "🙃",
    3: "😀",
    4: "🤩",
    5: "🤣",
    6: "🔥",
  };

  const [diceState, setDiceState] = useState([5, 5]);

  const rollDice = (event) => {
    const firstDie = Math.floor(Math.random() * 6) + 1;
    const secondDie = Math.floor(Math.random() * 6) + 1;
    setDiceState([firstDie, secondDie]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dice roll</h1>
        <p className="diceNumber">
          <span className="eachReactionEmoji">
            {emojiReactions[diceState[0]]}
          </span>
          {diceNumbers[diceState[0]]}
          {diceNumbers[diceState[1]]}
          <span className="eachReactionEmoji">
            {emojiReactions[diceState[1]]}
          </span>
        </p>

        <button className="buttonRollDice" onClick={rollDice}>
          Roll Die
        </button>
      </header>
    </div>
  );
}

export default App;

import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const currentPlayerHelper = (turns) => {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") currentPlayer = "O";

  return currentPlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = currentPlayerHelper(prevTurns)
      // let currentPlayer = "X";

      // if (prevTurns.length > 0 && prevTurns[0].player === "X")
      //   currentPlayer = "O";

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  const activePlayer = currentPlayerHelper(gameTurns)

  // let activePlayer = "X";
  // if (gameTurns.length > 0 && gameTurns[0].player === "X") activePlayer = "O";

  return (
    <main>
      <section id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            initialName="PLAYER 1"
            symbol="X"
          />
          <Player
            isActive={activePlayer === "O"}
            initialName="PLAYER 2"
            symbol="O"
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </section>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;

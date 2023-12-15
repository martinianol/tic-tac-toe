import Player from "./components/Player";

function App() {
  return (
    <main>
      <section id="game-container">
        <ol id="players">
          <Player name="PLAYER 1" symbol="X" />
          <Player name="PLAYER 2" symbol="O" />
        </ol>
        GAME BOARD
      </section>
      <section id="log">LOG</section>
    </main>
  );
}

export default App;

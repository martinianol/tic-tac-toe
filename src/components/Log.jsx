const Log = ({ turns, players }) => {
  return (
    <ol id="log">
      {turns.map(({ player, square }) => (
        <li key={`${square.row}-${square.col}`}>
          {players[player]} selected row {square.row + 1} column {square.col + 1}
        </li>
      ))}
    </ol>
  );
};

export default Log;

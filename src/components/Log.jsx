const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map(({ player, square }) => (
        <li key={`${square.row}-${square.col}`}>
          {player} selected row {square.row + 1} column {square.col + 1}
        </li>
      ))}
    </ol>
  );
};

export default Log;

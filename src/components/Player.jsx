import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditMode, setEditMode] = useState(false);

  const toggleEditMode = () => setEditMode(!isEditMode);

  let playerName = isEditMode ? (
    <input type="text" required />
  ) : (
    <span className="player-name">{name}</span>
  );

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleEditMode}>{isEditMode ? "SAVE" : "EDIT"}</button>
    </li>
  );
};

export default Player;

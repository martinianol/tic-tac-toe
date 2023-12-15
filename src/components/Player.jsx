import { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditMode, setEditMode] = useState(false);

  const toggleEditMode = () => setEditMode((prevState) => !prevState);

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = isEditMode ? (
    <input type="text" required value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleEditMode}>{isEditMode ? "SAVE" : "EDIT"}</button>
    </li>
  );
};

export default Player;

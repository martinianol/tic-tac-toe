import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditMode, setEditMode] = useState(false);

  const toggleEditMode = () =>{
    if(isEditMode) onChangeName(symbol, playerName)
     setEditMode((prevState) => !prevState)
    };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = isEditMode ? (
    <input type="text" required value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <span>

      <button onClick={toggleEditMode}>{isEditMode ? "SAVE" : "EDIT"}</button>
      </span>
    </li>
  );
};

export default Player;

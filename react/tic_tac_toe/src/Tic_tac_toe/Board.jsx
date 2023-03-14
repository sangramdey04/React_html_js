import React, { useState } from "react";
import Square from "./Square";
export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const checkWinner = () => {
    const winList = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let list of winList) {
      const [a, b, c] = list;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }

    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (idx) => {
    if (state[idx] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[idx] = xTurn ? "X" : "O";
    setState(copyState);
    setXTurn(!xTurn);
  };
  const again = () => {
    setState(Array(9).fill(null));
  };
  const reset=()=>{
      setState(Array(9).fill(null));
  }
  return (
    <>
      <div className="board-container">
        {isWinner ? (
          <>
            {" "}
            <b style={{ color: "green", fontSize: "30px" }}> {isWinner}</b> Win
            the game <button onClick={again}>Play Again</button>{" "}
          </>
        ) : (


          <>
            <h2>Tic-Tac-Toe</h2>
            <div className="player">
              <h3>
                Move for player{" "}
                <span style={{ color: "blue", fontWeight: "bold" }}>
                  {xTurn ? "X" : "O"}
                </span>{" "}
              </h3>
            </div>
            <div className="board-row">
              <Square onclick={() => handleClick(0)} value={state[0]} />
              <Square onclick={() => handleClick(1)} value={state[1]} />
              <Square onclick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="board-row">
              <Square onclick={() => handleClick(3)} value={state[3]} />
              <Square onclick={() => handleClick(4)} value={state[4]} />
              <Square onclick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="board-row">
              <Square onclick={() => handleClick(6)} value={state[6]} />
              <Square onclick={() => handleClick(7)} value={state[7]} />
              <Square onclick={() => handleClick(8)} value={state[8]} />
            </div>
            <br />
            <button onClick={reset}>Reset </button>
          </>
        )}
      </div>
    </>
  );
}

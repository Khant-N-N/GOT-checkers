import React, { useState } from "react";
import starkLogo from "../assets/house-stark-transparent.png";
import baratheonLogo from "../assets/baratheon.png";
import lannisterLogo from "../assets/lannister.png";
import arrynLogo from "../assets/arryn.png";
import tullyLogo from "../assets/tully.png";
import tyrellLogo from "../assets/tyrell.png";
import targaryenLogo from "../assets/targaryen.png";
import martellLogo from "../assets/martell.png";
import greyjoyLogo from "../assets/greyjoy.png";

const playGroundSquares = [
  2, 4, 6, 8, 9, 11, 13, 15, 18, 20, 22, 24, 25, 27, 29, 31, 34, 36, 38, 40, 41,
  43, 45, 47, 50, 52, 54, 56, 57, 59, 61, 63,
];

const availablePath = [
  [2, 9],
  [63, 56],
  [6, 15, 24],
  [41, 50, 59],
  [25, 18, 11, 4],
  [61, 54, 47, 40],
  [4, 13, 22, 31, 40],
  [25, 34, 43, 52, 61],
  [41, 34, 27, 20, 13, 6],
  [59, 52, 45, 38, 31, 24],
  [2, 11, 20, 29, 38, 47, 56],
  [9, 18, 27, 36, 45, 54, 63],
  [8, 15, 22, 29, 36, 43, 50, 57],
];

const player1 = [2, 4, 6, 8, 9, 11, 13, 15, 18, 20, 22, 24];

const player2 = [41, 43, 45, 47, 50, 52, 54, 56, 57, 59, 61, 63];

const GameBoard = () => {
  const [draggedPiece, setDraggedPiece] = useState(null);
  const [prevPiece, setPrevPiece] = useState(null);

  const handleDragStart = (e) => {
    setDraggedPiece(e.target.src);
    setPrevPiece(e.target.id);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("white")) return;
    e.target.firstChild.src = draggedPiece;
    setDraggedPiece(null);
    document.getElementById(Number(prevPiece)).src = "";
  };

  const btwSquares = [];
  const wtbSquares = [];
  for (let i = 1; i <= 64; i++) {
    if (
      (i > 0 && i < 9) ||
      (i > 16 && i < 25) ||
      (i > 32 && i < 41) ||
      (i > 48 && i < 57)
    ) {
      btwSquares.push(
        <div
          draggable={true}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          key={i}
          className={`${
            i % 2 === 0 ? "black" : "white"
          } sm:w-[5rem] sm:h-[5rem] w-[2.5rem] h-[2.5rem] flex justify-center`}
        >
          {player1.includes(i) && (
            <img id={i} src={baratheonLogo} className="h-[100%] house-logo" />
          )}

          {player2.includes(i) && (
            <img id={i} src={lannisterLogo} className="h-[100%] house-logo" />
          )}

          {!player1.includes(i) && !player2.includes(i) ? (
            <img id={i} src="" className="h-[100%] house-logo" />
          ) : null}
        </div>
      );
    } else {
      wtbSquares.push(
        <div
          draggable={true}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          key={i}
          className={`${
            i % 2 === 0 ? "white" : "black"
          } sm:w-[5rem] sm:h-[5rem] w-[2.5rem] h-[2.5rem] flex justify-center`}
        >
          {player1.includes(i) && (
            <img id={i} src={baratheonLogo} className="h-[100%] house-logo" />
          )}

          {player2.includes(i) && (
            <img id={i} src={lannisterLogo} className="h-[100%] house-logo" />
          )}

          {!player1.includes(i) && !player2.includes(i) ? (
            <img id={i} src="" className="h-[100%] house-logo" />
          ) : null}
        </div>
      );
    }
  }
  return (
    <div
      className="grid grid-cols-8 rounded sm:w-[40rem] sm:h-[40rem] w-[20rem]
     h-[20rem] mx-auto border my-[3rem] shadow-[2px_2px_5px_0_#efeee6]"
    >
      {[...btwSquares]
        .concat(...wtbSquares)
        .sort((a, b) => Number(a.key) - Number(b.key))}
    </div>
  );
};

export default GameBoard;

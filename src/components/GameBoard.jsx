import React from "react";

const GameBoard = () => {
  const btwSquares = [];
  const wtbSquares = [];
  for (let i = 1; i <= 64; i++) {
    if (
      i < 9 ||
      (i > 16 && i < 25) ||
      (i > 32 && i < 41) ||
      (i > 48 && i < 57)
    ) {
      btwSquares.push(
        <div
          key={i}
          className={`${
            i % 2 === 0 ? "ground" : "grass"
          } sm:w-[5rem] sm:h-[5rem] w-[2.5rem] h-[2.5rem]`}
        ></div>
      );
    } else {
      wtbSquares.push(
        <div
          key={i}
          className={`${
            i % 2 === 0 ? "grass" : "ground"
          } sm:w-[5rem] sm:h-[5rem] w-[2.5rem] h-[2.5rem]`}
        ></div>
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

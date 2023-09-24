import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-[2rem] h-[4rem] shadow-[0_0_5px_0_#efeee6]">
      <div>logo</div>
      <ul className="flex gap-[2rem]">
        <li className="cursor-pointer font-caveat text-xl">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer font-caveat text-xl">
          <Link to="/game">Game</Link>
        </li>
        <li className="cursor-pointer font-caveat text-xl">
          <Link to="/houses">Houses</Link>
        </li>
        <li className="cursor-pointer font-caveat text-xl">
          <Link to="/story">Story</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

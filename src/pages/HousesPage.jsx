import React from "react";
import starkLogo from "../assets/house-stark-transparent.png";
import baratheonLogo from "../assets/baratheon.png";
import lannisterLogo from "../assets/lannister.png";
import arrynLogo from "../assets/arryn.png";
import tullyLogo from "../assets/tully.png";
import tyrellLogo from "../assets/tyrell.png";
import targaryenLogo from "../assets/targaryen.png";
import martellLogo from "../assets/martell.png";
import greyjoyLogo from "../assets/greyjoy.png";

const HousesPage = () => {
  return (
    <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 gap-[2rem] py-4">
      <div className="h-[10rem] flex justify-center">
        <img
          src={baratheonLogo}
          className="house-logo h-full cursor-pointer"
          alt="baratheon logo"
        />
      </div>
      <div className="h-[8rem] flex justify-center">
        <img
          src={starkLogo}
          className="house-logo cursor-pointer"
          alt="stark logo"
        />
      </div>
      <div className="h-[10rem] flex justify-center">
        <img
          src={lannisterLogo}
          className="house-logo h-full cursor-pointer"
          alt="baratheon logo"
        />
      </div>
      <div className="h-[10rem] flex justify-center">
        <img
          src={tyrellLogo}
          className="house-logo h-full cursor-pointer"
          alt="tyrell logo"
        />
      </div>
      <div className="h-[10rem] flex justify-center">
        <img
          src={targaryenLogo}
          className="house-logo h-full cursor-pointer"
          alt="targaryen logo"
        />
      </div>
      <div className="h-[10rem] flex justify-center">
        <img
          src={martellLogo}
          className="house-logo h-full cursor-pointer"
          alt="martell logo"
        />
      </div>
      <div className="h-[10rem] flex justify-center">
        <img
          src={greyjoyLogo}
          className="house-logo h-full cursor-pointer"
          alt="greyjoy logo"
        />
      </div>
      <div className="h-[8rem] flex justify-center">
        <img
          src={tullyLogo}
          className="house-logo h-full cursor-pointer"
          alt="tully logo"
        />
      </div>
      <div className="h-[9rem] flex justify-center">
        <img
          src={arrynLogo}
          className="house-logo h-full cursor-pointer"
          alt="arryn logo"
        />
      </div>
    </div>
  );
};

export default HousesPage;

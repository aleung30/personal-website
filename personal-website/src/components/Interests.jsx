import React from "react";
import { Element } from "react-scroll";
import alley from "../assets/alley.JPG";
import bike from "../assets/bike.JPG";
import boat from "../assets/boat.JPG";
import oregon from "../assets/oregon.JPG";
import oregonbeach from "../assets/oregonbeach.JPG";
import park from "../assets/park.JPG";
import japan from "../assets/japan.JPG";
import market from "../assets/market.JPG";
import restaurant from "../assets/restaurant.JPG";
import { Link } from "react-scroll";

const Interests = () => {
  return (
    <Element name="interests" className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold">My Creative Corner</h1>
      <div className="flex justify-between items-center gap-4">
        <Link to="photography" smooth={true} duration={750}>photography</Link>
        <Link to="food" smooth={true} duration={750}>food</Link>
        <Link to="photography" smooth={true} duration={750}>photography</Link>


    
      </div>

      {/* Photography section */}

      <Element name="photography" className="gap-4 columns-2 md:columns-3">
        <div className="grid gap-4">
          <div>
            <img className="w-full rounded-xl shadow" src={alley} />
          </div>
          <div>
            <img className="w-full rounded-xl shadow" src={oregon} />
          </div>
          <div>
            <img className="w-full rounded-xl shadow" src={boat} />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img className="w-full rounded-xl shadow" src={park} />
          </div>
          <div>
            <img className="w-full rounded-xl shadow" src={oregonbeach} />
          </div>
          <div>
            <img className="w-full rounded-xl shadow" src={market} />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img className="w-full rounded-xl shadow" src={japan} />
          </div>
          <div>
            <img className="w-full rounded-xl shadow" src={bike} />
          </div>
          <div>
            <img className="w-full rounded-xl shadow" src={restaurant} />
          </div>
        </div>
      </Element>
    </Element>
  );
};

export default Interests;

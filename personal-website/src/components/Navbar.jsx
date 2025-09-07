import React from "react";
import { Link } from "react-scroll"


export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5">
   <Link to="hero" smooth={true} duration={500} className="font-bold text-xl">
   Anita Leung
   </Link>
      <ul className="flex justify-between items-center gap-4">
        <li>
          <Link to="about" smooth={true} duration={500}>about</Link>
        </li>
        <li>
        <Link to="experience" smooth={true} duration={500}>experience</Link>
        </li>
        <li>
        <Link to="projects" smooth={true} duration={500}>projects</Link>
        </li>
    
        <li>
        <Link to="interests" smooth={true} duration={500}>interests</Link>
        </li>
        <button className="rounded-[10px] text-semibold bg-[#A5C8D6] p-2">

 
        <li>
        <Link to="contact" smooth={true} duration={500}>contact</Link>
        </li>
        </button>
      </ul>
    </nav>
  );
};

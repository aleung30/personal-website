import React from "react";
import profile from "../assets/profile.jpg";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { Element } from "react-scroll";
import Typewriter from "typewriter-effect";
import { useState } from "react"

const Hero = () => {
  return (
    <Element id="hero" className="flex justify-between min-h-screen">
      <div className="flex flex-col gap-5 pt-70 pl-20">
        {/* Introduction */}
        <h1 className="font-ontobold text-6xl">
            <Typewriter
            options={{
                strings: "Hi, I'm Anita Leung",
                autoStart: true,
                loop:false,
                delay: 150,
                deleteSpeed: 100,
                pauseFor: 3000,
                cursor: "",
            }} 
            />
            </h1>
        <p className="font-medium text-xl">
          i'm an aspiring software developer, <br /> pursuing a computer science degree at ubc
        </p>

        {/* Other profile links */}

        <ul className="mt-10 flex gap-5">
          <button className="h-10 w-10 border-2 rounded-full border-[#3F4E4F]">
            <li>
              <a href="https://github.com/aleung30">
                <FaGithub className="w-full h-full object-cover" />
              </a>
            </li>
          </button>
          <button className="h-10 w-10 border-2 rounded-full border-[#3F4E4F] p-1">
            <li>
              <a href="https://www.linkedin.com/in/anita-leungg/">
                <CiLinkedin className="w-full h-full object-cover" />
              </a>
            </li>
          </button>
          <button className="h-10 w-10 border-2 rounded-full border-[#3F4E4F] p-1">
            <li>
              <a href="mailto:anitaleung.tech@gmail.com">
                <MdOutlineMail className="w-full h-full object-cover" />
              </a>
            </li>
          </button>
        </ul>
        {/* Put in resume pdf */}
        <button className="h-10 w-25 border-2 rounded-full border-[#3F4E4F]">
          my resume
        </button>
      </div>

      {/* Profile image container */}

      <div className="pt-50 pr-50">
        <div className="md:w-90 md:h-90 sm:w-50 sm:h-50 rounded-full overflow-hidden border-5 aspect-square border-[#3F4E4F] shrink-0">
          <img
            className="w-full h-full object-cover scale-200"
            src={profile}
          ></img>
        </div>
      </div>
    </Element>
  );
};

export default Hero;

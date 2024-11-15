import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="w-full text-center h-screen">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center flex">
        <div>
          <p className="text-sm text-gray-600 tracking-widest">
            LET'S SOMETHING BUILD TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi I'm <span className="text-[#5651e5]">Client</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] mx-auto">
            I'm a front-end web developer specialing in building exceptional
            digital experience.Currently, I'm focused on building responsive
            front-end web application while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[335px] mx-auto py-4">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

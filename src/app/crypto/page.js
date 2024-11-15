import React from "react";
import Img2 from "/public/assets/crypto.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Img2}
        />
        <div className="absolute max-w-[1240px] w-full top-[70%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Crypto APP</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            fugit illo voluptatum dicta? Minima reprehenderit error nihil
            possimus, corrupti nam quae ipsum corporis ipsam cumque?
            Exercitationem nesciunt maxime quasi voluptas, quis eligendi. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Alias ut fugiat,
            adipisci libero quaerat harum tenetur vero maiores vel a provident
            rem similique excepturi explicabo magni quisquam beatae officiis
            ipsa. Incidunt, dolor nisi.
          </p>
          <button className="px-8 py-2 mr-8 mt-4">Demo</button>
          <button className="px-8 py-2">Code</button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
        <div className="p-2">
            <p className="text-center font-bold pb-4">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"/>
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"/>
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"/>
                Next Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"/>
                Javascript 
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"/>
                Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"/>
                Google API
              </p>
            </div>
        </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;

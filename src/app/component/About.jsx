import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div id="about" className="w-full h-full md:flex h-screen p-2 items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl text-[#5651e5] tracking-widest">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p>// I am not your normal developer </p>
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
        
          <Link href="/#">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src="/assets/about.jpg" width={300} height={250} />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Image from "next/image";
import Img1 from "/public/assets/property.jpg";
import Img2 from "/public/assets/crypto.jpg";
import Img3 from "/public/assets/netflix.jpg";
import Img4 from "/public/assets/twitch.jpg";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="mx-auto max-w-[1240] py-16 px-2">
        <p className="mt-[200px] md:uppercase text-xl text-[#5651e5] tracking-widest">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={Img1}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={Img2}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={Img3}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Twitch"
            backgroundImg={Img4}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

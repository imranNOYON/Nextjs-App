import Image from "next/image";
import Hero from "./component/Hero";
import About from "./component/About";
import Skill from "./component/Skill"
import Projects from "./component/Projects";
import Contact from "./component/Contact";
export default function Home() {
  return (
    <>
    
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </>
  );
}

import React from "react";
import Link from "next/link"
import Image from "next/image"
import Img5 from "/public/assets/contact.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
const Contact = () => {
  return (
    <div id="contacts" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto py-16 px-2 w-full">
        <p className="mt-[200px] md:uppercase text-xl text-[#5651e5] tracking-widest">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                <div className="lg:p-4 h-full">
                    <div>
                        <Image className="rounded-xl hover:scale-105 ease in duration-300" src={Img5}/>
                    </div>
                    <div>
                        <h2 className="py-2">Name Here</h2>
                        <p>Front-End Developer
                        </p>
                        <p className="py-4">I am a available for freelence or full time position. Contact me and let's talk</p>
                    </div>
                    <div>
                    <div className="uppercase pt-8">
                    <p>Contact Me</p>
                    <div className="flex items-center justify-between py-4">
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
               
          </div>
        {/* right */}
        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
                <form>
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Name</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                        </div>
                        
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Name</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                        </div>
                        
                    </div>
                    <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" />
                    </div>
                    <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                    </div>
                    <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                           <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10'></textarea>
                    </div>
                    <button className="w-full text-gray-100 p-4 mt-4">Send Message</button>
                </form>
            </div>
        </div>

        </div>
        <div className="flex justify-center py-12">
        <Link href={"/"}>
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <HiOutlineChevronDoubleUp className="text-[#5651e5]"  size={30}/>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

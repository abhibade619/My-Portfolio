import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-wrap justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To Reach Out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:bade.ab@northeastern.edu"
            className="underline hover:text-gray-200"
          >
            bade.ab@northeastern.edu
          </a>
        </li>
        <li className="flex gap-2 items-center mt-2">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/ab8921de/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200"
          >
            linkedin.com/in/ab8921de
          </a>
        </li>
        <li className="flex gap-2 items-center mt-2">
          <FaGithub size={20} />
          <a
            href="https://github.com/abhibade619"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200"
          >
            github.com/abhibade619
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;


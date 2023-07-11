import React from "react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Hind } from "next/font/google";
import Link from "next/link";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const Footer = () => {
  return (
    <div
      id="footer"
      className={`bg-black w-full h-32 text-white p-5 relative overflow-hidden lg:px-32`}
    >
      <div className="absolute p-4 lg:bottom-0 text-sm lg:text-xl">
        © 2023 Juan Santos • All Rights Reserved.
      </div>
      <div className="absolute p-4 bottom-0 lg:right-16 ">
        <div className="flex flex-row gap-2 ">
          <Link
            href={"https://www.github.com/SinampalukanEnthusiast"}
            target="_blank"
            className="hover:text-jordy-blue decoration-jordy-blue transition-all"
          >
            <AiFillGithub size={"30px"} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/juan-francisco-santos/"}
            target="_blank"
            className="hover:text-jordy-blue decoration-jordy-blue transition-all"
          >
            <AiFillLinkedin size={"30px"} />
          </Link>
          <Link
            href={"mailto:juansantos2kplus2@gmail.com"}
            target="_blank"
            alt="Email Address"
            className="hover:text-jordy-blue decoration-jordy-blue transition-all"
          >
            <MdOutlineAlternateEmail size={"30px"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

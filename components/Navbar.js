"use client";
import React, { useEffect, useState } from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["200"],
});

const Navbar = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY > 0) {
      setFix(true);
      // console.log("triggered");
      // console.log("fixed", fix);
    } else {
      setFix(false);
      // console.log("fixed", fix);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  }, []);
  // console.log("window.scrollY ", window.scrollY);
  // console.log("fix ", fix);
  const scrolled = fix ? "mx-0 transition-all " : "mx-16 transition-all";
  return (
    <div
      className={`${heebo.className} sticky top-0 z-10 hidden md:flex flex-col md:flex-row lg:gap-24 gap-10 justify-center p-4 border-b border-black md:h-50 h-auto bg-white ${scrolled}`}
    >
      <Link href="/#about" className="md:text-2xl text-xl" scroll={false}>
        About
      </Link>

      <Link href="/#skills" className="md:text-2xl text-xl" scroll={false}>
        Skills
      </Link>
      <Link href="/#projects" className="md:text-2xl text-xl" scroll={false}>
        Projects
      </Link>
      <Link href={"#footer"} className="md:text-2xl text-xl" scroll={false}>
        Contact
      </Link>
      <Link
        href={"resume.pdf"}
        // download={true}
        locale={false}
        className="md:text-2xl text-xl"
        scroll={false}
        rel="noopener noreferrer"
        target="_blank"
      >
        Resume
      </Link>
      {/* <Link
        href={""}
        className="md:text-2xl text-xl"
        rel="noopener noreferrer"
        target="_blank"
      >
        Resume
      </Link> */}
    </div>
  );
};

export default Navbar;

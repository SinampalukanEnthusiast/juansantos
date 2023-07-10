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
      className={`${heebo.className} sticky top-0 z-10 flex gap-24 justify-center p-4 border-b border-black h-50 bg-white ${scrolled}`}
    >
      <Link href="/#about" className="text-2xl" scroll={false}>
        About
      </Link>

      <Link href="/#skills" className="text-2xl" scroll={false}>
        Skills
      </Link>
      <Link href="/#projects" className="text-2xl" scroll={false}>
        Projects
      </Link>
      <Link href={"#footer"} className="text-2xl" scroll={false}>
        Contact
      </Link>
      {/* <Link
        href={""}
        className="text-2xl"
        rel="noopener noreferrer"
        target="_blank"
      >
        Resume
      </Link> */}
    </div>
  );
};

export default Navbar;

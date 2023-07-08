import React from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["200"],
});

const Navbar = () => {
  return (
    <div
      className={`${heebo.className} flex gap-24 justify-center p-4 border-b border-black mx-16`}
    >
      <Link href="#about" className="text-2xl">
        About
      </Link>

      <Link href="#skills" className="text-2xl">
        Skills
      </Link>
      <Link href="#projects" className="text-2xl">
        Projects
      </Link>
      <Link
        href={""}
        className="text-2xl"
        rel="noopener noreferrer"
        target="_blank"
      >
        Contact
      </Link>
      <Link
        href={""}
        className="text-2xl"
        rel="noopener noreferrer"
        target="_blank"
      >
        Resume
      </Link>
    </div>
  );
};

export default Navbar;

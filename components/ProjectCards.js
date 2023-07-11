"use client";

import Image from "next/image";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdLink } from "react-icons/md";
import { Hind } from "next/font/google";
import Link from "next/link";
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ProjectCards = ({
  imgLink,
  siteLink,
  gitHubLink,
  isIntersecting,
  name,
  tags,
  description,
}) => {
  const show = "translate-y-0 transition-all opacity-100 duration-1000";
  const hidden = "translate-y-full  transition-all opacity-0 ";
  return (
    // Card
    <div
      className={`group lg:h-[500px] lg:w-1/3 h-[350px] mx-4 relative rounded-xl list-delay ease-in-out
      ${isIntersecting ? show : hidden}
      `}
    >
      <div className="z-20 opacity-100 w-full group-hover:scale-105 transition-all group-hover:-translate-y-2">
        <div className="absolute top-0 hidden lg:flex flex-row justify-between w-full gap-6 pb-6">
          {siteLink && (
            <Link
              href={siteLink || "/"}
              rel="noopener noreferrer"
              target="_blank"
              className="text-xl underline hover:scale-105 hover:text-sunset decoration-sunset transition-all text p-5"
            >
              <MdLink size={"35px"} />
            </Link>
          )}
          {gitHubLink && (
            <Link
              href={gitHubLink || "/"}
              rel="noopener noreferrer"
              target="_blank"
              className="text-xl underline hover:scale-105 hover:text-jordy-blue decoration-jordy-blue transition-all text p-5"
            >
              <AiFillGithub size={"35px"} />
            </Link>
          )}
        </div>
      </div>
      {/* Description */}
      <div className="flex items-center justify-center absolute bottom-5 w-full z-10 group-hover:opacity-100 group-hover:scale-105 group-hover:drop-shadow-lg transition-all drop-shadow-md hover:drop-shadow-xl">
        <div className="z-10 bg-white h-36 p-5 flex flex-col justify-between w-full text-ellipsis ... overflow-clip">
          <div>
            <div className="flex flex-col md:flex-row justify-between ">
              <h1 className={`${hind.className} text-xl font-semibold `}>
                {name || "Project"}
              </h1>
              <h1 className="my-0">{tags || "JavaScript, Python"}</h1>
            </div>
            <div className="sm:text-md hidden sm:block t">
              {description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestias eos neque et magni maiores voluptatum voluptates natus esse minima animi"}
            </div>
            <div className="flex lg:hidden flex-row justify-start gap-6 pb-6">
              {siteLink && (
                <Link
                  href={siteLink}
                  target="_blank"
                  className="text-xl underline hover:scale-105 hover:text-sunset decoration-sunset transition-all text"
                >
                  {"Live link"}
                </Link>
              )}
              {gitHubLink && (
                <Link
                  href={gitHubLink}
                  target="_blank"
                  className="text-xl underline hover:scale-105 hover:text-jordy-blue decoration-jordy-blue transition-all text"
                >
                  {"GitHub"}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Links */}

      <Image
        src={imgLink}
        fill
        alt={`${name} project picture`}
        style={{ objectFit: "cover" }}
        className="-z-10 opacity-70 group-hover:opacity-100 group-hover:scale-105 group-hover:drop-shadow-lg transition-all rounded-xl drop-shadow-sm"
      />
    </div>
  );
};

export default ProjectCards;

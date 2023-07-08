import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Hind } from "next/font/google";
import Link from "next/link";
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ProjectCards = ({ imgLink, isIntersecting, name, tags, description }) => {
  const show = "translate-y-0 transition-all opacity-100 duration-1000";
  const hidden = "translate-y-full  transition-all opacity-0 ";
  return (
    // Card
    <div
      className={`group h-[700px] w-1/3 flex items-center justify-center relative rounded-xl list-delay ease-in-out
      ${isIntersecting ? show : hidden}
      
      `}
    >
      {/* Description */}
      <div className="absolute bottom-10 w-full z-10 group-hover:opacity-100 group-hover:scale-105 group-hover:drop-shadow-lg transition-all drop-shadow-md">
        <div className="z-10 bg-white h-52 p-5 flex flex-col justify-between ">
          <div>
            <div className="flex flex-row justify-between ">
              <h1 className={`${hind.className} text-2xl font-semibold `}>
                {name || "Project"}
              </h1>
              <h1 className="my-0">{tags || "JavaScript, Python"}</h1>
            </div>
            <div className="text-md">
              {description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestias eos neque et magni maiores voluptatum voluptates natus esse minima animi"}
            </div>
          </div>
          <div className="flex flex-row justify-start gap-6 pb-6">
            <Link
              href={"/"}
              className="text-xl underline hover:scale-105 hover:text-sunset decoration-sunset transition-all text"
            >
              {"Live link"}
            </Link>
            <Link
              href={"/"}
              className="text-xl underline hover:scale-105 hover:text-jordy-blue decoration-jordy-blue transition-all text"
            >
              {"GitHub"}
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={imgLink}
        fill
        alt={`${name} project picture`}
        className="opacity-70 group-hover:opacity-100 group-hover:scale-105 group-hover:drop-shadow-lg transition-all rounded-t-3xl drop-shadow-sm"
      />
    </div>
  );
};

export default ProjectCards;
